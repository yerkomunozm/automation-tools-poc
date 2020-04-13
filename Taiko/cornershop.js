const assert = require('assert');

const { openBrowser, goto, click, textBox, write, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://cornershopapp.com/es-cl/");
        await click("Ingresar");
        await focus(textBox({id:'email'}));
        await write("yerko.munoz@gmail.com");
        await focus(textBox({id:'password'}));
        await write("XXXXXX");
        await click(button('Iniciar sesión'));
        //We are inside

        await click(button({'data-testid':'undefinedLider'}));
        
        //Search for text "Shoppers occupied"
        assert.ok(await text("Shoppers occupied").exists());
        console.info("Text Shoppers occupied exists");

        //Logout
        await click("Account");
        await click("Log out");


    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
