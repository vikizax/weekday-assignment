import { Stack } from "@mui/material";
import Select from "react-select";
import { remoteFilterData } from "../../filter.data";
import { FilterTitle } from "../FilterTitle";
import { BaseFilterType } from "../../types";
import { useAppDisptach } from "../../../../redux";
import { setRemote } from "../../../../redux/slice/filters.slice";

type Params = {
  remote: BaseFilterType[] | null;
};

export const RemoteFilter = ({ remote }: Params) => {
  const isActive = remote && remote.length > 0 ? true : false;
  const dispatch = useAppDisptach();
  return (
    <Stack>
      {isActive && <FilterTitle>Remote</FilterTitle>}
      <Select
        options={remoteFilterData}
        isMulti
        placeholder="Remote"
        onChange={(newValue) => {
          const toSetVal = newValue.length > 0 ? newValue : null;
          dispatch(setRemote(toSetVal as BaseFilterType[]));
        }}
        styles={{
          control: (base) => ({
            ...base,
            minWidth: "150px",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Lexend , sans-serif",
          }),
          menuList: (base) => ({
            ...base,
            textTransform: "capitalize",
            fontFamily: '"Lexend",sans-serif',
            fontSize: 14,
            fontWeight: 400,
          }),
          multiValue: (base) => ({
            ...base,
            textTransform: "capitalize",
            fontFamily: '"Lexend",sans-serif',
            fontSize: 14,
            fontWeight: 400,
          }),
        }}
      />
    </Stack>
  );
};
