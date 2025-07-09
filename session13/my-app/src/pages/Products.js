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
      description: "Complete official school uniform (shirt and pants/skirt). Neat and comfortable.",
      price: "₱750",
      image: "https://images.unsplash.com/photo-1602610454294-0d17e4f82e07?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "PE Uniform",
      description: "Breathable uniform for P.E. class. Includes dry-fit shirt and jogging pants.",
      price: "₱500",
      image: "https://images.unsplash.com/photo-1605283178295-4c3d2ec2c4ea?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "ID Lace",
      description: "Durable school-branded ID lace with safety lock. One size fits all.",
      price: "₱50",
      image: "https://images.unsplash.com/photo-1622631473514-89eec8739e94?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Notebook Set",
      description: "Set of 5 notebooks (80 pages each). Official cover with school emblem.",
      price: "₱120",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa7023?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <Container fluid className="min-vh-100 bg-body-secondary py-5 px-4">
      <h1 className="text-center text-dark mb-5 fw-bold display-5">School Product Catalog</h1>

      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
        {products.map((product, idx) => (
          <Col key={idx}>
            <Card className="h-100 border-0 shadow-sm hover-shadow transition rounded-4">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="rounded-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="bg-white rounded-bottom">
                <Card.Title className="fw-semibold">{product.title}</Card.Title>
                <Card.Text className="text-muted small">{product.description}</Card.Text>
                <h5 className="text-success mb-3">{product.price}</h5>
                <Button variant="outline-primary" size="sm" onClick={() => handleShow(product)}>
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
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
