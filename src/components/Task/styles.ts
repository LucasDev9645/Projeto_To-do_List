import * as enums from "../../utils/enums/Tasks";

import styled from "styled-components";

type TagProps = {
  priority?: enums.Priority;
  status?: enums.Status;
  parameter: "status" | "priority";
};

const returnBackgroundColor = (props: TagProps): string => {
  if (props.parameter === "priority") {
    if (props.priority === enums.Priority.URGENTE)
      return "var(--color-red-600)";
    if (props.priority === enums.Priority.IMPORTANTE)
      return "var(--color-yellow-600)";
  } else {
    if (props.status === enums.Status.PENDENTE)
      return "var(--color-yellow-400)";
    if (props.status === enums.Status.CONCLUIDA)
      return "var(--color-green-500)";
  }
  return "var(--color-gray-500)";
};

export const Card = styled.div`
  background-color: var(--color-gray-300);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span<TagProps>`
  color: var(--color-white);
  padding: 0.25rem 0.5rem;
  font-weight: 700;
  font-size: 0.625rem;
  background-color: ${(props) => returnBackgroundColor(props)};
  border-radius: 5px;
  margin-right: 1rem;
  display: inline-block;
`;

export const Description = styled.textarea`
  color: var(--color-gray-550);
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-family: "Roboto Mono", monospace;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  resize: none;
  border: none;
  background-color: transparent;
`;

export const StockBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 0.75rem;
  font-weight: 700;
  font-size: 0.75rem;
  color: var(--color-white);
  border: none;
  cursor: pointer;
  background-color: var(--color-gray-900);
  border-radius: 5px;
  margin-right: 0.5rem;
`;

export const SaveButton = styled(Button)`
  background-color: var(--color-green-500);
`;

export const CancelRemoveButton = styled(Button)`
  background-color: var(--color-red-600);
`;
