function bold(){
    document.getElementById('texteditor').innerText += " ** texto negrito **";
}

function italic(){
    document.getElementById('texteditor').innerText += " * texto itálico *";
}

function heading(){
    document.getElementById('texteditor').innerText += "# Título";
}

function list(){
    document.getElementById('texteditor').innerText += "- elemento 1\n- elemento 2\nelemento 3";
}

function paragraph(){
    document.getElementById('texteditor').innerText += "<p>parágrafo</p>";
}