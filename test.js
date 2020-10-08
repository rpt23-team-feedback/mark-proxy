const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3101/';

let page, browser;
const width = 1200;
const height = 700;

beforeAll(async () => {
  // browser = await puppeteer.launch({
  //   headless: false,
  //   slowMo: 80,
  //   args: ['--window-size=${width}, ${height}']
  // });
  // page = await browser.newPage();
  // await page.setViewport({ width, height });
});

afterAll(() => {
  // browser.close();
});

// Tests will go below once there's something to test
