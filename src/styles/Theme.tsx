import { DefaultTheme } from "styled-components";

const deviceSize = {
  mobile: "768px",
  tablet: "1100px",
  desktop: "1450px"
};

export const theme: DefaultTheme = {
  colors: {
    textDefault: "#666",
    pointColor: "#654296"
  },
  device: {
    mobile: `(max-width:${deviceSize.mobile})`,
    tablet: `(max-width:${deviceSize.tablet})`,
    desktop_s: `(max-width:${deviceSize.desktop})`
  }
};