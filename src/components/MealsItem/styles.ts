import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 30px;
`;

export const DateText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.l};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
  width: 100%;
  height: 50px;
  margin: 10px 0px 0px 0px;
  padding: 10px;

  align-items: center;
  flex-direction: row;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const TextTimeMealsItem = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const TextDescriptionMealsItem = styled.Text`
  flex: 1;

  font-size: ${({ theme }) => theme.FONT_SIZE.m};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Divider = styled.View`
  width: 2px;
  height: 40%;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const CircleStatus = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
