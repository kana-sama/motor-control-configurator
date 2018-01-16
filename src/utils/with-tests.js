import results from "../../.jest-test-results.json";
import { withTests as withTestsFromAddon } from "@storybook/addon-jest";

export const withTests = withTestsFromAddon({ results });
