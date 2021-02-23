import { Selector } from 'testcafe';

fixture `My First fixture`
    .page `http://devexpress.github.io/testcafe/example`;
    
test
    //.page `https://www.demoqa.com/forms`
    ('demo qa site', async t => {
        console.log('se ingreso a la pagina');
});
