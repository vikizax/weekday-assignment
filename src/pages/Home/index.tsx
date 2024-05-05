import { Box, Grid, LinearProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useIntersactionObserver } from "../../hooks/useIntersactionObserver";
import { IJobFetchResult } from "./types";

export const Home = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { elementRef, isVisible } = useIntersactionObserver(0.5)
    const limit = useRef<number>(10)
    const offset = useRef<number>(0)
    const [fetchedData, setFetchedData] = useState<IJobFetchResult>({ jdList: [], totalCount: 0 })

    const fetchData = async (limit: number = 10, offset: number = 0, abortController?: AbortController) => {
        try {
            const body = JSON.stringify({
                limit,
                offset,
            });
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const signal = abortController?.signal;
            if (signal) signal.onabort = () => setIsLoading(false)
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
            setFetchedData(prev => ({ totalCount: result.totalCount, jdList: prev.jdList.concat(result.jdList) }))
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
                offset.current += 1
                await fetchData(limit.current, offset.current, abortController);
            })();
        }
        return () => {
            abortController.abort()
        }
    }, [isVisible])


    return (
        <Box paddingY={({ typography }) => typography.pxToRem(20)} paddingX={({ typography }) => typography.pxToRem(14)}>
            <Grid container spacing={{
                'xs': 3,
            }}
            >
                {
                    fetchedData.jdList.length > 0 && fetchedData.jdList.map((job, idx) => (
                        <Grid item key={`item-${job.jdUid}-${idx}`} xs={12} sm={6} md={4} alignItems={'end'}>
                            <Box key={`${job.jdUid}`} border={'1px solid black'}>
                                {job.companyName}
                                <p>{job.jobDetailsFromCompany}</p>
                            </Box>
                        </Grid>
                    )
                    )
                }
                {/* last intersecting element */}
                <div ref={elementRef} />
            </Grid>
            {isLoading && <LinearProgress sx={{ marginY: 2 }} />}
        </Box>
    );
};
