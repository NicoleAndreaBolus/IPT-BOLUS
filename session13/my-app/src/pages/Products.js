import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Products() {
  const productList = [
    {
      id: 1,
      name: "School Uniform",
      description: "Official school uniform set (top and bottom). Available in all sizes.",
      price: "₱750",
      image: "https://via.placeholder.com/300x200?text=School+Uniform"
    },
    {
      id: 2,
      name: "PE Uniform",
      description: "Comfortable PE uniform for school activities and sports.",
      price: "₱500",
      image: "https://via.placeholder.com/300x200?text=PE+Uniform"
    },
    {
      id: 3,
      name: "ID Lace",
      description: "Durable school-branded ID lace with clip.",
      price: "₱50",
      image: "https://via.placeholder.com/300x200?text=ID+Lace"
    },
    {
      id: 4,
      name: "Notebook Set",
      description: "Set of 5 notebooks with school logo. Wide-ruled, 80 pages each.",
      price: "₱120",
      image: "https://via.placeholder.com/300x200?text=Notebook+Set"
    },
    {
      id: 5,
      name: "School Bag",
      description: "Spacious and durable bag with multiple compartments.",
      price: "₱950",
      image: "https://via.placeholder.com/300x200?text=School+Bag"
    },
    {
      id: 6,
      name: "Nameplate",
      description: "Engraved nameplate for school uniforms.",
      price: "₱60",
      image: "https://via.placeholder.com/300x200?text=Nameplate"
    }
  ];

  return (
    <Container fluid className="bg-light py-5">
      <h1 className="text-center text-primary mb-5 display-4 fw-bold">School Products</h1>

      <Row className="justify-content-center">
        {productList.map((product) => (
          <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <h5 className="text-success">{product.price}</h5>
                <Button variant="primary" className="mt-2">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
