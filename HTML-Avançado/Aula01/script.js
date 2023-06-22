//let l_image = document.querySelector('img#image');

//l_image.addEventListener("click", function (){
//   l_image.setAttribute("src", "./images/deslike.png");
//});

let l_list = document.querySelector('ul#list');
let l_num = parseInt(l_list.getAttribute('num'));

let l_contador = "";

for(var i = 0; i <= l_num; i++){
    l_contador += "<li>" + i + "</li>";
}

l_list.innerHTML = l_contador;