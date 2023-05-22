import * as S from "./styles";

const Task = () => {
  return (
    <S.Card>
      <S.Title>Nome da Tarefa</S.Title>
      <S.Tag>Importante</S.Tag>
      <S.Tag>Pendente</S.Tag>
      <S.Description />
      <S.StockBar>
        <S.Button>Editar</S.Button>
        <S.Button>Remover</S.Button>
      </S.StockBar>
    </S.Card>
  );
};

export default Task;
