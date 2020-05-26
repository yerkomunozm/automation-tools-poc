const { screencast, openBrowser, goto, textBox, focus, write, click, dropDown, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://ora-stg-admin.2tt.io/");
        await focus(textBox({ id: 'textfield'}));
        await write("yerko.munoz@ttt.studio");
        await focus(textBox({ id: 'password'}));
        await write("123456");
        await click("Log in");
        await click("Election Reports");

        //Create a new election report
        await click("Create New");
        await click("Select one");
        await click("Presidente de la República");

        await click("Select one");
        await click("Aguascalientes");

        //id="step1.report_name"
        //await focus(textBox({ id: 'tep1.report_name'}));
        await click("Election Report Name");
        await write("QA Election report");

        await click("Election Report Summary");
        await write("QA Election report summary example");

        //Scroll down
        await scrollDown('Next');

        await click("Election Date");
        await click("19");
        
        
        //await click("Upload");
        ///Users/yerkomunoz/Desktop/Screen Shot 2020-05-15 at 15.53.31.png
        await attach("/Users/yerkomunoz/Desktop/Screen Shot 2020-05-15 at 15.53.31.png", to('Election Reporte Image'));


    } catch (error) {
        console.error(error);
    } finally {
        //await closeBrowser();
    }
})();
