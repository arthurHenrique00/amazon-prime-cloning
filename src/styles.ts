import { createGlobalStyle } from 'styled-components'

export const cores = {}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding:0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
    }

    body {
    }
`
export default GlobalStyle