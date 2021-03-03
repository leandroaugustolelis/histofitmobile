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

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const CameraView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 40px;
  height: 34px;
  left: 50px;
  top: 80px;
  background-color: #9eacce;
  border-radius: 50px;
`;
export const UserAvatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  align-self: center;
`;

export const Title = styled.Text`
  margin-top: 30px;
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
`;
