import styled from "styled-components";

interface IBadgeProps {
    bgColor?: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: auto hidden;
    min-height: 0px;
    /* padding: 48px; */

    /* .dataTables_wrapper .rdt_TableCell {
        font-size: 24px;
    } */
    .rdt_TableHeadRow {
        background: #b2d235;

        .rdt_TableCol {
            color: #333;
            font-size: 16px;
        }
    }

    .rdt_Pagination {
        background: #b2d235;
        color: #333;
        font-size: 16px;
    }
`;

export const Badge = styled.span<IBadgeProps>`
    letter-spacing: 0.3px;

    color: ${props => (props.bgColor ? "#fff" : "#333")};

    background-color: ${props =>
        props.bgColor ? props.bgColor : "transparent"};

    display: inline-block;
    width: 100%;
    padding: 4px 8px;
    font-size: 80%;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    vertical-align: baseline;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
