/* eslint-disable global-require */
async function config(url: string, browser: any) {
  return process.env.GITHUB_ACTIONS
    ? browser
        .init({
          browserName: "chrome",
          "goog:chromeOptions": {
            args: ["--headless", "--disable-gpu"],
          },
        })
        .get(url)
    : browser
        .init({
          browserName: "chrome",
          "goog:chromeOptions": {},
        })
        .get(url);
}

export default config;
