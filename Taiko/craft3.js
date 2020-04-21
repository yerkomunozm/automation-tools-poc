const { screencast, openBrowser, goto, click, write, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
	try { newcraftdevui.z22.web.core.windows } catch {};
        await goto("https://newcraftdevui.z22.web.core.windows.net");
        await click("SIGN IN WITH MICROSOFT");
        await write("robert.sebenda@ttt.studio");
        await click("Next");
        await write("2T@LL2otems");
        await click("Sign in");
        await click("Yes");
        await click("Admin");
        await click("LOG OUT");
        await click("LOG OUT");

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
