
function validaFaleConosco(){
    if(document.frmfaleconosco.txtnome.value==""){
        alert("Preencha o campo Nome.");
        document.frmfaleconosco.textnome.focus();
        return false;
    }

    if(document.frmfaleconosco.txtfone.value==""){
        alert("Preencha o seu número de telefone");
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
