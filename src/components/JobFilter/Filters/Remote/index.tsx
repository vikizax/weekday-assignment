import { Stack } from "@mui/material";
import Select from "react-select";
import { remoteFilterData } from "../../filter.data";
import { FilterTitle } from "../FilterTitle";

export const RemoteFilter = () => {
  return (
    <Stack>
      <FilterTitle>Remote</FilterTitle>
      <Select
        options={remoteFilterData}
        isMulti
        placeholder="Remote"
        onChange={(newValue) => {
          console.log({ newValue });
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
