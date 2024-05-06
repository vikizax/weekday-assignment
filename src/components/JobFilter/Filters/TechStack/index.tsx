import { Stack } from "@mui/material";
import Select from "react-select";
import { techStackFilterData } from "../../filter.data";
import { FilterTitle } from "../FilterTitle";
import { BaseFilterType } from "../../types";
import { useAppDispatch } from "../../../../redux";
import { setTechStack } from "../../../../redux/slice/filters.slice";

type Params = {
  techStack: BaseFilterType[] | null;
};

export const TechStackFilter = ({ techStack }: Params) => {
  const isActive = techStack && techStack.length > 0 ? true : false
  const disptach = useAppDispatch();
  return (
    <Stack>
      {isActive && <FilterTitle>Tech Stack</FilterTitle>}
      <Select
        options={techStackFilterData}
        isMulti
        placeholder="Tech Stack"
        onChange={(newValue) => {
          const toSetVal = newValue.length > 0 ? newValue : null;
          disptach(setTechStack(toSetVal as BaseFilterType[]));
        }}
        styles={{
          control: (base) => ({
            ...base,
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
