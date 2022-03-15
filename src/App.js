import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import { Container, Typography } from '@mui/material';
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validaCpf={validaCpf} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

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

export default App;
