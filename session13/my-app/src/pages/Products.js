import { useState } from 'react';
import { Container, Card, Col, Row, Button, Modal } from 'react-bootstrap';

export default function Products() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const products = [
    {
      title: "School Uniform",
      description: "Complete official school uniform set (top and bottom). Available in all sizes.",
      image: "https://via.placeholder.com/300x200?text=School+Uniform",
      bg: "primary",
      price: "₱750"
    },
    {
      title: "PE Uniform",
      description: "Comfortable PE uniform for sports and activities.",
      image: "https://via.placeholder.com/300x200?text=PE+Uniform",
      bg: "success",
      price: "₱500"
    },
    {
      title: "ID Lace",
      description: "Durable and branded ID lace with safety breakaway clip.",
      image: "https://via.placeholder.com/300x200?text=ID+Lace",
      bg: "warning",
      price: "₱50"
    },
    {
      title: "Notebook Set",
      description: "Bundle of 5 notebooks with school logo. Wide-ruled, 80 pages each.",
      image: "https://via.placeholder.com/300x200?text=Notebooks",
      bg: "info",
      price: "₱120"
    }
  ];

  return (
    <Container fluid className="min-vh-100 bg-light py-5 px-4 text-center">
      <h1 className="display-4 fw-bold mb-5 text-primary">School Products</h1>

      <Row xs={1} md={2} className="g-4">
        {products.map((product, idx) => (
          <Col key={idx}>
            <Card className="shadow-lg border-0 h-100">
              <Card.Img variant="top" src={product.image} />
              <Card.Body className={`bg-${product.bg} text-white rounded-bottom`}>
                <Card.Title className="fw-bold">{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <h5 className="fw-semibold">{product.price}</h5>
                <Button variant="light" onClick={() => handleShow(product)}>
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for product details */}
      <Modal show={showModal} onHide={handleClose} centered>
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="img-fluid mb-3 rounded"
              />
              <p>{selectedProduct.description}</p>
              <h5 className="text-success">{selectedProduct.price}</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">
                Confirm Purchase
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
}
