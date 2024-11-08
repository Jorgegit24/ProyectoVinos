document.getElementById('pedido-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const vino = document.getElementById('vino').value;
    const cantidad = document.getElementById('cantidad').value;

    alert(`Pedido realizado: \nNombre: ${nombre} \nEmail: ${email} \nVino: ${vino} \nCantidad: ${cantidad}`);
    
});
