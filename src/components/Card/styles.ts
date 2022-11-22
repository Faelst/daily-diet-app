import { ArrowUpRight } from 'phosphor-react-native';
import styled from 'styled-components/native';

// container styles props with width and height
export type ContainerProps = {
  width?: string;
  color: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${({ width }) => width || '100%'};
  height: 120px;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  padding: 10px;

  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
`;

export const PercentTitle = styled.Text<{ isHomeCard?: boolean }>`
  font-size: ${({ theme, isHomeCard }) =>
    isHomeCard ? theme.FONT_SIZE.xll : theme.FONT_SIZE.xl};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const PercentSubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.s};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  text-align: center;
`;

export const OpenIcon = styled(ArrowUpRight)`
  position: absolute;
  top: 10;
  right: 10;
  size: 24;
`;
