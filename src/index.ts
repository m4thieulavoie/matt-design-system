import { provideFASTDesignSystem } from "@microsoft/fast-components";
import {
  AnchoredRegion,
  Button,
  Anchor,
  ThemeProvider,
  Tooltip,
} from "./components";

export default function bootstrap() {
  provideFASTDesignSystem()
    .withPrefix("matt")
    .register(AnchoredRegion(), ThemeProvider(), Button(), Anchor(), Tooltip());
}
