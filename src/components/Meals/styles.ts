import styled from 'styled-components/native';

export const Container = styled.SectionList`
  flex: 1;
  margin-bottom: 150px;
  padding: 0px 0;
`;

export const SectionTitle = styled.Text`
  margin: 20px 0 0 0;
  font-size: ${({ theme }) => theme.FONT_SIZE.l};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
