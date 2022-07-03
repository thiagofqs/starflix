let arrayContent = [];
const text = document.getElementById("text");

function content(name, url) {
    const element = document.getElementById("contents");
    const figcaption = `<figcaption>${name}</figcaption>`;
    const img = `<img src="${url}">`;
    element.innerHTML += `<div id="${name}">${figcaption}${img}</div>`;
};

function addContent() {
    const name = document.getElementById("name").value;
    const url = document.getElementById("url").value;
    const index = arrayContent.indexOf(name.toUpperCase());
    if(index === -1) {
        if(name === "" || url === "") {
            text.innerHTML = "Preencha todos os campos!";
        } else {
            arrayContent.push(name.toUpperCase());
            document.getElementById("name").value = "";
            document.getElementById("url").value = "";
            content(name.toUpperCase(), url);
            text.innerHTML = "Conteúdo adicionado!";
        };
    } else {
        text.innerHTML = "Esse conteúdo já foi cadastrado!";
    };
};

function removeContent() {
    const name = (document.getElementById("name").value).toUpperCase();
    if(name === "") {
        text.innerHTML = "Digite o nome do conteúdo que desejas remover!";
    } else {
        const index = arrayContent.indexOf(name);
        const content = document.getElementById(name);
        (content.parentNode).removeChild(content);
        arrayContent.splice(index, 1);
        text.innerHTML = "Conteúdo removido!";
    };
};