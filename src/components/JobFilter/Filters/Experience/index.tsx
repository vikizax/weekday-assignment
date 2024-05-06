import { Stack } from "@mui/material";
import Select from "react-select";
import { experienceFilterData } from "../../filter.data";
import { FilterTitle } from "../FilterTitle";
import { BaseFilterType } from "../../types";
import { useAppDisptach } from "../../../../redux";
import { setExperience } from "../../../../redux/slice/filters.slice";

type Params = {
  experience: BaseFilterType | null;
};

export const ExperienceFilter = ({ experience }: Params) => {
  const isActive = experience ? true : false;
  const dispatch = useAppDisptach();
  return (
    <Stack>
      {isActive && <FilterTitle>Experience</FilterTitle>}
      <Select
        options={experienceFilterData}
        placeholder="Experience"
        isClearable
        onChange={(newValue) => {
          const toSetVal = newValue?.value ? newValue: null
          dispatch(setExperience(toSetVal))
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
