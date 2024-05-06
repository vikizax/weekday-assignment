import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CompanyNameFilter } from "./Filters/CompanyName";
import { RolesFilter } from "./Filters/Roles";
import { ExperienceFilter } from "./Filters/Experience";
import { RemoteFilter } from "./Filters/Remote";
import { MinBasePayFilter } from "./Filters/MinBasePay";
import { NoOfEmployeesFilter } from "./Filters/NoOfEmployees";
import { TechStackFilter } from "./Filters/TechStack";
import { useAppSelector } from "../../redux";

const FilterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-end",
  padding: `0 ${theme.typography.pxToRem(20)} ${theme.typography.pxToRem(20)}`,
  gap: 10,
}));

export const JobFilter = () => {
  const filters = useAppSelector((state) => state.filters);
  return (
    <FilterContainer>
      <RolesFilter roles={filters.roles} />
      <NoOfEmployeesFilter noOfEmp={filters.noOfEmp} />
      <ExperienceFilter experience={filters.experience} />
      <RemoteFilter remote={filters.remote} />
      <TechStackFilter techStack={filters.techStack} />
      <MinBasePayFilter minBasePay={filters.minBasePay} />
      <CompanyNameFilter companyName={filters.companyName} />
    </FilterContainer>
  );
};
