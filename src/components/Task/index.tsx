import { useState } from "react";

import * as enums from "../../utils/enums/Tasks";

import * as S from "./styles";

type Props = {
  title: string;
  priority: enums.Priority;
  status: enums.Status;
  description: string;
};

const Task = ({ description, priority, status, title }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.StockBar>
        {isEditing ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.CancelRemoveButton onClick={() => setIsEditing(false)}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.CancelRemoveButton>Remover</S.CancelRemoveButton>
          </>
        )}
      </S.StockBar>
    </S.Card>
  );
};

export default Task;
