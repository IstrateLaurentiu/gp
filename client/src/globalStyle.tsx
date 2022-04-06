import { createGlobalStyle } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "424px",
  tablet: "767px",
  laptop: "1023px",
  laptopM: "1280px",
  laptopL: "1439px",
  desktop: "1919px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

const queries = {
  mobileS: `screen and (max-width: ${size.mobileM})`,
  mobileM: `screen and (max-width: ${size.mobileL})`,
  mobile: `screen and (max-width: ${size.tablet})`,
  tablet: `screen and (max-width: ${size.laptop})`,
  laptopS: `screen and (max-width: ${size.laptopM})`,
  laptop: `screen and (max-width: ${size.laptopL})`,
  desktop: `screen and (max-width: ${size.desktop})`,
};

const font = {
  primary: "Abril Fatface , cursive",
};

const color = {
  black: "#000000",
  dark: "#060606",
  white: {
    primary: "#FFFFFF",
    secondary: "#F9F9F9",
  },
  gray: {
    border: "#B0B0B0",
  },
  red: {
    primary: "#E77768", //text modal log in
  },
  beige: {
    primary: "#F2EBDB",
  },
  blue: {
    primary: "#2E3A8C",
  },
  green: {
    primary: "#3B755F",
    light: "#AFC6BD",
    dark: "#212121",
  },
};

const heading = {
  h1: `
    font: 400 64px ${font.primary};
  `,
  h2: `
    font: 400 48px ${font.primary};
  `,
  h3: `
    font: 400 36px ${font.primary};
  `,
  h4: `
    font: 400 24px ${font.primary};
  `,
  h5: `
    font: 400 1.5rem/1.25rem ${font.primary};
  `,
  h6: `
    font: 400 1.25rem ${font.primary};
    letter-spacing: -0.009375rem;
  `,
};

const spacing = {
  xs: "8px",
  s: "16px",
  m: "24px",
  l: "32px",
  xl: "48px",
  xxl: "64px",
};

const width = {
  min: "320px",
  max: "1200px",
};

export const GlobalReset = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  color: ${color.green.primary};
`;

export const theme = Object.freeze({
  size,
  device,
  queries,
  font,
  color,
  heading,
  spacing,
  width,
});
