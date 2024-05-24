import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
   dir: "./",
});

const config: Config = {
   coverageProvider: "v8",
   testEnvironment: "jsdom",
   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
   moduleNameMapper: {
      "^@/app/(.*)$": "<rootDir>/src/app/$1",
      "^@/components/(.*)$": "<rootDir>/src/components/$1",
      "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
   },
};

export default createJestConfig(config);
