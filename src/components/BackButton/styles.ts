import { ArrowLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  position: absolute;
  top: 11px;
  left: 15px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme, color }) => ({
  size: 24,
  color: color || theme.COLORS.GRAY_200,
}))``;
