const { openBrowser, goto, write, click } = require('taiko');
(async () => {
  try {
    await openBrowser();
    await goto("google.com");
    await write("taiko test automation");
    await click("Buscar con Google");
  } catch (error) {
      console.error(error);
  } finally {
    closeBrowser();
  }
})();
