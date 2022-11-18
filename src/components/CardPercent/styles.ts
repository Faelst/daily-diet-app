import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 10px;
  padding: 10px;
  padding-bottom: 25px;

  justify-content: center;
  align-items: center;
  margin: 30px 0 30px 0;
`;

export const PercentTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.xll};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const PercentSubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.s};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  line-height: 20px;
`;

export const OpenImg = styled.Image`
  margin-left: auto;
  margin-bottom: -2px;
`;
