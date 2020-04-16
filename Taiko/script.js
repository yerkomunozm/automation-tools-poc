const { openBrowser, closeBrowser, click, screencast } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await screencast.startScreencast('output.gif');
        await goto('gauge.org');
        await click('Plugins');
        // more actions
        // ...
    } finally {
        await screencast.stopScreencast();
        await closeBrowser();
    }
})();