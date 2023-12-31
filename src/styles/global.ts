import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin:0px;
    padding: 0px;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 2 ${(props) => props.theme['green-500']};
  }

  body {
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: white;
  }
`
