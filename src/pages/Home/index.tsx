import { Box, Grid, LinearProgress, Stack } from "@mui/material";
import { memo, useEffect, useRef, useState } from "react";
import { useIntersactionObserver } from "../../hooks/useIntersactionObserver";
import { IJobFetchResult } from "./types";
import { JobCard } from "../../components/JobCard";
import { JobFilter } from "../../components/JobFilter";
import { useAppDisptach, useAppSelector } from "../../redux/index";
import { setJobs } from "../../redux/slice/jobs.slice";

const JobCardMemo = memo(JobCard);

export const Home = () => {
  const jobs = useAppSelector((state) => state.jobs);
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDisptach();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { elementRef, isVisible } = useIntersactionObserver(0.5);
  const limit = useRef<number>(10);
  const offset = useRef<number>(0);

  const fetchData = async (
    limit: number = 10,
    offset: number = 0,
    abortController?: AbortController
  ) => {
    try {
      const body = JSON.stringify({
        limit,
        offset,
      });
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const signal = abortController?.signal;
      if (signal) signal.onabort = () => setIsLoading(false);
      const requestOptions: RequestInit = {
        method: "POST",
        headers,
        body,
        signal: signal,
      };
      setIsLoading(true);
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const result = (await response.json()) as IJobFetchResult;
      dispatch(setJobs(result));
      setIsLoading(false);

      return abortController;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      await fetchData(limit.current, offset.current, abortController);
    })();
    return () => {
      const exception = new DOMException("Aborting - Page exited");
      abortController.abort(exception);
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    if (isVisible && !isLoading) {
      (async () => {
        offset.current += 1;
        await fetchData(limit.current, offset.current, abortController);
      })();
    }
    return () => {
      abortController.abort();
    };
  }, [isVisible]);

  useEffect(() => {
    dispatch(setJobs({ ...jobs, jdList: [], filters }));
  }, [filters]);

  return (
    <Box
      paddingY={({ typography }) => typography.pxToRem(20)}
      paddingX={({ typography }) => typography.pxToRem(14)}
    >
      <Stack direction={"row"} justifyContent={"center"}>
        <JobFilter />
      </Stack>
      <Grid
        container
        spacing={{
          xs: 3,
        }}
      >
        {jobs.jdList.length > 0 &&
          jobs.jdList.map((job, idx) => (
            <Grid
              item
              key={`item-${job.jdUid}-${idx}`}
              xs={12}
              sm={6}
              md={4}
              alignItems={"end"}
            >
              <JobCardMemo key={`${job.jdUid}`} {...job} />
            </Grid>
          ))}
        {/* last intersecting element */}
        <div ref={elementRef} />
      </Grid>
      {isLoading && <LinearProgress sx={{ marginY: 2 }} />}
    </Box>
  );
};
