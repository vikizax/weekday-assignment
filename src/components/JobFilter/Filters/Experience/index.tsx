import { Stack } from "@mui/material";
import Select from "react-select";
import { experienceFilterData } from "../../filter.data";
import { FilterTitle } from "../FilterTitle";

export const ExperienceFilter = () => {
  return (
    <Stack>
      <FilterTitle>Experience</FilterTitle>
      <Select
        options={experienceFilterData}
        placeholder="Experience"
        isClearable
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
        }}
      />
    </Stack>
  );
};