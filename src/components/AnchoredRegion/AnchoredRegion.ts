import {
  AnchoredRegion,
  anchoredRegionTemplate as template,
} from "@microsoft/fast-foundation";
import styles from "./AnchoredRegion.styles.scss";

const anchoredRegion = AnchoredRegion.compose({
  baseName: "anchored-region",
  template,
  styles,
});

export default anchoredRegion;
