function saveData() {
  let data = document.getElementById("texteditor").innerText;
  localStorage.setItem("textdata", data);
}

function getData() {
  if (localStorage.getItem("textdata") === null) {
    window.alert(
      "ERRO: não há nada salvo para ser aberto ou as informações foram corrompidas!"
    );
  } else {
    document.getElementById("texteditor").innerText =
      localStorage.getItem("textdata");
  }
}

function deleteData() {
  let choice = confirm(
    "Tem certeza de que deseja APAGAR TUDO? Esta ação é IRREVERSÍVEL. Prossiga com CUIDADO!!!"
  );

  if (choice) {
    localStorage.removeItem("textdata");
  } else {
    window.alert(
      "Bem, você desistiu de deletar o arquivo. Seus dados sumiram... mentira, eles estão intactos :)"
    );
  }
}
