function about(){
    return(
        "ProjectDékount. Desenvolvido por André Pereira usando HTML, CSS, PHP. Versão 1.0"
    );
}

function help(){
    return(
        ""
    );
}

function dialog(argument){
    if(argument == "help"){
        window.alert(help());
    } else {
        window.alert(about());
    }
}