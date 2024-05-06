export type BaseFilterType = {
    value: string;
    label: string;
};

export type RolesFilterType = (BaseFilterType & { category: string; })[];

export interface IFilters {
    roles: RolesFilterType | null;
    techStack: BaseFilterType[] | null;
    remote: BaseFilterType[] | null;
    noOfEmp: BaseFilterType[] | null;
    minBasePay: BaseFilterType | null;
    experience: BaseFilterType | null;
    companyName: string | null;
}