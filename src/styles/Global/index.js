import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
:root {
 --font-inter: 'Inter', sans-serif;

 --color-primary: 39, 174, 96;
 --color-primary-50: 147, 215, 175;
 --color-secondary: 235, 87, 87;

 --grey-100: 51, 51, 51;
 --grey-50: 130, 130, 130;
 --grey-20: 224, 224, 224;
 --grey-0: 245, 245, 245;

 --Negative: 230, 0, 0;
 --Warning: 255, 205, 7;
 --Sucess: 22, 136, 33;
 --Information: 21, 91, 203;
}

* {
    margin: 100px;
    padding: 0;
    box-sizing: border-box;
    border: none;
}

ul, li {
    list-style: none;
}
`;
