import React from "react";

import { HorizontalBar, Bar } from "react-chartjs-2";

import {
    Container,
    BoxContent,
    Title,
    Summary,
    SummaryContent,
    Description,
    Quantity,
    IconUp,
    IconDown,
    MobileChartContent,
    DesktopChartContent,
} from "./styles";

const MOJHistory: React.FC = () => {
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

    return (
        <Container>
            <BoxContent>
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
                <MobileChartContent>
                    <HorizontalBar
                        data={data}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                        }}
                    />
                </MobileChartContent>
                <DesktopChartContent>
                    <Bar
                        data={data}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                        }}
                    />
                </DesktopChartContent>
            </BoxContent>
        </Container>
    );
};

export default MOJHistory;
