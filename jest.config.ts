export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta", // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
              options: {
                metaObjectReplacement: {
                  env: { VITE_BACKEND_URI: "http://localhost:8000" },
                },
              },
            },
          ],
        },
      },
    ],
  },
  automock: false,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
