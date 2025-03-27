function validaFaleConosco(){
    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp ("^[A-zÀ-ü]{3,}([]{1}[A-zÀ-ü]){2,}+$");
    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    var fone = document.frmfaleconosco.txtfone.value;
    var exRegFone = RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    if(!exRegFone.test(fone)){
        alert("Preencha o seu número de telefone corretamente.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }

    if(document.frmfaleconosco.txtemail.value==""){
        alert("Preencha o seu e-mail");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }

    if(document.frmfaleconosco.selmotivo.value==""){
        alert("Preencha o motivo");
        document.frmfaleconosco.selmotivo.focus();
        return false;
    }

    if(document.frmfaleconosco.txcomentario.value==""){
        alert("Preencha o comentário");
        document.frmfaleconosco.txcomentario.focus();
        return false;
    }

    if(document.frmfaleconosco.selproduto.value==""){
        alert("Preencha o produto corretamente.");
        document.frmfaleconosco.selproduto.focus();
        return false;
    }

    return true;
}

function verificaMotivo(motivo){
    var elemento = document.getElementById("opcaoProduto");

    if(motivo=="PR"){
        var select = document.createElement("select");
        select.setAttribute("name", "selproduto");

        var option = document.createElement("option");
        option.setAttribute("value", "");

        var texto = document.createTextNode("Escolha");
        option.appendChild(texto);
        select.appendChild(option);

        
        var option = document.createElement("option");
        option.setAttribute("value", "FR");
        var texto = document.createTextNode("Freezer");
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value", "GE");
        var texto = document.createTextNode("Geladeira");
        option.appendChild(texto);
        select.appendChild(option); 

        elemento.appendChild(select);

        
    }else{
        if(elemento.firstChild){
            elemento.removeChild(elemento.firstChild);
        }
    }
}

$(document).ready(function(){
    $("header").load("/ProjetoFrontEnd/pages/sites/general/cabecalho.html");
    $("nav").load("/ProjetoFrontEnd/pages/sites/general/menu.html");
    $("header").load("/ProjetoFrontEnd/pages/sites/general/rodape.html");
});

