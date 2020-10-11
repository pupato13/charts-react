import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1;
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
`;

export const Header = styled.div`
    display: flex;
    flex-shrink: 0;
    height: 74px;
    top: 0;
    left: auto;
    right: 0;
    position: fixed;
    /* color: #fff; */
    /* background: #b2d235; */
    color: #333;
    background: #fff;
    border-bottom: 3px solid #b2d235;

    width: 100%;
    z-index: 1100;

    box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2),
        0px 11px 15px 1px rgba(0, 0, 0, 0.14),
        0px 4px 20px 3px rgba(0, 0, 0, 0.12);
`;

export const HeaderLogo = styled.div`
    height: 74px;
    display: none;
    align-items: center;
    background: hsla(0, 0%, 100%, 0.08);
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);

    @media only screen and (min-width: 768px) {
        width: 130px;
        display: flex;
    }
`;

export const HeaderLogoWrapper = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: #333;
        background-color: transparent;

        button {
            padding: 0.33333rem;
            color: #333;
            background: hsla(0, 0%, 100%, 0.09);

            flex: 0 0 auto;
            overflow: hidden;
            font-size: 1.5rem;
            text-align: center;
            transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            /* border-radius: 50%; */
            border: none;

            > span.label {
                display: flex;
                width: 100%;
                align-items: inherit;
                justify-content: inherit;

                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
`;

export const HeaderToolbar = styled.div`
    display: flex;
    flex: 1 1;
    height: 100%;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const MiniLogo = styled.div`
    display: none;
    align-items: center;

    @media only screen and (max-width: 767px) {
        display: flex;
    }

    a {
        text-decoration: none;
        color: #333;
        background-color: transparent;
        margin-right: 1rem;

        button {
            padding: 0.33333rem;
            color: #333;
            background: hsla(0, 0%, 100%, 0.09);

            flex: 0 0 auto;
            overflow: hidden;
            font-size: 1.5rem;
            text-align: center;
            transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            border: none;

            > span.label {
                display: flex;
                /* width: 100%; */
                height: 70px;
                align-items: center;
                justify-content: center;

                img {
                    width: auto;
                    height: 84%;
                }
            }
        }
    }
`;

export const AppMain = styled.div`
    position: relative;
    min-height: 100vh;
`;

export const Sidebar = styled.div`
    position: fixed;
    min-height: 100%;
    overflow: hidden;
    display: none;
    flex-direction: column;
    z-index: 60;
    width: 130px;
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);

    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);

    background: #fff;

    @media only screen and (min-width: 768px) {
        display: flex;
    }
`;

export const SidebarHeader = styled.div`
    display: flex;
    height: 74px;
    width: 130px;
    align-items: center;
    background: #fff;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    transition: all 0.2s ease-in-out;
`;

export const SidebarMenu = styled.div`
    height: calc(100vh - 74px);
`;

export const ScrollbarContainer = styled.div`
    position: relative;
    height: 100%;
    overflow: hidden !important;
    overflow-anchor: none;
    touch-action: auto;
`;

export const LinksWrapper = styled.div`
    p {
        padding: 1rem 1rem 0.90909rem;
        font-weight: 700;
        color: #263055;
        text-transform: uppercase;
        font-size: 0.83125rem;
        white-space: normal;
        text-align: center;
        transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    }

    ul {
        position: relative;
        list-style: none;

        /* li {
            display: block;
            padding: 2px 1rem 1px 0;

            width: 100%;

            position: relative;
            box-sizing: border-box;
            text-align: left;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
        } */
    }
`;

export const LinkItem = styled.li`
    transition: background 0.4s;

    &:hover {
        background: var(--color-green);
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90px;
        color: #333;
        text-decoration: none;
        padding: 0 4px;

        > svg {
            margin-bottom: 10px;
        }
    }
`;

export const LinkText = styled.span`
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
`;

export const AppContent = styled.div`
    min-height: 100vh;

    display: flex;
    flex: 1 1;
    flex-direction: column;
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    padding-top: 74px;

    @media only screen and (min-width: 768px) {
        padding-left: 130px;
    }
`;

export const AppContentInner = styled.div`
    padding: 2rem 2rem 1rem;
    display: flex;
    flex: 1 1;
`;

export const AppFooter = styled.div``;
