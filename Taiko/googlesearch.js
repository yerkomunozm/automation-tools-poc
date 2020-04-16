const { openBrowser, goto, write, click, screencast } = require('taiko');

(async () => {
  try {
    await openBrowser();
    await screencast.startScreencast('initial.gif');
    await goto("google.com");


    await write("taiko test automation");
    await click("Buscar con Google");


  } catch (error) {
      console.error(error);
  } finally {

    await screencast.stopScreencast();
    await closeBrowser();
  }
})();
