import React from "react";
import { Link } from "react-router-dom";
import { FaAddressBook } from "react-icons/fa";

import bossLogo from "../../assets/boss-logo.png";
import bossMiniLogo from "../../assets/boss-logo_min.png";

import {
    Container,
    Header,
    HeaderLogo,
    HeaderLogoWrapper,
    HeaderToolbar,
    MiniLogo,
    AppMain,
    Sidebar,
    SidebarHeader,
    SidebarMenu,
    ScrollbarContainer,
    LinksWrapper,
    LinkItem,
    LinkText,
    AppContent,
    AppContentInner,
    AppFooter,
} from "./styles";

const Main: React.FC = ({ children }) => {
    return (
        <Container>
            <Header>
                <HeaderLogo>
                    <HeaderLogoWrapper>
                        <a href="/dashboard">
                            <button type="button">
                                <span className="label">
                                    <img src={bossLogo} alt="BOSS" />
                                </span>
                                <span></span>
                            </button>
                        </a>
                    </HeaderLogoWrapper>
                </HeaderLogo>
                <HeaderToolbar>
                    <MiniLogo>
                        <a href="/dashboard">
                            <button type="button">
                                <span className="label">
                                    <img src={bossMiniLogo} alt="BOSS" />
                                </span>
                            </button>
                        </a>
                    </MiniLogo>
                </HeaderToolbar>
            </Header>
            <AppMain>
                <Sidebar>
                    <SidebarHeader />
                    <SidebarMenu>
                        <ScrollbarContainer>
                            <LinksWrapper>
                                <p>Navigation Menu</p>
                                <ul>
                                    <LinkItem>
                                        <Link to="/dashboard">
                                            <FaAddressBook size={30} />
                                            <LinkText>Dashboard</LinkText>
                                        </Link>
                                    </LinkItem>
                                    <LinkItem>
                                        <Link to="/grid">
                                            <FaAddressBook size={30} />
                                            <LinkText>Grid</LinkText>
                                        </Link>
                                    </LinkItem>
                                </ul>
                            </LinksWrapper>
                        </ScrollbarContainer>
                    </SidebarMenu>
                </Sidebar>
                <AppContent>
                    <AppContentInner>{children}</AppContentInner>
                    <AppFooter></AppFooter>
                </AppContent>
            </AppMain>
        </Container>
    );
};

export default Main;
