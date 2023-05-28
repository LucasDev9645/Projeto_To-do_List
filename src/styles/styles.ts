import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --color-white :#FFFFFF;
  --color-Black :#000000;

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

export default GlobalStyle;
