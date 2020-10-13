const { TestScheduler } = require('jest');
const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3101/';

let page, browser;
const width = 1200;
const height = 700;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=${width}, ${height}']
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

// Tests will go below once there's something to test
describe('Tiers service functions', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('Successfully loading Tiers service', () => {
    let div = 'tier 1';
    return title = page.$eval(div, e => e.textContent)
    .then(results => {
      expect(title).toEqual('Tier 1');
    })
    .catch(err => {
      console.log('error: ', err);
    })
  });
});
