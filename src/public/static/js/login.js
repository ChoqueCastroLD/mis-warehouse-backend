const txtLoginEmail = document.getElementById('txtLoginEmail');
const txtLoginPass = document.getElementById('txtLoginPass');

const btnLoginSubmit = document.getElementById('btnLoginSubmit');

btnLoginSubmit.addEventListener('click', evt => {
    btnLoginSubmit.setAttribute('disabled', true);
    client.emit('superuser:login', {email: txtLoginEmail.value, password: txtLoginPass.value})
    .then( res => {
        console.log(res);
        if(!res.status){
            throw res.message || 'Bad response, try again later';        
        }

        window.localStorage.token = res.access_token;
        window.location = '/superuser/panel';
    })
    .catch( err => {
        M.toast({html: err.error || 'Intente mas tarde'});
    })
    .finally( () => {
        btnLoginSubmit.removeAttribute('disabled');
    })
})