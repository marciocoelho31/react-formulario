function validaCpf(cpf) {
    if (cpf.length === 11 || cpf === "") {
        return {
            valido: true,
            texto: ""
        };
    }
    else {
        return {
            valido: false,
            texto: "CPF deve ter 11 dígitos"
        };
    }
}

function validaSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
        return {
            valido: false,
            texto: "Senha deve ter entre 4 e 72 dígitos"
        };
    }
    else {
        return {
            valido: true,
            texto: ""
        };
    }
}

export { validaCpf, validaSenha };
