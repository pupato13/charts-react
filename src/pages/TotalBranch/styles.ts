import styled from "styled-components";

export const Container = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #fff; */
    display: flex;
    /* flex-direction: column;
    justify-content: center;
    align-items: center; */
    /* width: 100%; */
    /* flex: 1; */
    /* margin-top: 16px; */
    padding: 16px;

    flex: 1 1 400px;

    background: yellow;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const ChartContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
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
