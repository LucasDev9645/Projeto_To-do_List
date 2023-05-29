import styled from "styled-components";

export const FormStyle = styled.form`
  max-width: 34rem;
  width: 100%;
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--color-gray-600);

  textarea {
    resize: none;
    margin: 1rem 0;
  }
`;

export const Options = styled.div`
  margin-bottom: 1rem;

  p {
    margin-bottom: 0.375rem;
  }

  label {
    margin-right: 0.4rem;
  }

  input {
    margin-right: 0.1rem;
  }
`;

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`;
