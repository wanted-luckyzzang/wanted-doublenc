import { BC } from 'src/constants';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        a {
            text-decoration-line: none;   
            color: black; 
        }    
        body{ -ms-overflow-style: none; } ::-webkit-scrollbar { display: none; }
    }
    
`;

export default GlobalStyle;
