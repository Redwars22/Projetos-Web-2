var locked = false;

function bold() {
  document.getElementById("texteditor").innerText += " **texto negrito**";
}

function italic() {
  document.getElementById("texteditor").innerText += " *texto itálico*";
}

function heading() {
  document.getElementById("texteditor").innerText += "\n# Título";
}

function list() {
  document.getElementById("texteditor").innerText +=
    "\n- elemento 1\n- elemento 2\n- elemento 3";
}

function paragraph() {
  document.getElementById("texteditor").innerText += "\n<p>parágrafo</p>";
}

function link() {
  document.getElementById("texteditor").innerText +=
    "[texto do link](endereço)";
}

function code() {
  document.getElementById("texteditor").innerText +=
    "\n\n```html\n<p>Insira o código aqui</p>\n```";
}

function image() {
  document.getElementById("texteditor").innerText +=
    "\n<img src='endereço da imagem' width='50px' height='50px'/>";
}

function table() {
  let header = "\n\n| Cabeçalho 1 | Cabeçalho 2 | Cabeçalho 3 |";
  let separator = "\n|--- |--- |--- |";
  let content = "\n| Item 1 | Item 2 | Item 3 |";

  document.getElementById("texteditor").innerText +=
    header + separator + content;
}

function lock() {
  if (locked) {
    locked = false;
    document.getElementById("texteditor").contentEditable = true;
  } else {
    locked = true;
    document.getElementById("texteditor").contentEditable = false;
    window.alert(
      "O campo de texto foi bloqueado para evitar alterações acidentais." +
      " Para desbloqueá-lo, clique novamente no ícone de cadeado."
    );
  }
}