const { screencast, openBrowser, goto, click, write, textBox, focus, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("http://emv-dev.2tt.io/");
        await click("LOGIN");
        await write("felipe.pena@ttt.studio");
        await focus(textBox({ id: 'password' }));
        await write("123456");
        await click("Login");
        await click("Log out");
	} catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
