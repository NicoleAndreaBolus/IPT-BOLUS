import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"


export default function Error() {
  return (
    <Container fluid className='vh-100 d-flex align-items-center justify-content-center flex-column'>
        <Container className='align-items-center text-center me-auto'>
              <h1 className='text-center mb-4'>OOPS!</h1>
              <h4 className='text-center mb-4'>The page you are trying to access cannot be found.</h4>
              <Button className="px-5 rounded" as={Link} to="/login">Login</Button>
        </Container>
    </Container>
  )
}
