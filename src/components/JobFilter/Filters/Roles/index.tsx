import { Stack } from "@mui/material";
import Select from "react-select";
import { rolesFilterData } from "../../filter.data";
import { FilterTitle } from "../FilterTitle";
import { RolesFilterType } from "../../types";
import { useAppDispatch } from "../../../../redux";
import { setRoles } from "../../../../redux/slice/filters.slice";

type Params = {
  roles: RolesFilterType | null;
};

export const RolesFilter = ({ roles }: Params) => {
  const isActive = roles && roles.length > 0 ? true : false;
  const dispatch = useAppDispatch();
  return (
    <Stack>
      {isActive && <FilterTitle>Roles</FilterTitle>}
      <Select
        options={rolesFilterData}
        isMulti
        placeholder="Roles"
        onChange={(newValue) => {
          const toSetVal = newValue.length > 0 ? newValue : null;
          dispatch(setRoles(toSetVal as any as RolesFilterType));
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
