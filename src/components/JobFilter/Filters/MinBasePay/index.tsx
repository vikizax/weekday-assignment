import { Stack } from "@mui/material";
import Select from "react-select";
import { minBaseSalFilterData } from "../../filter.data";
import { FilterTitle } from "../FilterTitle";
import { BaseFilterType } from "../../types";
import { useAppDispatch } from "../../../../redux";
import { setMinBasePay } from "../../../../redux/slice/filters.slice";

type Params = {
  minBasePay: BaseFilterType | null;
};

export const MinBasePayFilter = ({ minBasePay }: Params) => {
  const isActive = minBasePay ? true : false;
  const dispatch = useAppDispatch();
  return (
    <Stack>
      {isActive && <FilterTitle>Min Base Pay Salary</FilterTitle>}
      <Select
        options={minBaseSalFilterData}
        isClearable
        placeholder="Minimum Base Pay Salary"
        onChange={(newValue) => {
          const toSetVal = newValue?.value ? newValue : null;
          dispatch(setMinBasePay(toSetVal));
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
        }}
      />
    </Stack>
  );
};
