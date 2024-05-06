import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { RolesFilter } from "./Filters/Roles";
import { NoOfEmployeesFilter } from "./Filters/NoOfEmployees";
import { ExperienceFilter } from "./Filters/Experience";
import { RemoteFilter } from "./Filters/Remote";
import { TechStackFilter } from "./Filters/TechStack";
import { MinBasePayFilter } from "./Filters/MinBasePay";
import { CompanyNameFilter } from "./Filters/CompanyName";
import { useAppSelector } from "../../redux";
import { memo } from "react";

const FilterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-end",
  padding: `0 ${theme.typography.pxToRem(20)} ${theme.typography.pxToRem(20)}`,
  gap: 10,
}));
const RolesFilterMemo = memo(RolesFilter);
const TechStackFilterMemo = memo(TechStackFilter);
const RemoteFilterMemo = memo(RemoteFilter);
const MinBasePayFilterMemo = memo(MinBasePayFilter);
const CompanyNameFilterMemo = memo(CompanyNameFilter);
const ExperienceFilterMemo = memo(ExperienceFilter);
const NoOfEmployeesFilterMemo = memo(NoOfEmployeesFilter);

export const JobFilter = () => {
  const filters = useAppSelector((state) => state.filters);
  return (
    <FilterContainer>
      <RolesFilterMemo roles={filters.roles} />
      <NoOfEmployeesFilterMemo noOfEmp={filters.noOfEmp } />
      <ExperienceFilterMemo experience={filters.experience} />
      <RemoteFilterMemo remote={filters.remote} />
      <TechStackFilterMemo techStack={filters.techStack} />
      <MinBasePayFilterMemo minBasePay={filters.minBasePay } />
      <CompanyNameFilterMemo companyName={filters.companyName ?? ""} />
    </FilterContainer>
  );
};
