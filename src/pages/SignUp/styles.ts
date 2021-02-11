import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
`;

export const BlankSpace = styled.View`
  height: 50px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: #000;
  margin-top: 48px;
`;

export const Description = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 13px;
  text-align: center;
  margin-top: 21px;
  opacity: 0.5;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`;
