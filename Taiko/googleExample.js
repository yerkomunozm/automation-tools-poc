const { screencast, openBrowser, goto, write, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();

        await goto("http://www.google.com");
        await write("cypress tool");
        await click("Buscar con Google");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
