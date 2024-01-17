# Lighthouse CI
## Tools
1. [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md)
2. puppeteer
3. [github action](https://docs.github.com/en/actions/learn-github-actions/essential-features-of-github-actions)

## Steps
1. define lighthouse ci configuration file - lighthouserc.cjs
2. define github ci action - .github/workflows/ci.yml
3. define puppeteer scripts (optional) - puppeteer-script.cjs

## Tip Summary
1. lighthouse-ci mainly used to evaluate the performance of the target urls. If it's needed to evaluate performance of a specific flow or user interaction, should separately set puppeteer test with lighthouse to realize. (Reference: https://github.com/GoogleChrome/lighthouse/blob/main/docs/user-flows.md)
2. The ```puppeteerScript``` in lighthouse-ci configuration file is used to mainly mock 'auth' step, which will block lighthouse to evaluate the defined target url if it's ignored.
3. To avoid ```chrome no installed``` error, it's better to install both puppeteer(include chrome installation) and lighthouse globally or locally. Otherwise the chrome path might cannot be returned by puppeteer to lighthouse correctly
4. puppeteer API ```waitForNavigation``` only support soft navigate (currently)
5. puppeteer API ```waitForNavigation``` cannot successfully catch navigation in github ci (can do it successfully locally), no clear reason found. An alternative option is to use ```waitForSelector``` to ensure the new page has been successfully loaded before starting lighthouse evaluation.
