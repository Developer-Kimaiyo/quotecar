import { createGlobalStyle } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
const TIMEOUT = 400;
export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    margin: 0;
    font-family: ${themeGet("fontFamily.0", "sans-serif")};
 
  }
table {
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    border-spacing: 2px;
    border-color: grey;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
td {
    display: table-cell;
    vertical-align: inherit;
}
  h1,h2,h3,h4,h5,h6  {
    font-family: ${themeGet("fontFamily.1", "sans-serif")};
    margin: 0;
  }

  p,a,span,button,li,div  {
    font-family: ${themeGet("fontFamily.0", "sans-serif")};
    margin: 0;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  .quick-view-overlay{
    background-color: rgba(0,0,0,.5)
  }

  .add-address-modal,
  .add-contact-modal{
    box-shadow: 0 10px 40px rgba(0,0,0,0.16);
    border-radius: 3px !important;
    .innerRndComponent{
      width: 100%;
      padding: 30px;
      height: auto;
      background-color: #f7f8f9;
      border: 0;
      box-sizing: border-box;
    }
  }



  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${TIMEOUT}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${TIMEOUT}ms;
  }

  .image-item{
    padding: 0 15px;
  }

  @media (max-width: 1199px) and (min-width: 991px) {
    .image-item{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media (max-width: 768px) {
    .image-item{
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
  }


  .drawer-content-wrapper{
    *:focus {
      outline: none;
    }
  }

  .rc-table-content{
    border: 0;
  }
    .text-center {
    text-align: center !important;
  }
.content_spacing_m1 {
  height: 1px;
}

.content_spacing_m2 {
  height: 2px;
}

.content_spacing_m5 {
  height: 5px;
}

.content_spacing_0 {
  height: 10px;
}

.content_spacing_1 {
  height: 15px;
}

.content_spacing_2 {
  height: 20px;
}

.content_spacing_3 {
  height: 25px;
}

.content_spacing_4 {
  height: 30px;
}

.content_spacing_5 {
  height: 35px;
}

.content_spacing_6 {
  height: 40px;
}

.content_spacing_7 {
  height: 45px;
}

.content_spacing_8 {
  height: 50px;
}

.content_spacing_9 {
  height: 55px;
}

.content_spacing_10 {
  height: 60px;
}

.content_spacing_11 {
  height: 65px;
}

.content_spacing_12 {
  height: 70px;
}

.content_spacing_13 {
  height: 75px;
}

.content_spacing_14 {
  height: 80px;
}

.content_spacing_15 {
  height: 85px;
}

.content_spacing_16 {
  height: 90px;
}

.content_spacing_17 {
  height: 95px;
}

.content_spacing_18 {
  height: 100px;
}

.content_spacing_19 {
  height: 105px;
}

.content_spacing_20 {
  height: 110px;
}
ul {
    margin-top: 0;
    margin-bottom: 10px;
}
`;
