import { useContext } from "react"
import { Container, Text } from "./Styles"
import { UserContext } from "./usercontext"

const DashboardScreen = () => {

    const {userRegistrationNumber, setUserRegistrationNumber} = useContext(UserContext)

    return <Container>
        <Text>"User Registration number is: " {userRegistrationNumber}</Text>
    </Container>
}

export default DashboardScreen