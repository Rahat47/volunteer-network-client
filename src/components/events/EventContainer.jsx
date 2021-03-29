import React from "react";
import { Grid } from "semantic-ui-react";
import EventCards from "./EventCards";

const EventContainer = () => {
    return (
        <Grid container centered>
            <EventCards />
            <EventCards />
            <EventCards />
            <EventCards />
            <EventCards />
            <EventCards />
        </Grid>
    );
};

export default EventContainer;
