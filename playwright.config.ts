import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  timeout: 120_000,
  expect: {
    toHaveScreenshot: {
      threshold: 0.01,
      maxDiffPixelRatio: 0.02,
    },
  },
  retries: 0,
  reporter: [["html", { open: "never" }]],
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1400, height: 900 },
        launchOptions: {
          args: ["--disable-dev-shm-usage"],
        },
      },
    },
  ],
  webServer: {
    command: "npm run dev -- --hostname 127.0.0.1 --port 3000",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
