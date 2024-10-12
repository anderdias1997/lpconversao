function validarTelefone() {
    const telefone = document.getElementById('telefone').value;
    const regex = /^[0-9]+$/; // Permite apenas números
  
    if (!regex.test(telefone)) {
      alert('Digite apenas números no campo telefone.');
      // Limpar o campo ou destacar o erro visualmente
      document.getElementById('telefone').value = '';
    }
  }