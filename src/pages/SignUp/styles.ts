import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
`;

export const Header = styled.View`
  height: 230px;
  background: #eee;
  display: flex;
`;

export const ShapeView = styled.View`
  position: absolute;
  width: 262px;
  height: 420px;
  left: 0px;
  top: 0px;
`;

export const BlankSpace = styled.View`
  height: 25px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: #000;
  margin-top: 48px;
  opacity: 0.85;
`;

export const Description = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 13px;
  text-align: center;
  margin-top: 21px;
  opacity: 0.75;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`;
