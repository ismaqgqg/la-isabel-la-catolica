// Obtener los elementos del modal
const modalWrapper = document.querySelector('.registration-modal-wrapper');
const modalOverlay = document.querySelector('.modal-overlay');
const showModalButton = document.querySelector('#show-registration-modal');
const closeModalButton = document.querySelector('#close-modal'); // Nuevo botón de cerrar

// Función para mostrar el modal
const showModal = () => {
  modalWrapper.style.display = 'block';
  modalOverlay.style.display = 'block';
};

// Función para ocultar el modal con animación
const hideModal = () => {
  modalWrapper.classList.add('fade-out');
  modalOverlay.classList.add('fade-out');

  // Esperar a que la animación termine antes de ocultar el modal completamente
  setTimeout(() => {
    modalWrapper.style.display = 'none';
    modalOverlay.style.display = 'none';
    modalWrapper.classList.remove('fade-out');
    modalOverlay.classList.remove('fade-out');
  }, 300); // Debe coincidir con la duración de la animación en CSS
};

// Abrir el modal al hacer clic en el botón
if (showModalButton) {
  showModalButton.addEventListener('click', showModal);
}

// Cerrar el modal al hacer clic en la superposición
modalOverlay.addEventListener('click', hideModal);

// Cerrar el modal al hacer clic en el botón de cerrar
if (closeModalButton) {
  closeModalButton.addEventListener('click', hideModal);
}

// Manejar el envío del formulario con AJAX
$('#signup-form').on('submit', function(e) {
  e.preventDefault();
  
  $.ajax({
    type: 'POST',
    url: 'process_form.php',
    data: $(this).serialize(),
    success: function(response) {
      alert('Formulario enviado correctamente');
      $('#signup-form')[0].reset(); // Limpiar el formulario
      hideModal(); // Cerrar el modal
    },
    error: function(xhr, status, error) {
      alert('Error al enviar el formulario');
    }
  });
});
