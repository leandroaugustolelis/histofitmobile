import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 50px;
  background: #617fcd;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: #fff;
  font-size: 18px;
`;
