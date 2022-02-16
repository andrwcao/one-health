module.exports = {
    click: async function(page, selector) {
        try {
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
                throw new Error(`Could not click on selector ${selector}`);
        }
    },
    getText: async function (page, selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, element => element.innerHTML);
        } catch (error) {
                throw new Error(`Could not get text from selector ${selector}`);
        }    
    },
    getTextWithXPath: async function waitForXPathAndClick(page, xPath) {
        await page.waitForXPath(page, xPath);
        var elements = await page.$x(xPath);
        if (elements.length > 1) {
            console.warn('waitForXPathAndClick returned more than one results');
        }
        return await elements[0].getText();
    },
    getCount: async function(page, selector) {
        try {
            await page.waitForSelector(selector);
            await page.$eval(selector, element => element);
        } catch (error) {
                throw new Error(`Could not get count of selector ${selector}`);
        }    
    },
    typeText: async function(page, selector, text) {
        try {
            await page.waitForSelector(selector);
            await page.type(selector, text);
        } catch (error) {
            throw new Error(`Could not type into selector ${selector}`)
        }
    },
    waitForText: async function(page, selector, text) {
        try {
            await page.waitForSelector(selector);
            await page.waitForFunction((selector, text) => {
                document.querySelector(selector).innerText.includes(text),
                    {},
                    selector,
                    text
            });
        } catch (error) {
            throw new Error(`Text: ${text} not found for selector: ${selector}`)
        }
    },
    shouldNotExist: async function(page, selector) {
        try {
            await page.waitForSelector(selector, { hidden: true });
        } catch (error) {
            throw new Error(`Selector: ${selector} is visible when it should not be`)
        }
    },
    waitForXPathAndClick: async function waitForXPathAndClick(page, xPath) {
        await page.waitForXPath(page, xPath);
        var elements = await page.$x(xPath);
        if (elements.length > 1) {
            console.warn('waitForXPathAndClick returned more than one results');
        }
        await elements[0].click();
    },
    isElementVisible: async function isElementVisible(page, selector) {
        var visible = true;
        await page.waitForSelector(selector, { visible: true, timeout: 5000 }).catch(function () {
            visible = false;
        });
        return visible;
    },
    isXPathVisible: async function isXPathVisible(page, xPath) {
        var visible = true;
        await page.waitForXPath(xPath, { visible: true, timeout: 5000 }).catch(function () {
            visible = false;
        });
        return visible;
    }
};