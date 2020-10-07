import React, { useCallback } from "react";
import { Pie } from "react-chartjs-2";

import { Container, ChartContent } from "./styles";

const Dashboard: React.FC = () => {
    const data = {
        labels: [
            "Auckland",
            "Hamilton",
            "Tauranga",
            "Wellington",
            "Christchurch",
        ],
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
                    "#b2d235",
                    "#36A2EB",
                    "#FFCE56",
                    "#dedede",
                    "#237418",
                ],
            },
        ],
    };

    return (
        <Container>
            <h1>dashboard</h1>
            <ChartContent>
                <Pie
                    data={data}
                    options={{
                        legend: {
                            position: "right",
                            align: "center",
                        },
                        title: {
                            display: true,
                            text: "Total by Branch",
                            fontSize: 20,
                            fontColor: "#333",
                            fontStyle: "bold",
                            fontFamily: "Roboto",
                        },
                    }}
                />
            </ChartContent>
        </Container>
    );
};

export default Dashboard;
