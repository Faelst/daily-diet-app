import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Header = styled.View`
  padding: 10px
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 50px 0 15px 0;
`;

export const TitleHeader = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.l};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.xl};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.m};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin: 10px 0 30px 0;
`;

export const DateTItle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.s};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.m};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  margin: 10px 0 30px 0;
`;

export const Tag = styled.View`
  width: 45%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 40px;
  padding: 5px 10px 5px 10px;
`;

export const TagTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.s};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Status = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 60px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  margin-right: 10px;
`;

export const Button = styled.TouchableOpacity<{ isSaveBtn?: boolean }>`
  width: ${({ isSaveBtn }) => (isSaveBtn ? '100%' : '48%')};
  height: 48px;
  border-radius: 10px;
  background-color: ${({ theme, isSaveBtn }) =>
    isSaveBtn ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Label = styled.Text<{ isSaveBtn?: boolean }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.s};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, isSaveBtn }) =>
    isSaveBtn ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_200};
`;
