import { createGlobalStyle } from "styled-components"
import SpoqaHanSansNeoBold from './SpoqaHanSansNeo-Bold.woff'
import SpoqaHanSansNeoMedium from './SpoqaHanSansNeo-Medium.woff'
import SpoqaHanSansNeoRegular from './SpoqaHanSansNeo-Regular.woff'
import SpoqaHanSansNeoLight from './SpoqaHanSansNeo-Light.woff'


const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'SpoqaHanSansNeo';
        src: url(${SpoqaHanSansNeoBold});
        font-weight: 500;
    }
    @font-face {
        font-family: 'SpoqaHanSansNeo';
        src: url(${SpoqaHanSansNeoMedium});
        font-weight: 400;
    }
    @font-face {
        font-family: 'SpoqaHanSansNeo';
        src: url(${SpoqaHanSansNeoRegular});
        font-weight: 300;
    }
    @font-face {
        font-family: 'SpoqaHanSansNeo';
        src: url(${SpoqaHanSansNeoLight});
        font-weight: 200;
    }

    *{
        font-family : 'SpoqaHanSansNeo';
    }
`
export default GlobalFonts