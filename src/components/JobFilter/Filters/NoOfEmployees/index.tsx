import Select from "react-select";
import { noOfEmpFilterData } from "../../filter.data";
import { Stack } from "@mui/material";
import { FilterTitle } from "../FilterTitle";
import { BaseFilterType } from "../../types";
import { useAppDispatch } from "../../../../redux";
import { setNoOfEmp } from "../../../../redux/slice/filters.slice";

type Params = {
  noOfEmp: BaseFilterType[] | null;
};

export const NoOfEmployeesFilter = ({ noOfEmp }: Params) => {
  const isActive = noOfEmp && noOfEmp.length > 0 ? true : false;
  const dispatch = useAppDispatch();
  return (
    <Stack>
      {isActive && <FilterTitle>Number of Employees</FilterTitle>}
      <Select
        options={noOfEmpFilterData}
        isMulti
        placeholder="Number of Employees"
        onChange={(newValue) => {
          const toSetVal = newValue.length > 0 ? newValue : null;
          dispatch(setNoOfEmp(toSetVal as any as BaseFilterType[]));
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
