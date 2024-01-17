/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
// https://github.com/puppeteer/puppeteer/blob/v2.0.0/docs/api.md#class-browser

module.exports = async (browser, context) => {
  // launch browser for LHCI
  const page = await browser.newPage();
  await page.goto("http://localhost:5173/home");
  const mockLoginBtn = await page.waitForSelector("button");
  const navigateBtn = await page.waitForSelector("a");
  await mockLoginBtn.click();
  await Promise.all([page.waitForSelector(".card"), navigateBtn.click()]);
  // close session for next run
  await page.close();
};
