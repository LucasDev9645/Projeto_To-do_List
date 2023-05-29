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
