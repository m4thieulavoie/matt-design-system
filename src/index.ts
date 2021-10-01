import { provideFASTDesignSystem } from "@microsoft/fast-components";
import { Button } from "./components/Button";

provideFASTDesignSystem().withPrefix("matt").register(Button());
