const txtLoginEmail = document.getElementById('txtLoginEmail');
const txtLoginPass = document.getElementById('txtLoginPass');

const btnLoginSubmit = document.getElementById('btnLoginSubmit');

btnLoginSubmit.addEventListener('click', async (evt) => {
    btnLoginSubmit.setAttribute('disabled', true);
    
    try {
        const res = await client.emit('superuser:login', { email: txtLoginEmail.value, password: txtLoginPass.value });
        
        if (!res.status)
            throw res.message || 'Bad response, try again later';

        window.localStorage.token = res.access_token;
        window.location = '/superuser/panel';
    } catch (error) {
        M.toast({ html: err.error || 'Intente mas tarde' });
    }
    
    btnLoginSubmit.removeAttribute('disabled');
})