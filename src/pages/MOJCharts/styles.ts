import styled from "styled-components";

import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

export const Container = styled.div`
    display: flex;
    border: 5px solid #b2d235;
    width: 100%;
    flex-wrap: wrap;
`;

export const Wrapper = styled.div`
    padding: 24px;

    flex: 1 1 400px;
`;

export const MOJHistoryContent = styled.div`
    /* padding: 24px;

    flex: 1 1 400px; */
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    padding: 16px;

    font-size: 1.5em;
    font-weight: 500;

    background: #b2d235;
    color: #333;
`;

export const Summary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    background: #fff;
`;

export const SummaryContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
`;

export const TotalContent = styled.div``;

export const Description = styled.div`
    margin-bottom: 8px;
    font-size: 1.2em;
    font-weight: 500;
    color: #a6a6a6;
    white-space: nowrap;
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: 400;

    svg {
        margin-right: 8px;

        color: ${props => props.color};
    }
`;

export const IconUp = styled(FaLongArrowAltUp)`
    color: green;
    font-weight: 500;
`;

export const IconDown = styled(FaLongArrowAltDown)`
    color: red;
    font-weight: 500;
`;

export const TotalBranchContent = styled.div`
    /* padding: 24px;

    flex: 1 1 400px; */
`;

export const BranchChartContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 8px;

    canvas {
        width: 100% !important;
        min-height: 160px;
    }
`;
