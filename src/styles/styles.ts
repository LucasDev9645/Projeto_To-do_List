import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --color-white :#FFFFFF;
 
  --color-gray-300 :#FCFCFC;
  --color-gray-400 :#EEEEEE;
  --color-gray-500 :#A1A1A1; 
  --color-gray-600 :#666666;
  --color-gray-700 :#5E5E5E;  
   
  --color-blue-600 :#1E90FF; 
}
   
  * {
  margin:0; 
  padding:0;
  box-sizing:border-box;
  font-family: Roboto, sans-serif ;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 14rem auto;
`;

export default GlobalStyle;
