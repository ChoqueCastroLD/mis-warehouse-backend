const txtNameWareHouse = document.getElementById('txtNameWareHouse');
const btnNewWarehouse = document.getElementById('btnNewWarehouse');

btnNewWarehouse.addEventListener('click', async (evt) => {
    btnNewWarehouse.setAttribute('disabled', true);
    
    try {
        const res = await client.emit('warehouse:create', {name: txtNameWareHouse.value});
        
        if (!res.status)
            throw res.message || 'Bad response, try again later';
        
        console.log(res);
        
    } catch (error) {
        M.toast({ html: error.error || 'Intente mas tarde' });
    }
        
    btnNewWarehouse.removeAttribute('disabled');
})