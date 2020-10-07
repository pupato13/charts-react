import React from "react";

import {
    Container,
    MOJWidgets,
    MOJWidget,
    MOJWidgetQuantity,
    MOJWidgetLabel,
} from "./styles";

const MOJOverview: React.FC = () => {
    return (
        <Container>
            <MOJWidgets>
                <MOJWidget>
                    <MOJWidgetQuantity>2</MOJWidgetQuantity>
                    <MOJWidgetLabel>Cons. Created Request</MOJWidgetLabel>
                </MOJWidget>
                <MOJWidget>
                    <MOJWidgetQuantity>4</MOJWidgetQuantity>
                    <MOJWidgetLabel>Cand. Processed</MOJWidgetLabel>
                </MOJWidget>
                <MOJWidget>
                    <MOJWidgetQuantity>45</MOJWidgetQuantity>
                    <MOJWidgetLabel>MOJ Returned</MOJWidgetLabel>
                </MOJWidget>
                <MOJWidget>
                    <MOJWidgetQuantity>30</MOJWidgetQuantity>
                    <MOJWidgetLabel>Request Expired</MOJWidgetLabel>
                </MOJWidget>
                <MOJWidget>
                    <MOJWidgetQuantity>30</MOJWidgetQuantity>
                    <MOJWidgetLabel>Incomplete (returned)</MOJWidgetLabel>
                </MOJWidget>
            </MOJWidgets>
        </Container>
    );
};

export default MOJOverview;
