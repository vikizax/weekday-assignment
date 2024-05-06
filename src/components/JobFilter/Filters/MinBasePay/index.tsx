import { Stack } from "@mui/material";
import Select from "react-select";
import { minBaseSalFilterData } from "../../filter.data";
import { FilterTitle } from "../FilterTitle";

export const  MinBasePayFilter = () => {
  return (
    <Stack>
      <FilterTitle>Min Base Pay Salary</FilterTitle>
      <Select
        options={minBaseSalFilterData}
        isClearable
        placeholder="Minimum Base Pay Salary"
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
          })
        }}
      />
    </Stack>
  );
};
