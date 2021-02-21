import styled from 'styled-components/native';

export const Container = styled.View`
  height: 220px;
  background: #607fcd;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShapeView = styled.View`
  position: absolute;
  width: 262px;
  height: 420px;
  left: 0px;
  top: 0px;
`;

export const ProfilePhoto = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 50;
`;

export const Title = styled.Text`
  margin-top: 30px;
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
`;
