const { screencast, openBrowser, goto, write, textBox, focus, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://twotalltotems.harvestapp.com/");
        await write("yerko.munoz@ttt.studio");
	    await focus(textBox({ id: 'password' }));
        await write("Calder0n");
        await click("Sign In");
		 

        //await goto("https://twotalltotems.harvestapp.com/time/day/2020/5/8/2992460")

		//Save a new entry
	await click("New Entry");
        try {
            await click("RCA101")
            await click("TTT")
            await click("Business Development")
            await click("Quality Assurance")
        } catch (error) {
            console.error(error);
        }
        
        await focus(textBox({'name':'notes'}));
        await write("QA Daily Stand-up");
        await focus(textBox({'name':'started_at'}));
        await write("12:00pm");
        await focus(textBox({'name':'ended_at'}));
        await write("12:30pm");
        await click("Save Entry");
		
		
		//Save a new entry
//		await click("New Entry");
//        await focus(textBox({'name':'notes'}));
//        await write("Support QA projects");
//        await focus(textBox({'name':'started_at'}));
//        await write("12:30pm");
//        await focus(textBox({'name':'ended_at'}));
//        await write("1:00pm");
//        await click("Save Entry");
		
		
		//Logout 
		await click("Yerko");
        await click("Sign Out");
	
	
	} catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
