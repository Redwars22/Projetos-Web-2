function saveData() {
  todo = document.getElementById("todo").innerText;
  doing = document.getElementById("doing").innerText;
  done = document.getElementById("done").innerText;
  localStorage.setItem("todo", todo);
  localStorage.setItem("doing", doing);
  localStorage.setItem("done", done);
}

function loadData() {
  let todo_text = localStorage.getItem("todo");
  let doing_text = localStorage.getItem("doing");
  let done_text = localStorage.getItem("done");
  document.getElementById("todo").innerText = todo_text;
  document.getElementById("doing").innerText = doing_text;
  document.getElementById("done").innerText = done_text;
}

function resetData() {
  let action = confirm(
    "Você tem certeza de que deseja deletar tudo? OBS: ISSO NÃO PODE SER DESFEITO!"
  );

  if (action) {
    document.getElementById("todo").innerText = "";
    document.getElementById("doing").innerText = "";
    document.getElementById("done").innerText = "";
    localStorage.setItem("todo", "");
    localStorage.setItem("doing", "");
    localStorage.setItem("done", "");
  } else {
    window.alert("UFA, seus dados não foram deletados!");
  }
}

//Fechar a caixa de aviso ao clicar e aumentar a altura das caixas de texto
function dismiss() {
  document.getElementById("alert").remove();
  document.getElementById("todo").style.height = "370px";
  document.getElementById("doing").style.height = "370px";
  document.getElementById("done").style.height = "370px";
  localStorage.setItem("hideDialogBox", "yes");
}

function markEverythingAsDone() {
  //window.alert("Função ainda não implementada nesta versão!");
  let shouldMakeEverythingAsDone = confirm(
    "Deseja realmente marcar todas as tarefas como concluídas?"
  );

  if (shouldMakeEverythingAsDone) {
    let textToMarkAsDone = document.getElementById("todo").innerText;
    document.getElementById("todo").innerText = "";
    textToMarkAsDone += "\n" + document.getElementById("doing").innerText;
    document.getElementById("doing").innerText = "";
    document.getElementById("done").innerText += "\n" + textToMarkAsDone;
  }
}

function changelog() {
  window.alert(
    "CHANGELOG DA VERSÃO: \n1-Fonte mudada para JetBrains Mono" +
    "\n2-Botão marcar tudo como concluído." + 
    "\n3-A caixa de diálogo agora pode ser escondida permanentemente."
  );
}

window.onload = function () {
  loadData();
  //window.alert("ESSA É UMA VERSÃO BETA E, PORTANTO, PODE NÃO FUNCIONAR COMO ESPERADO. NÃO USE ESTE APP PARA GUARDAR INFORMAÇÕES IMPORTANTES ATÉ QUE ESTEJA ESTÁVEL!!!");

  if(localStorage.getItem("hideDialogBox") == "yes")
    dismiss();
};
