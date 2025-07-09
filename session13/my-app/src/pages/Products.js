import { Container, Row, Col, Card } from "react-bootstrap";

export default function Products() {
  return (
    <Container fluid className="vh-100 bg-light p-4">
      <h1 className="display-5 fw-semibold text-primary mb-4">Products</h1>

      <Row>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>This is the description of Product 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>This is the description of Product 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>This is the description of Product 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
