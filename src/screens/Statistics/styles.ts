import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)<{ isHealthy: boolean }>`
  flex: 1;
  background-color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.xll};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-top: 30px;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.s};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 70px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: -40px;
  border-radius: 24px 24px 0 0;
  padding: 30px;
`;

export const ContentTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.s};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const FooterCards = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
