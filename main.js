function mostraMenuMobile() {
    let menuMobile = document.querySelector('.menu_mobile');
    if (menuMobile.classList.contains('revelaElemento')) {
         menuMobile.classList.remove('revelaElemento');
         document.querySelector('.icone').src = "imagens/menu.svg"        
    } else {
         menuMobile.classList.add('revelaElemento')
         document.querySelector('.icone').src = "imagens/close.svg"
        }
}

document.querySelector('.botaoMenuMobile').onclick = mostraMenuMobile;

const listaDeIconesInteresses = document.querySelectorAll('.icone_interesses')

for(let i = 0; i < listaDeIconesInteresses.length; i++) {
    const INTERESSE = listaDeIconesInteresses[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

