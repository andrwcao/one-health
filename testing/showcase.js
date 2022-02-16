const puppeteer = require('puppeteer');
const { expect } = require('chai');
const { step } = require('mocha-steps');
const { click, typeText, isElementVisible, getText, isXPathVisible, waitForXPathAndClick, getTextWithXPath } = require('./helpers/helpers');
const { v4: uuidv4 } = require('uuid');

describe('Showcase', () => {
    let browser;
    let page;

    before(async () => {
        // Responsible for spinning up the browser
        browser = await puppeteer.launch({ 
            headless: false, 
            slowMo: 10, 
            devtools: false,
            defaultViewport: null,
            args:[
            '--start-fullscreen'
            ]
        });
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    })

    after(async () => {
        await browser.close();
    })

    beforeEach(async () => {
        await page.waitForTimeout(860);
    })

    afterEach(async () => {
        await page.waitForTimeout(860);
    })

    step('should load One Health homepage', async () => {
        await page.goto('http://localhost:3000/');
        expect(await page.$eval('#navigation-title', element => element.textContent)).to.equal('OneHealth');
    })

    step('should go to sign up form', async () => {
        await click(page, '#sign-up-button');
        expect(await isElementVisible(page, '.SignUpHeading')).to.be.true;
    })

    step('should enter sign up details', async () => {
        let email = uuidv4().substring(0,8) + '@gmail.com';
        await typeText(page, '#firstName', 'An');
        await typeText(page, '#lastName', 'Cao');
        await typeText(page, '#email', email);
        await typeText(page, '#password', 'password');
        await typeText(page, '#confirmPassword', 'password');
        await click(page, '#male-button');
        await click(page, '#signUpButton');
    })

    step('should be logged in', async () => {
        expect(await isXPathVisible(page, '//*[@id="root"]/header/header/div/div/div[4]/a[1]/button')).to.be.true;
    })

    step('should go to weight page', async () => {
        await page.goto('http://localhost:3000/weight');
    })

    step('should change date', async () => {
        // From date
        await click(page, '#mui-2');
        for (let i = 0; i < 5; i++) {
            await page.keyboard.press('ArrowRight');
        }
        for (let i = 0; i < 8; i++) {
            await page.keyboard.press('Backspace');
        }
        await page.keyboard.type('11/14/2021');
        // To date
        await click(page, '#mui-3');
        for (let i = 0; i < 5; i++) {
            await page.keyboard.press('ArrowRight');
        }
        for (let i = 0; i < 8; i++) {
            await page.keyboard.press('Backspace');
        }
        await page.keyboard.type('11/17/2021');
        await page.waitForTimeout(5000);
    })
    
})