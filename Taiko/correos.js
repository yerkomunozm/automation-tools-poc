const { openBrowser, goto, write, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("http://www.correos.cl");


        //form-field _cl_cch_seguimiento_portlet_seguimientoenlineaportlet_INSTANCE_XltkNeq6m4p1_flexdatalist flexdatalist-alias _cl_cch_seguimiento_portlet_seguimientoenlineaportlet_INSTANCE_XltkNeq6m4p1_nrsSeguimientos-flexdatalist
        await focus(textBox({'class':'form-field _cl_cch_seguimiento_portlet_seguimientoenlineaportlet_INSTANCE_XltkNeq6m4p1_flexdatalist flexdatalist-alias _cl_cch_seguimiento_portlet_seguimientoenlineaportlet_INSTANCE_XltkNeq6m4p1_nrsSeguimientos-flexdatalist'}));


        // buscar 12875007767000217000098001
        await write("12875007767000217000098001");

        await scrollDown('Agenda tu horario');


        await click('Buscar');

        //Captcha
        //class="recaptcha-checkbox-checkmark
        await click(checkBox({'class':'toggle'},near('flow')))
        await click(checkBox({'class':"recaptcha-checkbox-checkmark"}, near('')));

        await click('Buscar');

    } catch (error) {
        console.error(error);
        //await closeBrowser();
    } finally {
        //await closeBrowser();
    }
})();
