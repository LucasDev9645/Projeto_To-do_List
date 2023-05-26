import styled from "styled-components";

type Props = {
  active: boolean;
};

export const Card = styled.div<Props>`
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid
    ${(props) =>
      props.active ? "var(--color-blue-600)" : "var(--color-gray-500)"};

  background-color: ${(props) =>
    props.active ? "var(--color-white)" : "var(--color-gray-300)"};

  color: ${(props) =>
    props.active ? "var(--color-blue-600)" : "var(--color-gray-700)"};
`;

export const Counter = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  display: block;
`;

export const Label = styled.span`
  font-size: 0.875rem;
`;
