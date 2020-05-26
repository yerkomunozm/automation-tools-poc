const assert = require('assert');

const { screencast, openBrowser, goto, write, textBox, focus, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();

        await screencast.startScreencast('images/emv.gif');
        await goto("http://emv-dev.2tt.io/");

        await write("felipe.pena@ttt.studio");
        await focus(textBox({ id: 'password' }));
        await write("123456");
        await click("LOG IN");

        //Assertion
        assert.ok(await text("Dashboard").exists());
        console.log("Assertion Dashboard OK");

        await click("Staff");

        //Assertion
        assert.ok(await text("STAFF MANAGEMENT").exists());
        console.log("Assertion All Staff OK");


        await click("Log out");
    } catch (error) {
        console.error(error);
    } finally {
        await screencast.stopScreencast();
        await closeBrowser();
    }
})();