const app = document.querySelector('#app');
// const app = document.getElementById('app')
// const app = document.getElementsByClassName('app')
// const lis = document.querySelectorAll('.lista')

const form = document.createElement('form');
form.className = 'form';

const formTitle = document.createElement('h3');
formTitle.className = 'title-form';
formTitle.textContent = 'Registro'

const inputName = document.createElement('input');
inputName.className = 'inputs-form';
inputName.placeholder = 'Nombre...';

const inputEmail = document.createElement('input');
inputEmail.className = 'inputs-form';
inputEmail.setAttribute('placeholder', 'Email...');
inputEmail.type = 'email'


const inputPass = document.createElement('input');
inputPass.className = 'inputs-form';
inputPass.placeholder = 'Contraseña...';
inputPass.type = 'password';


const submitButton = document.createElement('button');
submitButton.className = 'button-form';
submitButton.textContent = 'Enviar';

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    alert(`Hola ${inputName.value}`);
    // localStorage.setItem('Name', inputName.value)
    // localStorage.setItem('Email', inputEmail.value)
    // localStorage.setItem('Pass', inputPass.value)ç
    const user = {
        name: inputName.value,
        email: inputEmail.value,
        pass: inputPass.value
    }

    localStorage.setItem('user', JSON.stringify(user))
})

form.append(formTitle, inputName, inputEmail, inputPass, submitButton)


if(localStorage.getItem('user')){
    const user = JSON.parse(localStorage.getItem('user'))
    const saludo = document.createElement('h1');
    saludo.textContent = `Bienvenido ${user.name}`

    app.appendChild(saludo)
}else{
    app.appendChild(form)
}