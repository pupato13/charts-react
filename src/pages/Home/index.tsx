import React from "react";

import MOJOVerview from "../MOJOverview";
import MOJHistory from "../MOJHistory";
import TotalBranch from "../TotalBranch";

import { Container, Wrapper, Title, Row } from "./styles";

const Home: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>home</Title>
                <MOJOVerview />
                <Row>
                    <MOJHistory />
                    <TotalBranch />
                </Row>
            </Wrapper>
        </Container>
    );
};

export default Home;
