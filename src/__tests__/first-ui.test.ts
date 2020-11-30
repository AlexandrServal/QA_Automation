import playwright from 'playwright';
//jest.setTimeout(1000);
describe('UI test', ()=> {
    test('launch browser', async ()=> {
        const browser = await playwright.chromium.launch({headless: false});
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('http://google.com');
        await page.waitForTimeout(1000);
        await browser.close();
    })
})
//page.click()