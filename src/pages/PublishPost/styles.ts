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

export const PlaceView = styled.TouchableOpacity`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  height: 30px;
`;

export const PlaceItem = styled.Text`
  color: #000;
  border: 1px;
  background-color: #aec0ee;
  font-size: 9px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Photo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100;
  align-self: center;
`;
