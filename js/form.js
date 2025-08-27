class ContatoForm {
    constructor(c_nome, c_sobrenome, c_email, c_cpf, c_telefone, c_tipoContato){
        this.c_nome = c_nome;
        this.c_sobrenome = c_sobrenome;
        this.c_email = c_email;
        this.c_cpf = c_cpf;
        this.c_telefone = c_telefone;
        this.c_tipoContato = c_tipoContato;
    }
}

function postContato(form) {
    let contatoData = new ContatoForm(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );

    enviarContato(contatoData);
    console.log("Dados enviados:", contatoData);
}

function enviarContato(data) {
    if (data.c_nome != "") {
        alert('Obrigado sr(a) ' + data.c_nome + ', os seus dados foram encaminhados com sucesso.');
    }
}
