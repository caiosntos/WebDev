
function validaFaleConosco(){
    if(document.frmfaleconosco.txtnome.value==""){
        alert("Preencha o campo Nome.");
        document.frmfaleconosco.textnome.focus();
        return false;
    }

    if(document.frmfaleconosco.txtfone==""){
        alert("Preencha o seu número de telefone");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }

    if(document.frmfaleconosco.txtmail==""){
        alert("Preencha o seu e-mail");
        document.frmfaleconosco.txtmail.focus();
        return false;
    }

    if(document.frmfaleconosco.selmotivo==""){
        alert("Preencha o motivo");
        document.frmfaleconosco.selmotivo.focus();
        return false;
    }

    if(document.frmfaleconosco.txcomentario==""){
        alert("Preencha o comentário");
        document.frmfaleconosco.txcomentario.focus();
        return false;
    }

    return true;
}
