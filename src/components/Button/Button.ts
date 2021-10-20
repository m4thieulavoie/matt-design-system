import { Button, buttonTemplate } from "@microsoft/fast-foundation";
import styles from "./Button.styles.scss";

const button = Button.compose({
  baseName: "button",
  template: buttonTemplate,
  styles,
});

export default button;
