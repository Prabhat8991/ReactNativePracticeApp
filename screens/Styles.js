import { styled } from "styled-components/native";

const ButtonWrapper = styled.TouchableOpacity`
  background-color: blue;
  width: 200px; 
  padding: 10px;
  border-radius: 5px;
  margin: 20px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;


const Container = styled.View`
  background:grey;
  flex:1;
  flex-direction:column;
  justify-content: center; 
  align-items: center; 
`

const Text = styled.Text`
  color: white;
  font-size:16px;
  margin: 20px
`

export {ButtonWrapper, ButtonText, Container, Text}