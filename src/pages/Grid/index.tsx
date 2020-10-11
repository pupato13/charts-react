import React, { useEffect, useMemo, useState } from "react";
import DataTable, { IDataTableColumn } from "react-data-table-component";

import Main from "../Main";

import { Container, Badge } from "./styles";

interface IInternalMOJApplications {
    mojId: string;
    branch: string;
    date: string;
    applicant: string;
    internalReference: number;
    status: string;
    candidateID: number;
    firstName: string;
    middleName: string;
    lastName: string;
    fullName: string;
}

const Grid: React.FC = () => {
    const [applicationsGridData, setApplicationsGridData] = useState<
        IInternalMOJApplications[]
    >([]);

    useEffect(() => {
        setApplicationsGridData([
            {
                mojId: "08fe8edc-e7e8-4d06-a215-d196fafeaf9f",
                branch: "Hamilton",
                date: "9/10/2020",
                applicant: "sharanya@1cr.co.nz",
                internalReference: 1237,
                status: "Cand. Processed",
                candidateID: 9999999,
                firstName: "Keti",
                middleName: "Dixie Jane ",
                lastName: "Hokianga",
                fullName: "Keti Dixie Jane  Hokianga",
            },
            {
                mojId: "3277ab71-d1c2-4fef-b8f1-3446d830f20c",
                branch: "Wellington",
                date: "9/10/2020",
                applicant: "ariana@1cr.co.nz",
                internalReference: 1236,
                status: "Request Expired",
                candidateID: 9999999,
                firstName: "first",
                middleName: "middle",
                lastName: "last",
                fullName: "queenserry@gmail.com",
            },
            {
                mojId: "13f7162f-1fa5-4fd5-a107-293d14b8ebdb",
                branch: "Wellington",
                date: "9/10/2020",
                applicant: "ariana@1cr.co.nz",
                internalReference: 1235,
                status: "Request Expired",
                candidateID: 9999999,
                firstName: "William",
                middleName: "Jordan",
                lastName: "Sadlier",
                fullName: "William Jordan Sadlier",
            },
            {
                mojId: "87a6d7e7-b451-46b6-813d-0a658c66a721",
                branch: "Wellington",
                date: "8/10/2020",
                applicant: "dan@1cr.co.nz",
                internalReference: 1234,
                status: "MOJ Returned",
                candidateID: 9999999,
                firstName: "Johnson ",
                middleName: "Honihana ",
                lastName: "Crawford ",
                fullName: "Johnson  Honihana  Crawford ",
            },
            {
                mojId: "94dacde0-87b2-4952-ab57-81840b709694",
                branch: "Wellington",
                date: "8/10/2020",
                applicant: "dan@1cr.co.nz",
                internalReference: 1233,
                status: "MOJ Returned",
                candidateID: 9999999,
                firstName: "David",
                middleName: "Vernon",
                lastName: "Reynolds",
                fullName: "David Vernon Reynolds",
            },
            {
                mojId: "5ea77115-b384-4278-828f-671685bf277e",
                branch: "Wellington",
                date: "8/10/2020",
                applicant: "regy@1cr.co.nz",
                internalReference: 1232,
                status: "Request Expired",
                candidateID: 9999999,
                firstName: "first",
                middleName: "middle",
                lastName: "last",
                fullName: "maylipano@yahoo.com",
            },
            {
                mojId: "aed55b37-1bc6-4a11-b2fc-ac4a89751285",
                branch: "Wellington",
                date: "8/10/2020",
                applicant: "ariana@1cr.co.nz",
                internalReference: 1231,
                status: "Request Expired",
                candidateID: 9999999,
                firstName: "first",
                middleName: "middle",
                lastName: "last",
                fullName: "amyhaughey54@gmail.com",
            },
            {
                mojId: "75125574-0d62-48f6-8eff-2440c66e2266",
                branch: "Wellington",
                date: "8/10/2020",
                applicant: "ariana@1cr.co.nz",
                internalReference: 1230,
                status: "Request Expired",
                candidateID: 9999999,
                firstName: "May",
                middleName: "",
                lastName: "Laau Lipano",
                fullName: "May Laau Lipano",
            },
            {
                mojId: "28480744-d914-4c30-9333-f9c60e1dcb45",
                branch: "Wellington",
                date: "8/10/2020",
                applicant: "ariana@1cr.co.nz",
                internalReference: 1229,
                status: "MOJ Returned",
                candidateID: 9999999,
                firstName: "Samisoni",
                middleName: "",
                lastName: "Moceicakau",
                fullName: "Samisoni Moceicakau",
            },
            {
                mojId: "372698ae-19ec-44f9-907b-ebc46051c445",
                branch: "Wellington",
                date: "7/10/2020",
                applicant: "ariana@1cr.co.nz",
                internalReference: 1228,
                status: "MOJ Returned",
                candidateID: 9999999,
                firstName: "Ropati",
                middleName: "",
                lastName: "Sooalo ",
                fullName: "Ropati Sooalo ",
            },
            {
                mojId: "3b582662-a3e0-4c7a-a2b1-2f022457d17b",
                branch: "Wellington",
                date: "7/10/2020",
                applicant: "ariana@1cr.co.nz",
                internalReference: 1227,
                status: "MOJ Returned",
                candidateID: 9999999,
                firstName: "ROFFAN RAYOK",
                middleName: "",
                lastName: "LOUIS MARIA XAVIER",
                fullName: "ROFFAN RAYOK LOUIS MARIA XAVIER",
            },
            {
                mojId: "2910f220-80be-49cb-8dd6-e2931b342ba8",
                branch: "Wellington",
                date: "7/10/2020",
                applicant: "dan@1cr.co.nz",
                internalReference: 1226,
                status: "Request Expired",
                candidateID: 9999999,
                firstName: "first",
                middleName: "middle",
                lastName: "last",
                fullName: "matroberts7@hotmail.co.uk",
            },
            {
                mojId: "a6b88dbd-7f4f-4db8-a068-f03e6ad34138",
                branch: "Wellington",
                date: "6/10/2020",
                applicant: "ariana@1cr.co.nz",
                internalReference: 1225,
                status: "Request Expired",
                candidateID: 9999999,
                firstName: "first",
                middleName: "middle",
                lastName: "last",
                fullName: "ropatisooalo03@gmail.com",
            },
            {
                mojId: "7b8aa30d-e1c9-442a-bdbb-20caa6c95032",
                branch: "Wellington",
                date: "6/10/2020",
                applicant: "ariana@1cr.co.nz",
                internalReference: 1224,
                status: "Request Expired",
                candidateID: 9999999,
                firstName: "Samisoni",
                middleName: "",
                lastName: "Moceicakau",
                fullName: "Samisoni Moceicakau",
            },
            {
                mojId: "cce18579-6eaf-4a1c-bcb4-8dd3c49ed874",
                branch: "Wellington",
                date: "6/10/2020",
                applicant: "ariana@1cr.co.nz",
                internalReference: 1223,
                status: "MOJ Returned",
                candidateID: 9999999,
                firstName: "Taumafai",
                middleName: "Tekie",
                lastName: "Kirifi",
                fullName: "Taumafai Tekie Kirifi",
            },
        ]);
    }, []);

    const getBadgeColorByStatus = (status: string): string => {
        switch (status) {
            case "Cons. Created Request":
                return "orange";
            case "Cand. Processed":
                return "#1eb7ff";
            case "MOJ Returned":
                return "green";
            case "Incomplete (returned)":
                return "#c53030";
            case "Request Expired":
                return "#c53030";
            default:
                return "";
        }
    };

    const getTableColumns = useMemo(() => {
        const tableColumns = [
            {
                name: "id",
                selector: "mojId",
                omit: true,
            },
            {
                name: "Branch",
                selector: "branch",
                center: true,
            },
            {
                name: "Date",
                selector: "date",
                // maxWidth: "70px",
                center: true,
            },
            {
                name: "Consultant",
                selector: "applicant",
            },
            {
                name: "Ref.",
                selector: "internalReference",
                // maxWidth: "50px",
                center: true,
                // hide: 1100,
            },
            {
                name: "Status",
                selector: "status",
                // maxWidth: "120px",
                center: true,
                cell: (row: IInternalMOJApplications) => (
                    <Badge bgColor={getBadgeColorByStatus(row.status)}>
                        {row.status}
                    </Badge>
                ),
            },
            {
                name: "Candidate ID",
                selector: "candidateID",
                // maxWidth: "64px",
                center: true,
                // hide: 992,
            },
            {
                name: "Name",
                selector: "fullName",
                // grow: 1,
            },
            // {
            //     name: "Email",
            //     selector: "email",
            // },
            // {
            //     name: "",
            //     // cell: (row: IConsultantGridData) => getActions(row),
            //     cell: () => getActions(),
            //     maxWidth: "70px",
            // },
        ];

        return tableColumns;
    }, []);

    const getApplicationsData = useMemo(() => {
        return applicationsGridData;
    }, [applicationsGridData]);

    return (
        <Main>
            <Container className="containerclasss">
                <DataTable
                    paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                    noHeader
                    highlightOnHover
                    columns={getTableColumns}
                    data={getApplicationsData}
                    pagination
                    progressPending={false}
                    responsive
                />
            </Container>
        </Main>
    );
};

export default Grid;
