const { openBrowser, goto, write, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("http://www.correos.cl");
        await write("12875007767000217000098001");
        await click('Buscar');
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
