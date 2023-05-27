import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import * as S from "./styles";
import { remove, edit } from "../../Store/reducers/tasks";
import TaskClass from "../../models/Task";

type Props = TaskClass;

const Task = ({
  description: originalDescription,
  priority,
  status,
  title,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription);
    }
  }, [originalDescription]);

  const cancelEdit = () => {
    setIsEditing(false);
    setDescription(originalDescription);
  };

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.StockBar>
        {isEditing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    description: description,
                    priority: priority,
                    status: status,
                    title: title,
                    id: id,
                  })
                );
                setIsEditing(false);
              }}
            >
              Salvar
            </S.SaveButton>
            <S.CancelRemoveButton onClick={cancelEdit}>
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
