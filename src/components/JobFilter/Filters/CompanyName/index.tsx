import { Stack, TextField } from "@mui/material";
import { styled } from "@mui/material";
import { FilterTitle } from "../FilterTitle";
import { useAppDisptach } from "../../../../redux";
import { setCompanyName } from "../../../../redux/slice/filters.slice";

const FilterTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-inputSizeSmall": {
    padding: `${theme.typography.pxToRem(7.5)} ${theme.typography.pxToRem(8)}`,
    color: "#000",
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 500,
    height: "1.4375rem",
  },
}));

type Params = {
  companyName: string | null;
};

export const CompanyNameFilter = ({ companyName }: Params) => {
  const isActive = companyName ? true : false;
  const dispatch = useAppDisptach();
  return (
    <Stack>
      {isActive && <FilterTitle>Company Name</FilterTitle>}
      <FilterTextField
        size="small"
        placeholder="Company Name"
        onChange={(event) => {
          const toSetVal = event.target.value ? event.target.value : null;
          dispatch(setCompanyName(toSetVal));
        }}
        value={companyName ?? ""}
      />
    </Stack>
  );
};
