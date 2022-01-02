function preview(){
    let code = document.getElementById('code-area').innerText;
    let preview = document.getElementById('preview-area');
    preview.innerHTML = "<div>" + code +"</div>";
}

/*function identCode(){
    let code = document.getElementById('code-area');
    code.innerText += '    ';
}*/