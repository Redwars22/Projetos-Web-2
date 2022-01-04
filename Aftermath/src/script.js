function aboutPanel() {
  window.alert(
    "ProjectAftermath. Versão 1.0.2 UPDATE 2. Desenvolvido por André Pereira(@Redwars22) usando HTML, CSS, Fluent UI e JavaScript."
  );
}

function helpPage() {
  let choice = confirm(
    "Você será redirecionado para a página de ajuda do ProjectAftermath. Quaisquer alterações não salvas serão perdidas. Deseja prosseguir?"
  );
  if(choice)
    window.location = "pages/help.html";
}

function sendFeedback() {}

function searchDocumentation() {}
