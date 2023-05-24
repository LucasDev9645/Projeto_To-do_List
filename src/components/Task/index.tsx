import { useState } from "react";
import { useDispatch } from "react-redux";

import * as enums from "../../utils/enums/Tasks";

import * as S from "./styles";
import { remove } from "../../Store/reducers/tasks";
import TaskClass from "../../models/Task";

type Props = TaskClass;

const Task = ({ description, priority, status, title, id }: Props) => {
  const dispatch = useDispatch();
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
            <S.CancelRemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelRemoveButton>
          </>
        )}
      </S.StockBar>
    </S.Card>
  );
};

export default Task;
