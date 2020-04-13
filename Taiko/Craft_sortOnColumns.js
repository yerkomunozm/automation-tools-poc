const { openBrowser, goto, click, write, text, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
	await goto("https://newcraftdevui.z22.web.core.windows.net", { navigationTimeout:150000} );
        await click("SIGN IN WITH MICROSOFT");
        await write("robert.sebenda@ttt.studio");
        await click("Next");
        await write("2T@LL2otems");
        await click("Sign in");
        await click("Yes", { navigationTimeout: 150000 });
	assert.ok(await text("AFRAMAX ATLANTIC CARGO FIXTURE LIST").exists());
	console.info("Text AFRAMAX ATLANTIC exists");
	;
        await click("Status", { navigationTimeout: 60000 });
        await click("Charterer", { navigationTimeout: 60000 });
        await click("L.Port", { navigationTimeout: 60000 });
        await click("D.Port", { navigationTimeout: 60000 });
        await click("Laycan", { navigationTimeout: 60000 });
        await click("Rate", { navigationTimeout: 60000 });
        await click("Vessel 1", { navigationTimeout: 60000 });
        await click("ID", { navigationTimeout: 60000 });
        await click("ID", { navigationTimeout: 60000 });
        await click("CLEAR SORT", { navigationTimeout: 60000 });
        
	try { Craft_sortOnColumn } catch {};
	try { Craft_sortOnColumn } catch {};
	try { Craft_sortOnColumn } catch {};
	try { Craft_sortOnColumn } catch {};
	try { Craft_sortOnColumn } catch {};
	try { Craft_sortOnColumn } catch {};
	try { Craft_sortOnColumns } catch {};
	try { Craft_sortOnColumns } catch {};
	try { Craft_sortOnColumns } catch {};
	try { Craft_sortOnColumns } catch {};
	try { Craft_sortOnColumns } catch {};
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
