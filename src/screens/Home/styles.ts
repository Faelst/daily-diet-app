import styled from 'styled-components/native';

import { FontAwesome } from '@expo/vector-icons';

export const ScrollContainer = styled.ScrollView`
  padding: 65px 24px 0 24px;
  background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
`;

export const ContainerMeals = styled.View`
  width: 100%;
  margin-top: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.m};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 8px;
  margin: 10px 0px 0px 0px;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.s};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const PlusIcon = styled(FontAwesome).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 14,
}))`
  margin-right: 18px;
`;
