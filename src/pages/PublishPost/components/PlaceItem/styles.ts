import styled, { css } from 'styled-components/native';

interface Props {
  isClicked: boolean;
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  height: 30px;
`;

export const PlaceName = styled.Text<Props>`
  color: #000;
  border: 1px;
  background-color: #aec0ee;
  font-size: 9px;
  padding-left: 20px;
  padding-right: 20px;

  ${props =>
    props.isClicked &&
    css`
      background-color: #f91d1d;
    `}
`;
