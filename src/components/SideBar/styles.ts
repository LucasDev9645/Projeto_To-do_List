import styled from "styled-components";

export const Aside = styled.aside`
  padding: 16px;
  background-color: var(--color-gray-400);
  height: 100vh;
`;

export const Filters = styled.aside`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  margin-top: 16px;
`;

export const Field = styled.input`
  border-radius: 5px;
  border-color: var(--color-gray-600);
  background-color: var(--color-white);
  padding: 8px;
  font-weight: 700;
  width: 100%;
`;
