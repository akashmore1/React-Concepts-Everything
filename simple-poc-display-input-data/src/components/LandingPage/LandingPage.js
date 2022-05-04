import React from "react";
import { Button, Container, Row, Col, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Container>
        <Stack gap={5}>
          <Row>
            <h1 className="mt-5">Welcome</h1>
          </Row>
          <Row className="mt-5 ml-4">
            <Col md={2}>
              <Link to={`/form`}>
                <Button size="md">Go to Form</Button>
              </Link>
            </Col>
            <Col md={2}>
              <Button size="md" href="">
                See Data
              </Button>
            </Col>
          </Row>
          <Row>
            <h1 className="mt-5">Thank You!</h1>
          </Row>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
