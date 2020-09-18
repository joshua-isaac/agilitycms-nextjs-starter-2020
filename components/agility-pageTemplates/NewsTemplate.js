import React from "react";
import ContentZone from "components/agility-global/ContentZone";
import { Row, Col, Container } from "react-bootstrap";

const NewsTemplate = (props) => {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <ContentZone name="NewsContentZone" {...props} />
        </Col>
        <Col lg={4}>
          <ContentZone name="SidebarContentZone" {...props} />
        </Col>
      </Row>
    </Container>
  );
};

export default NewsTemplate;
