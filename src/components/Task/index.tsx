import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { remove, edit, changeStatus } from "../../Store/reducers/tasks";
import TaskClass from "../../models/Task";
import * as enums from "../../utils/enums/Tasks";

import * as S from "./styles";
import { Button, SaveButton } from "../../styles/styles";

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

  const changeStatusTask = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus({ id, finished: e.target.checked }));
  };

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.CONCLUIDA}
          onChange={changeStatusTask}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
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
            <SaveButton
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
            </SaveButton>
            <S.CancelRemoveButton onClick={cancelEdit}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
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
