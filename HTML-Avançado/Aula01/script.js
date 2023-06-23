//let l_image = document.querySelector('img#image');

//l_image.addEventListener("click", function (){
//   l_image.setAttribute("src", "./images/deslike.png");
//});


// COLETANDO DADOS ATRAVES DE UM ATRIBUTO NO HTML


let l_lista = document.querySelector('ul#lista');
let l_num = parseInt(l_lista.getAttribute('num'));

let l_conteudo = "";

for(var i = 0; i <= l_num; i++){
    l_conteudo += "<li>" + i + "</li>";
}

l_lista.innerHTML = l_conteudo;

//Utilizando a propriedade DATASET para coletar os dados de um atributo

let l_list = document.querySelector('ul#list');
let l_numdata = parseInt(l_list.dataset.num);

let l_conteudodata = "";

for(var i = 1; i <= l_numdata; i++){
    l_conteudodata += "<li>" + i + "</li>";
}

l_list.innerHTML = l_conteudodata;