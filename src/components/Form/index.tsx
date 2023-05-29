import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as enums from "../../utils/enums/Tasks.ts";
import Task from "../../models/Task.ts";
import { register } from "../../Store/reducers/tasks.ts";

import {
  Field,
  MainContainer,
  SaveButton,
  Title,
} from "../../styles/styles.ts";
import { FormStyle, Options, Option } from "./styles.ts";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(enums.Priority.NORMAL);

  const taskRegister = (e: FormEvent) => {
    e.preventDefault();
    const addTask = new Task(
      9,
      title,
      priority,
      enums.Status.PENDENTE,
      description
    );
    dispatch(register(addTask));
    navigate("/");
  };

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <FormStyle onSubmit={taskRegister}>
        <Field
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Field
          as="textarea"
          placeholder="Descrição da Tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="prioridade"
                type="radio"
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </FormStyle>
    </MainContainer>
  );
};

export default Form;
