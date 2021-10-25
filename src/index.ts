import { provideFASTDesignSystem } from "@microsoft/fast-components";
import { Button, Anchor, ThemeProvider } from "./components";

export default function bootstrap() {
  provideFASTDesignSystem()
    .withPrefix("matt")
    .register(ThemeProvider(), Button(), Anchor());
}
