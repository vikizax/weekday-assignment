import { Stack } from "@mui/material";
import Select from "react-select";
import { rolesFilterData } from "../../filter.data";

export const RolesFilter = () => {
  return (
    <Stack>
      <Select
        options={rolesFilterData}
        isMulti
        placeholder="Roles"
        onChange={(newValue) => {
          console.log({ newValue });
        }}
      />
    </Stack>
  );
};
