import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  align-self: center;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 20px;
  background-color: #fff;
  height: 200px;
  width: 380px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  elevation: 10;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 14px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.85);
  opacity: 0.85;
`;

export const Text = styled.Text`
  flex: 1;
  margin-left: 5px;
`;
