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

step("Login to app", async function() {

    await goto("https://twotalltotems.harvestapp.com/");
    await write("yerko.munoz@ttt.studio");
    await focus(textBox({ id: 'password' }));
    await write("Calder0n");
    await click("Sign In");

});

step("Goto specific date <date>", async function(date) {
    
    await goto("https://twotalltotems.harvestapp.com/time/day/"+date);

});


step("Create and save entry with text <task> start <start> end <end>", async function(task, start, end) {
    //Save a new entry
    
    await click("New Entry");
        
    try {
        await click("RCA101")
        await click("TTT")
        await click("Business Development")
        await click("Quality Assurance")
    } catch (error) {
        console.error(error);
    }
        
        await focus(textBox({'name':'notes'}));
        await write(task);
        await focus(textBox({'name':'started_at'}));
        await write(start);
        await focus(textBox({'name':'ended_at'}));
        await write(end);
        await click("Save Entry");
        await waitFor("Timer saved.", 2000);
});


step("Logout", async function() {
    await click("Yerko");
    await click("Sign Out");
});