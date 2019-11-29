const txtNewWarehouse = document.getElementById('txtNewWarehouse');
const btnNewWarehouse = document.getElementById('btnNewWarehouse');

btnNewWarehouse.addEventListener('click', async (evt) => {
    txtNewWarehouse.value;

    const res = await client.emit('warehouse:create', {id: client.getSession(id)})
})