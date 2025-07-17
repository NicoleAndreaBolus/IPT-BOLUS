import { Container, Form, Button, Image, Col, Row, ButtonGroup} from "react-bootstrap"
import { DoorClosed, DoorOpen, PersonPlus } from "react-bootstrap-icons";

export default function Home() {
    return(

    <Container fluid className='m-1 m-lg-5 p-1 p-lg-4 d-flex flex-column'>
    <Row xs={1} md={2} lg={3} className='my-2 d-flex justify-content-center align-items-center'>
        <Col className="p-5">
            <Image src="https://media-public.canva.com/QFtjY/MAFEKnQFtjY/1/tl.png" className="m-1 m-lg-5 p-lg-4 img-fluid" width={500}/>
        </Col>
        <Col className="px-5">
            <h1 className="fw-bold display-3 text-primary-emphasis">WELCOME TO UTASK!</h1>
            <h4 className="py-1">Hello there!</h4>
            <p className="py-4">Your Ultimate Online Task Organizer
UTask is a powerful online task compiler designed to help you streamline your to-do lists and achieve peak productivity. Easily create, and manage all your tasks in one intuitive platform. Whether you're tackling daily chores, managing complex projects, or planning future goals, UTask provides the tools you need to stay organized and focused. Say goodbye to scattered notes and missed deadlines – with UTask, bringing order to your tasks has never been simpler.</p>
        </Col>
    </Row>
    <Row className='d-flex justify-content-center align-items-center'>
        <Col className='d-flex justify-content-center align-items-center'>
            <ButtonGroup>
                <Button variant="warning" className='px-5'> <DoorOpen/> LOG IN</Button>
                <Button variant="success" className='px-5'> <PersonPlus/> REGISTER</Button>
            </ButtonGroup>
        </Col>
    </Row>
    </Container>
    );
}