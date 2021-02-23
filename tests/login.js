import loginPage from '../pages/loginPage'

fixture `Login fixture`
    .page `https://opensource-demo.orangehrmlive.com/index.php/auth/login`;
    
test
    ('login in the page', async t => {
        await
        loginPage.login()
});