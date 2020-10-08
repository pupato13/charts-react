import { shade } from "polished";
import React, { useCallback, useMemo } from "react";

import { Doughnut, Pie } from "react-chartjs-2";

import {
    Container,
    Wrapper,
    MOJHistoryContent,
    Title,
    Summary,
    SummaryContent,
    Description,
    Quantity,
    IconDown,
    IconUp,
    TotalBranchContent,
    BranchChartContainer,
} from "./styles";

const MOJCharts: React.FC = () => {
    const labels = useMemo(() => {
        return [
            "Auckland 11",
            "Tauranga 10",
            "Hamilton 20",
            "Wellington 32",
            "Christchurch 0",
        ];
    }, []);

    const getToolTipByBranch = useCallback(
        (index: number): string => {
            const splittedText = labels[index].split(" ");

            return `${splittedText[0]}: ${splittedText[1]}`;
        },
        [labels],
    );

    const getBranchChartData = useMemo(() => {
        const branchsData = {
            labels,
            datasets: [
                {
                    data: [11, 10, 20, 32, 0],
                    backgroundColor: [
                        "#b2d235",
                        "#36A2EB",
                        "#FFCE56",
                        "#dedede",
                        "#237418",
                    ],
                    hoverBackgroundColor: [
                        shade(0.15, "#b2d235"),
                        shade(0.15, "#36A2EB"),
                        shade(0.15, "#FFCE56"),
                        shade(0.15, "#dedede"),
                        shade(0.15, "#237418"),
                    ],
                },
            ],
        };

        return branchsData;
    }, [labels]);

    return (
        <Container>
            <Wrapper>
                <MOJHistoryContent>
                    <Title>MOJ History</Title>
                    <Summary>
                        <SummaryContent>
                            <Description>Total</Description>
                            <Quantity>592</Quantity>
                        </SummaryContent>
                        <SummaryContent>
                            <Description>Avg.</Description>
                            <Quantity>
                                <IconDown />
                                65
                            </Quantity>
                        </SummaryContent>
                        <SummaryContent>
                            <Description>Last Month</Description>
                            <Quantity>
                                <IconUp />
                                80
                            </Quantity>
                        </SummaryContent>
                    </Summary>
                </MOJHistoryContent>
            </Wrapper>
            <Wrapper>
                <TotalBranchContent>
                    <Title>Branch</Title>
                    <BranchChartContainer>
                        <Pie
                            data={getBranchChartData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                tooltips: {
                                    mode: "index",
                                    callbacks: {
                                        label: item => {
                                            if (item) {
                                                const { index } = item;

                                                if (
                                                    index !== undefined &&
                                                    index !== null
                                                ) {
                                                    return getToolTipByBranch(
                                                        index,
                                                    );
                                                }
                                            }

                                            return "";
                                        },
                                    },
                                },
                                legend: {
                                    position: "right",
                                },
                            }}
                        />
                    </BranchChartContainer>
                </TotalBranchContent>
            </Wrapper>
        </Container>
    );
};

export default MOJCharts;
