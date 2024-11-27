function mostrarMensaje() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
    document.querySelector('.message-container').style.opacity = 1;
    document.querySelector('.message-container').style.transform = 'translateY(0)';
  }
  
  function cerrarMensaje() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }
  
  function cambiarPestaña(pestaña) {

    const mensajes = document.querySelectorAll('.content');
    mensajes.forEach(mensaje => mensaje.classList.remove('active'));
  

    document.getElementById(`mensaje${pestaña}`).classList.add('active');
  }
  