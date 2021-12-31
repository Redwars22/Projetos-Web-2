function saveData(){
    todo = document.getElementById('todo').innerText;
    doing = document.getElementById('doing').innerText;
    done = document.getElementById('done').innerText;
    localStorage.setItem('todo', todo);
    localStorage.setItem('doing', doing);
    localStorage.setItem('done', done);
}

function loadData(){
    let todo_text = localStorage.getItem('todo');
    let doing_text = localStorage.getItem('doing');
    let done_text = localStorage.getItem('done');
    document.getElementById('todo').innerText = todo_text;
    document.getElementById('doing').innerText = doing_text;
    document.getElementById('done').innerText = done_text;
}

function resetData(){
    let action = confirm("Você tem certeza de que deseja deletar tudo? OBS: ISSO NÃO PODE SER DESFEITO!");
    if(action){
        document.getElementById('todo').innerText = "";
        document.getElementById('doing').innerText = "";
        document.getElementById('done').innerText = "";
        localStorage.setItem('todo', "");
        localStorage.setItem('doing', "");
        localStorage.setItem('done', "");
    } else {
        window.alert("UFA, seus dados não foram deletados!");
    }
}

window.onload = function(){
    loadData();
}
