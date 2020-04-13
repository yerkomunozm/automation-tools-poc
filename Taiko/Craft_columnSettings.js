const { openBrowser, goto, click, write, text, button, closeBrowser } = require('taiko');
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
        await click ("COLUMN SETTINGS");
        await click("Grade");
        await click("Segment");
        await click("Type");
        await click(button("SAVE"));
        assert.ok(await text("Grade", "Segment", "Type").exists());
        console.info("newly added columns exists");
	try { Craft_columnSettings } catch {};
	try { Craft_columnSettings } catch {};
	try { Craft_columnSettings } catch {};
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
