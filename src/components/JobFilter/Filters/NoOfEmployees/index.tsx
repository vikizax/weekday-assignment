import Select from "react-select";
import { noOfEmpFilterData } from "../../filter.data";
import { Stack } from "@mui/material";
import { FilterTitle } from "../FilterTitle";

export const NoOfEmployeesFilter = () => {
  return (
    <Stack>
      <FilterTitle>Number of Employees</FilterTitle>
      <Select
        options={noOfEmpFilterData}
        isMulti
        placeholder="Number of Employees"
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
