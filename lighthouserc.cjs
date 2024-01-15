module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3, //lighthouse run times to return html
      startServerCommand: "npm run dev", //start a server
      url: ["http://127.0.0.1:5173/"],
      settings: {
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
        skipAudits: ["redirects-http", "uses-http2"],
      },
      puppeteerScript: "./puppeteer-script.cjs",
      puppeteerLaunchOptions: {
        args: ['--no-sandbox','--disable-setuid-sandbox'],
      },
    },
    assert: {
      //fail the build based on the audit results
      // preset: "lighthouse:recommended", // 包含的东西太多
      assertions: {
        "categories:performance": [
          "error",
          { minScore: 0.9, aggregationMethod: "median" },
        ], //定义不同的数据等级
        "categories:accessibility": [
          "error",
          { minScore: 0.9, aggregationMethod: "pessimistic" },
        ],
        "categories:best-practices": [
          "error",
          { minScore: 0.9, aggregationMethod: "pessimistic" },
        ],
        "categories:seo": [
          "error",
          { minScore: 0.9, aggregationMethod: "pessimistic" },
        ],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};