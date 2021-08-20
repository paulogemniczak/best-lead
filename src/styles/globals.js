import {createGlobalStyle, css} from 'styled-components';

const GlobalStyles = createGlobalStyle `
 @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Open Sans Bold'), local('Open-Sans-Bold'),
        url('/fonts/open-sans-v23-latin-700.woff2') format('woff2'),
  }
  @font-face {
  font-family: 'PT Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('PT Mono Regular'), local('PT-Mono-Regular'),
       url('/fonts/pt-mono-v8-latin-regular.woff2') format('woff2'),
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ${
    ({theme}) => css `
      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${
        theme.font.family
    };
        font-size: ${
        theme.font.sizes.medium
    };
        background-color: ${
        theme.colors.mainBg
    };
        color: ${
        theme.colors.primary
    };
      }
      .accordion-button:not(.collapsed)::after {
        background-image: none;
      }
      .accordion-button {
        font-size: 1.6rem;
        font-weight: normal;
        color: ${
        theme.colors.black
    };
        &::after {
          color: white;
          background-image: none;
        }
        &:focus,
        &:active {
          border-color: ${
        theme.colors.primary
    };
          box-shadow: none;
          outline: ${
        theme.colors.primary
    };
          -webkit-box-shadow: ${
        theme.colors.primary
    } !important;
        }
        &[aria-expanded="true"] {
          color: ${
        theme.colors.white
    };
          background-color: ${
        theme.colors.primary
    };
        }
      }
      .accordion-body {
        color: ${
        theme.colors.black
    };
        background-color: #efefef;
        font-size: 1.4rem;
      }
    `
}
`;

export default GlobalStyles;

