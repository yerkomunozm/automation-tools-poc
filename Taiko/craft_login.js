const assert = require('assert');

const { openBrowser, click, write, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
	await goto("https://newcraftstgui.z22.web.core.windows.net", { navigationTimeout:150000} );
    await click("SIGN IN WITH MICROSOFT");
    await write("robert.sebenda@ttt.studio");
    await click("Next");
    await write("2T@LL2otems");
    await click("Sign in");
    await click("Yes", { navigationTimeout: 150000 });

    //Verifies if everything is ok
    assert.ok(await text("AFRAMAX ATLANTIC CARGO FIXTURE LIST").exists());
    console.info("Text AFRAMAX ATLANTIC exists");
    //Tries to logout
    //await click($("#button_id"))
    await click("Admin");
    await click("LOG OUT");
    //Popup wair
    console.info("Log out");
    await click("LOG OUT");
    
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
