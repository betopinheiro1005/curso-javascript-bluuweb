/* Variáveis globais */

const formularioUI = document.querySelector('#formulario');
const listaAtividadesUI = document.getElementById('listaAtividades');
let arrayAtividades = [];

/* Funções */

const CriarItem = (atividade) => {
    let item = {
        atividade: atividade,
        status: false
    }
    arrayAtividades.push(item);
    return item;
}

const GuardarDB = (atividade) => {
    localStorage.setItem('rotina', JSON.stringify(arrayAtividades));
    lerDB();
}

const lerDB = () => {
    listaAtividadesUI.innerHTML = '';
    arrayAtividades = JSON.parse(localStorage.getItem('rotina'));
    if (arrayAtividades === null) {
        arrayAtividades = [];
    } else {
        arrayAtividades.forEach(element => {
            // console.log(element);
            if (element.status) {
                listaAtividadesUI.innerHTML += `<div class="alert alert-success" role="alert">
                <i class="material-icons float-left mr-2">accessibility</i>
                <b>${element.atividade}</b> - ${element.status}
                <span class="float-right">
                    <i class="material-icons">done</i>
                    <i class="material-icons">delete</i>
                </span>
            </div>`
            } else {
                listaAtividadesUI.innerHTML += `<div class="alert alert-danger" role="alert">
                <i class="material-icons float-left mr-2">accessibility</i>
                <b>${element.atividade}</b> - ${element.status}
                <span class="float-right">
                    <i class="material-icons">done</i>
                    <i class="material-icons">delete</i>
                </span>
            </div>`

            }
        });
    }
}

const EliminarDB = (atividade) => {
    // console.log(atividade);
    let indexArray;
    arrayAtividades.forEach((element, index) => {
        // console.log(index);
        if (element.atividade === atividade) {
            indexArray = index;
        }
    });
    arrayAtividades.splice(indexArray, 1);
    GuardarDB();
}

const EditarDB = (atividade) => {
    let indexArray = arrayAtividades.findIndex((element) => element.atividade === atividade);
    console.log(arrayAtividades[indexArray]);
    arrayAtividades[indexArray].status = true;
    GuardarDB();
}


/* EventListener */

formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let atividadeUI = document.querySelector('#atividade').value;
    console.log(atividadeUI);

    CriarItem(atividadeUI);
    GuardarDB();

    formularioUI.reset();

});

document.addEventListener('DOMContentLoaded', lerDB);

listaAtividadesUI.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target.innerHTML);

    if (e.target.innerHTML === 'done' || e.target.innerHTML === 'delete') {
        let texto = e.path[2].childNodes[3].innerHTML;
        if (e.target.innerHTML === 'delete') {
            let texto = e.path[2].childNodes[3].innerHTML;
            // Ação de eliminar
            EliminarDB(texto);

        }
        if (e.target.innerHTML === 'done') {
            // Ação de editar
            EditarDB(texto);
        }
    }
});