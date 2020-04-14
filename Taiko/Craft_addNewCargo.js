const { openBrowser, goto, click, write, text, dropDown, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
	;
        await goto("https://newcraftdevui.z22.web.core.windows.net", { navigationTimeout:150000} );
        await click("SIGN IN WITH MICROSOFT");
        await write("robert.sebenda@ttt.studio");
        await click("Next");
        await write("2T@LL2otems");
        await click("Sign in");
        await click("Yes", { navigationTimeout: 150000 });
	assert.ok(await text("AFRAMAX ATLANTIC CARGO FIXTURE LIST").exists());
	console.info("Text AFRAMAX ATLANTIC exists");
        await click("ADD CARGO FIXTURE");
	assert.ok(await text("AFRAMAX ATLANTIC CARGO FIXTURE LIST").exists());
	assert.ok(await text("Cargo Data").exists());	console.info("Cargo fixture detailed window exists");
        await click("CANCEL");
	try { Craft_addNewCargo } catch {};
	try { Craft_addNewCargo } catch {};
	try { Craft_addNewCargo } catch {};
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
