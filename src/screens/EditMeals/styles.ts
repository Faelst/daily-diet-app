import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Form = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 50px 20px 0 20px;
`;

export const InputGroup = styled.View`
  width: 48%;
  margin-right: 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text<{ isSaveBtn?: boolean }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.s};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, isSaveBtn }) =>
    isSaveBtn ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_200};
`;

export const Input = styled.TextInput.attrs<{ isTextArea?: boolean }>(
  ({ isTextArea }) => ({
    multiline: isTextArea ? true : false,
    lines: isTextArea ? 5 : 1,
  })
)<{ isTextArea?: boolean }>`
  width: 100%;
  height: ${({ isTextArea }) => (isTextArea ? '100px' : '48px')};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 10px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 10px;
  margin: 5px 0px 25px 0px;
`;

export const ButtonGroup = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
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

export const StatusCircleIcon = styled.View<{ isBtnTruth?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme, isBtnTruth }) =>
    isBtnTruth ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 10px;
`;
