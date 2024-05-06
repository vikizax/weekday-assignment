import { Stack, TextField } from "@mui/material";
import { styled } from "@mui/material";
import { FilterTitle } from "../FilterTitle";

const FilterTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-inputSizeSmall": {
    padding: `${theme.typography.pxToRem(7.5)} ${theme.typography.pxToRem(8)}`,
    color: "#000",
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 500,
    height: "1.4375rem",
  },
}));

export const CompanyNameFilter = () => {
  return (
    <Stack>
      <FilterTitle>
        Company Name
      </FilterTitle>
      <FilterTextField
        size="small"
        placeholder="Company Name"
        onChange={(event) => {
          console.log(event.target.validationMessage);
        }}
      />
    </Stack>
  );
};
