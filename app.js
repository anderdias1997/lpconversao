function validarTelefone() {
  const telefone = document.getElementById('telefone').value;
  const regex = /^[0-9]+$/; // Permite apenas números
  const telefoneErro = document.getElementById('telefone-erro');
  
  if (!regex.test(telefone)) {
      telefoneErro.textContent = 'Digite apenas números no campo telefone.';
      telefoneErro.style.display = 'block';
      // Limpar o campo ou destacar o erro visualmente
      document.getElementById('telefone').value = '';
      return false;
  } else {
      telefoneErro.textContent = '';
      telefoneErro.style.display = 'none';
      return true;
  }
}

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  
  // Valide o campo telefone antes de redirecionar
  if (validarTelefone()) {
      window.location.href = 'paginaobrigado.html'; // Redireciona para a página de obrigado
  }
});
