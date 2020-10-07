import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: cyan;
`;

export const MOJWidgets = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
`;

export const MOJWidget = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 16px);
    margin: 8px;
    padding: 8px 16px;

    border-radius: 8px;

    background: #fff;

    @media (min-width: 768px) {
        flex: 1 1 348px;
        padding: 16px;
    }
`;

export const MOJWidgetQuantity = styled.label`
    font-size: 2em;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 3em;
    }
`;

export const MOJWidgetLabel = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    font-size: 1.2em;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 1.5em;
    }
`;
