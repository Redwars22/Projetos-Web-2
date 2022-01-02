function saveFile(){
    let code = document.getElementById('code-area').innerText;
    localStorage.setItem('data', code);
}

function newFile(){
    /*let code = document.getElementById('code-area');
    code.innerText = "";
    let preview = document.getElementById('preview-area');
    preview.innerHTML = "";*/

    let choice = confirm("Tem certeza de que deseja deletar tudo e começar do zero? AVISO: ESTA AÇÃO É IRREVERSÍVEL!!!!");

    if(choice){
        let code = document.getElementById('code-area');
        code.innerText = "";
        let preview = document.getElementById('preview-area');
        preview.innerHTML = "";
        localStorage.setItem('data', '');
    }
}

function openFile(){
    let data = localStorage.getItem('data');
    document.getElementById('code-area').innerText = data;
}