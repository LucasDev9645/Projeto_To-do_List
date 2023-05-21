import styled from "styled-components";

export const Aside = styled.aside`
  padding: 1rem;
  background-color: var(--color-gray-400);
  height: 100vh;
`;

export const Filters = styled.aside`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  margin-top: 1rem;
`;

export const Field = styled.input`
  border-radius: 5px;
  border-color: var(--color-gray-600);
  background-color: var(--color-white);
  padding: 0.5rem;
  font-weight: 700;
  width: 100%;
`;
