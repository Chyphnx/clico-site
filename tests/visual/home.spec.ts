import { expect, test } from "@playwright/test";

test("homepage hero matches baseline", async ({ page }) => {
  await page.goto("/");
  await page.waitForTimeout(1200);
  await expect(page).toHaveScreenshot("home.png", {
    fullPage: true,
    animations: "disabled",
  });
});
