import Container from "react-bootstrap/esm/Container"
import Banner from "../components/Banner"
import Feature from "../components/Feature"




export default function Home(){
    return(
        <Container fluid className="p-4 bg-secondary">
            <Banner />
            <Feature />
        </Container>
         
    )
}