import { BackButton } from '@components/BackButton';
import theme from '@theme/index';
import * as S from './styles';

export function DetailsMeals() {
  return (
    <>
      <S.Container>
        <S.Header>
          <BackButton color={theme.COLORS.GRAY_200} />
          <S.TitleHeader>Refeição</S.TitleHeader>
        </S.Header>
      </S.Container>

      <S.Form>
        <S.Label>Nome</S.Label>
        <S.Input />

        <S.Label>Descrição</S.Label>
        <S.Input />

        <S.Footer>
          <S.InputGroup>
            <S.Label>Data</S.Label>
            <S.Input />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Hora</S.Label>
            <S.Input />
          </S.InputGroup>
        </S.Footer>

        <S.Label>Está dentro da dieta?</S.Label>
        <S.ButtonGroup>
          <S.Button>
            <S.StatusCircleIcon isBtnTruth></S.StatusCircleIcon>
            <S.Label>Sim</S.Label>
          </S.Button>
          <S.Button>
            <S.StatusCircleIcon></S.StatusCircleIcon>
            <S.Label>Não</S.Label>
          </S.Button>
        </S.ButtonGroup>
      </S.Form>
    </>
  );
}
