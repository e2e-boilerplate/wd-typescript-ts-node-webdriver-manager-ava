import test from "ava";
// @ts-ignore
import * as wd from "wd";
import config from "../config";
const url = "https://e2e-boilerplate.github.io/sandbox/";

let browser: any;

test.before(async () => {
  browser = wd.promiseChainRemote();
  return config(url, browser);
});

test.after(async () => {
  return browser.quit();
});

test("should be on Sandbox", async (t) => {
  t.timeout(50000);
  return browser.title().then(Fn);

  function Fn(title: string) {
    t.is(title, "Sandbox");
  }
});

test("should have a page header", async (t) => {
  t.timeout(50000);
  return browser.elementByTagName("h1").text().then(Fn);

  function Fn(header: string) {
    t.is(header, "Sandbox");
  }
});
