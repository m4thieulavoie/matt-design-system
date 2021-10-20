import { provideFASTDesignSystem } from "@microsoft/fast-components";
import { Button } from "./components/Button";
import { ThemeProvider } from "./components/ThemeProvider";

provideFASTDesignSystem()
  .withPrefix("matt")
  .register(ThemeProvider(), Button());
