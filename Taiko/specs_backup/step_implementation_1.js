/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, click, screenshot, text, focus, textBox, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};


step("Goto Craft login page", async function() {
    await goto("https://newcraftdevui.z22.web.core.windows.net/", { navigationTimeout:150000} );
    

});


step("Login to environment with <email>", async function(email) {
    
        await click("SIGN IN WITH MICROSOFT");
        await write(email);
        await click("Next");
        await write("2T@LL2otems");
        await click("Sign in");
        await click("Yes", { navigationTimeout: 150000 });

});

step("Check title", async function() {
	    //Verifies if everything is ok
        assert.ok(await text("AFRAMAX ATLANTIC CARGO FIXTURE LIST").exists());
        console.info("Text AFRAMAX ATLANTIC exists");
});


step("Logout", async function() {
	await click("Admin");
    await click("LOG OUT");
    //Popup wair
    console.info("Log out");
    await click("LOG OUT");
});