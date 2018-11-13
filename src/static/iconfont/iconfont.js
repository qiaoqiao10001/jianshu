
import {
  createGlobalStyle
} from 'styled-components'

export const Globalstyleicon = createGlobalStyle `
@font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1542078646341'); /* IE9*/
    src: url('./iconfont.eot?t=1542078646341#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
      url('./iconfont.ttf?t=1542078646341') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('./iconfont.svg?t=1542078646341#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont"!important;
    font-size: 16 px;
    font-style: normal; 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
  }
`