import { FoundationElement } from "@microsoft/fast-foundation";
import { html } from "@microsoft/fast-element";
import styles from "./ThemeProvider.styles.scss";

class ThemeProvider extends FoundationElement {}

export default ThemeProvider.compose({
  styles,
  baseName: "theme-provider",
  template: html`<slot></slot>`,
});
