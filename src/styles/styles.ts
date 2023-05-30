import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --color-white :#FFFFFF;

  --color-gray-300 :#FCFCFC;
  --color-gray-400 :#EEEEEE;
  --color-gray-500 :#A1A1A1; 
  --color-gray-550 :#8B8B8B;  
  --color-gray-600 :#666666;
  --color-gray-700 :#5E5E5E;  
  --color-gray-900 :#2F3640;
 
  --color-yellow-400 :#F0C11A;  
  --color-yellow-600 :#E1A32A;

  --color-red-600 :#C23616;

  --color-green-500 :#44BD32;
  
  --color-blue-600 :#1E90FF; 
}
   
  * {
  margin:0; 
  padding:0;
  box-sizing:border-box;
  font-family: Roboto, sans-serif ;
  list-style:none;
  text-decoration:none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 14rem auto;
`;

export const MainContainer = styled.main`
  padding: 0 2.5rem;
  height: 100vh;
  overflow-y: scroll;
`;

export const Title = styled.h2`
  display: block;
  font-weight: 700;
  font-size: 1.125rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

export const Field = styled.input`
  border-radius: 5px;
  border-color: var(--color-gray-600);
  background-color: var(--color-white);
  padding: 0.5rem;
  font-weight: 700;
  width: 100%;
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

export default GlobalStyle;
