import React, { useState } from "react";
import "./style.css";
import CustomButton from "../Button";
import CustomInput from "../Input";
import {toast} from "react-toastify";
import SelectAutoWidth from "../Select";

export default function Main() {
  const [novaTarefa, setNovaTarefa] = useState("Gasto1");
  const [valorCadastro, setValorCadastro] = useState(100);

  const handleTarefaChange = (e) => setNovaTarefa(e.target.value);
  const handleValorChange = (e) => setValorCadastro(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!novaTarefa.trim()) {
      toast.error('A descrição do gasto não pode estar vazia!');
      return;
    }

    if (!valorCadastro.trim() || isNaN(valorCadastro)) {
      toast.error('O valor precisa ser um número válido!');
      return;
    }
    const tarefasExistentes = JSON.parse(localStorage.getItem('tarefas')) || [];
    const novaLista = [...tarefasExistentes, { descricao: novaTarefa, valor: valorCadastro }];

    localStorage.setItem('tarefas', JSON.stringify(novaLista));

    toast.success('Gasto cadastrado com sucesso!');

    setNovaTarefa("");
    setValorCadastro("");
  };

  const handleCancel = () => {
    setNovaTarefa("");
    setValorCadastro("");
  };

  return (
    <div className="main-component">
      <div className="title">
        <h1>Planilha de Gastos</h1>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs-container">
          <CustomInput
            label="Cadastre seu Gasto"
            placeholder="Descrição"
            color="primary"
            value={novaTarefa}
            onChange={handleTarefaChange}
            onlyNumbers={false}
          />

          <CustomInput
            label="Cadastre o valor"
            placeholder="R$"
            color="primary"
            value={valorCadastro}
            onChange={handleValorChange}
            onlyNumbers={true}
          />
          <SelectAutoWidth />
        </div>

        <div className="button-container">
          <CustomButton
            text="Cancelar"
            variant="outlined"
            color="michas"
            onClick={handleCancel}
          />
          <CustomButton
            variant="outlined"
            text="Enviar"
            color="roxo"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
