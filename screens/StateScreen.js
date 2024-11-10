import { useContext, useEffect, useReducer, useState } from "react"
import { ButtonText, ButtonWrapper, Container, Text } from "./Styles"
import { REGISTRATION_STATE, initialState, registrationReducer } from "./registrationReducer"
import { REGISTRATION_ACTIONS } from "./registrationReducer"
import { UserContext } from "./usercontext"

const StateScreen = ({navigation}) => {
    console.log("State screen loads...", "Loading")

    const [state, dispatch] = useReducer(registrationReducer, initialState)
    const {userRegistrationNumber, setUserRegistrationNumber} = useContext(UserContext)


    useEffect(() => {
        dispatch({
            type: REGISTRATION_ACTIONS.NOT_STARTED
        })
    }, [])

    useEffect(() => {
        if(state.registration_status === 'Registration Success') {
            setUserRegistrationNumber("12345678")
            navigation.navigate('Dashboard')
        }
    }, [state])

    function onStateButtonClick() {
        dispatch({
            type: REGISTRATION_ACTIONS.STARTED
        })
        startRegistration()
    }

    function startRegistration() {
        setTimeout(() => {
            dispatch({
                type: REGISTRATION_ACTIONS.FAILED
            })
        }, 3000)
       
    }

    console.log("State...", state)

    return<Container>
          <Text>Registration Status: {state.registration_status}</Text>
          <ButtonWrapper onPress={onStateButtonClick}>
            <ButtonText>{state.button_text}</ButtonText>
          </ButtonWrapper>
         </Container>
}

export default StateScreen