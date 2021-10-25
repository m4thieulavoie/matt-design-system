import { Anchor, anchorTemplate } from "@microsoft/fast-foundation";
import styles from "./Anchor.styles.scss";

const anchor = Anchor.compose({
  baseName: "anchor",
  template: anchorTemplate,
  styles,
});

export default anchor;
