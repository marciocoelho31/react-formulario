import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import { Container, Typography } from '@mui/material';
import 'fontsource-roboto';

import { validaCpf, validaSenha } from "./models/validacoes-cadastro";
import ValidacoesCadastro from './contexts/ValidacoesCadastroProvider';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>

        {/* PROVEDOR DE CONTEXTO: */}
        {/* 1a chave { = abrindo codigo JS     //     2a chave { = abrindo OBJETO JS */}
        <ValidacoesCadastro.Provider value={{ cpf: validaCpf, senha: validaSenha }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>

      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
