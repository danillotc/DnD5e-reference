import { createGlobalStyle } from 'styled-components';

import DeRoos from './deroos__.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'SketchGothicSchool';
        src: url(${DeRoos}) format('truetype');
    }
`;