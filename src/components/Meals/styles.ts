import styled from 'styled-components/native';

export const Container = styled.View<{ last?: boolean }>`
  flex: 1;
  margin-bottom: ${({ last }) => (last ? 150 : 20)}px;
`;

export const DateText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.l};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
