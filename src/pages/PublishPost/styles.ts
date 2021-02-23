import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;

  padding: 0 25px;
`;

export const Input = styled.TextInput`
  width: 269px;
  height: 75px;
  background: #ffffff;
  margin-left: 15px;
`;

export const Header = styled.View`
  margin-top: 35px;
  flex-direction: row;
`;

export const LocationTag = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 11px;
  text-align: left;
  color: rgba(0, 0, 0, 0.85);
`;
