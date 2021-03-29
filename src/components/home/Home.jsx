import React from "react";
import Navbar from "../navbar/Navbar";
import EventContainer from "../events/EventContainer";
import { Container, Divider, Header, Input, Segment } from "semantic-ui-react";
import "./home.css";
const Home = () => {
    return (
        <>
            <Container fluid className="header-bg">
                <Container>
                    <Segment style={{ background: "transparent" }}>
                        <Navbar />
                    </Segment>
                    <Segment className="big-header" padded>
                        <Header
                            textAlign="center"
                            as="h1"
                            style={{ fontSize: "3rem" }}
                        >
                            I grow by helping people in need.
                        </Header>
                        <Divider hidden />
                        <Input
                            className="search-input"
                            size="big"
                            action={{
                                color: "teal",
                                labelPosition: "right",
                                icon: "search",
                                content: "Search",
                            }}
                            actionPosition="right"
                            placeholder="Search For an Event...."
                        />

                        <Divider hidden />
                    </Segment>
                </Container>
            </Container>
            <Container>
                <Segment>
                    <EventContainer />
                </Segment>
            </Container>
        </>
    );
};

export default Home;
