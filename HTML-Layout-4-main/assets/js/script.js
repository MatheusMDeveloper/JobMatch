window.addEventListener("scroll", function() {
	let header = this.document.querySelector('#header');
	header.classList.toggle('rolagem', this.window.scrollY > 10);
  });
  
  document.addEventListener('DOMContentLoaded', (event) => {
	const logo = document.getElementById('logo-container')
	const loginModal = document.getElementById('loginModal');
	const enviarCurriculoModal = document.getElementById('modalEnvioCurriculo');
	const loginButton = document.getElementById('loginButton');
	const enviarCurriculoButton = document.getElementById('enviarCurriculoButton');
	const closeModalButtons = document.querySelectorAll('.modal .close');
  
	// Função para abrir o modal e desativar a rolagem
	const openModal = (modal) => {
	  modal.style.display = 'block';
	  document.body.classList.add('modal-open');
	};
  
	// Função para fechar o modal e reativar a rolagem
	const closeModal = (modal) => {
	  modal.style.display = 'none';
	  document.body.classList.remove('modal-open');
	};
  
	// Abre o modal de login e desativa a rolagem
	loginButton.addEventListener('click', () => {
	  openModal(loginModal);
	});
  
	// Abre o modal de envio de currículo e desativa a rolagem
	enviarCurriculoButton.addEventListener('click', () => {
	  openModal(enviarCurriculoModal);
	});
  
	// Fecha qualquer modal e reativa a rolagem
	closeModalButtons.forEach(button => {
	  button.addEventListener('click', () => {
		closeModal(button.closest('.modal'));
	  });
	});
  
	// Fecha o modal ao clicar fora da área do modal
	window.addEventListener('click', (event) => {
	  if (event.target.classList.contains('modal')) {
		closeModal(event.target);
	  }
	});

    logo.addEventListener('hover', (event) => {
      


	})

  });

  