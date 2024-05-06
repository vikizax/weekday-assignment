import { Stack } from "@mui/material";
import Select from "react-select";
import { techStackFilterData } from "../../filter.data";
import { FilterTitle } from "../FilterTitle";

export const TechStackFilter = () => {
  return (
    <Stack>
     <FilterTitle>Tech Stack</FilterTitle>
      <Select
        options={techStackFilterData}
        isMulti
        placeholder="Tech Stack"
        onChange={(newValue) => {
          console.log({ newValue });
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
