import { BackButton } from '@components/BackButton';
import theme from '@theme/index';
import * as S from './styles';

export function DetailsMeals() {
  return (
    <S.Container>
      <S.Header>
        <BackButton color={theme.COLORS.GRAY_200} />
        <S.TitleHeader>Refeição</S.TitleHeader>
      </S.Header>

      <S.Content>
        <S.Title>Sanduíche</S.Title>
        <S.Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </S.Description>

        <S.DateTItle>Data e hora</S.DateTItle>
        <S.Date>12/12/2020 12:00</S.Date>

        <S.Tag>
          <S.Status />
          <S.TagTitle>dentro da dieta</S.TagTitle>
        </S.Tag>

        <S.Button isSaveBtn>
          <S.Label isSaveBtn>Salvar</S.Label>
        </S.Button>

        <S.Button isSaveBtn>
          <S.Label isSaveBtn>Salvar</S.Label>
        </S.Button>
      </S.Content>
    </S.Container>
  );
}
