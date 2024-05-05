
export type JobType = {
    jdUid: string;
    jdLink: string;
    jobDetailsFromCompany: string;
    maxJdSalary: number;
    minJdSalary: number | null;
    salaryCurrencyCode: string;
    location: string;
    minExp: number | null;
    maxExp: number | null;
    jobRole: string;
    companyName: string;
    logoUrl: string;
}

export interface IJobFetchResult {
    jdList: JobType[];
    totalCount: number;
}