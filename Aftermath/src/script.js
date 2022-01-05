function aboutPanel() {
  window.alert(
    "ProjectAftermath. Versão 1.0.3 UPDATE 1. Desenvolvido por André Pereira(@Redwars22) usando HTML, CSS, Fluent UI e JavaScript."
  );
}

function helpPage() {
  let choice = confirm(
    "Você será redirecionado para a página de ajuda do ProjectAftermath. Quaisquer alterações não salvas serão perdidas. Deseja prosseguir?"
  );
  if(choice)
    window.location = "pages/help.html";
}

function sendFeedback() {
  window.location = "mailto:andrewpereira.megabyte@gmail.com";
}

function searchDocumentation() {
  let query = document.getElementById('query').value;
  window.open("https://www.google.com/search?q=" + query);
}
