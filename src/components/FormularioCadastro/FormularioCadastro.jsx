import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormularioCadastro({ aoEnviar, validaCpf }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  // const arr = useState("");
  // const sobrenome = arr[0];
  // const setSobrenome = arr[1];

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        //console.log(nome, sobrenome, cpf, promocoes, novidades);

        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          // let tmpNome = event.target.value;
          // if (tmpNome.length >= 3) {
          //   tmpNome = tmpNome.substr(0, 3);
          //   //setNome(event.target.value);
          // }
          // // função assincrona, cuidado quando colocar duas uma perto da outra
          // // (assincronicidade da função de atribuição do estado)
          // setNome(tmpNome);
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={(event) => {
          const ehValido = validaCpf(cpf);
          setErros({ cpf: ehValido });
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            checked={promocoes}
            defaultChecked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            checked={novidades}
            defaultChecked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
