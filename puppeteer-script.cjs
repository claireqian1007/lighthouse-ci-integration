/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
// https://github.com/puppeteer/puppeteer/blob/v2.0.0/docs/api.md#class-browser

module.exports = async (browser, context) => {
  // launch browser for LHCI
  const page = await browser.newPage();
  console.log(context.url);
  await page.goto(context.url);
  const element = await page.waitForSelector("a");
  await element.click();
  // await page.waitForNavigation(); //only support soft navigation
  // const button = await page.waitForSelector("button");
  // await button.click();
  // close session for next run
  await page.close();
};
