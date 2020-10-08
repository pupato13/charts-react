import { shade } from "polished";
import React, { useCallback, useMemo } from "react";

import { HorizontalBar, Bar, Pie } from "react-chartjs-2";

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
    MOJHistoryChartContainer,
    TotalBranchContent,
    BranchChartContainer,
} from "./styles";

const MOJCharts: React.FC = () => {
    const branchChartLabels = useMemo(() => {
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
            const splittedText = branchChartLabels[index].split(" ");

            return `${splittedText[0]}: ${splittedText[1]}`;
        },
        [branchChartLabels],
    );

    const getMOJHistoryData = useMemo(() => {
        const data = {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            datasets: [
                {
                    label: "2020",
                    backgroundColor: "rgba(178,210,53,0.6)",
                    borderColor: "rgba(178,210,53,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(146,177,24, 0.8)",
                    hoverBorderColor: "rgba(146,177,24,1)",
                    data: [65, 59, 80, 81, 56, 55, 40, 76, 80, 0, 0, 0],
                    categoryPercentage: 1,
                    barPercentage: 0.5,
                },
            ],
        };

        return data;
    }, []);

    const getBranchChartData = useMemo(() => {
        const branchsData = {
            labels: branchChartLabels,
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
    }, [branchChartLabels]);

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
                    <MOJHistoryChartContainer>
                        <Bar
                            redraw
                            data={getMOJHistoryData}
                            options={{
                                maintainAspectRatio: false,
                                responsive: true,
                            }}
                        />
                    </MOJHistoryChartContainer>
                </MOJHistoryContent>
            </Wrapper>
            <Wrapper>
                <TotalBranchContent>
                    <Title>Branch</Title>
                    <BranchChartContainer>
                        <Pie
                            redraw
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
