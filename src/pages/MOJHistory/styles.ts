import styled from "styled-components";

import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 16px;

    background: red;

    /* @media (min-width: 768px) {
        flex: 1 1 384px;
        padding: 16px;
    } */
`;

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    /* border-radius: 8px; */

    /* background: lightblue; */
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

export const MobileChartContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 480px;
    background: #fff;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const DesktopChartContent = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    height: 280px;
    background: #fff;

    @media (min-width: 768px) {
        display: flex;
    }
`;
