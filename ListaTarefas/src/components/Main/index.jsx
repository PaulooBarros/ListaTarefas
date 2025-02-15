import React, { useState } from "react";
import "./style.css";
import CustomButton from "../Button";
import CustomInput from "../Input";
import { ToastContainer, toast } from "react-toastify";

export default function Main() {
  const [novaTarefa, setNovaTarefa] = useState("");

  const handleChange = (e) => setNovaTarefa(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!novaTarefa.trim()) {
      toast.error('A tarefa não pode estar vazia!');
      return;
    }
    const tarefasExistentes = JSON.parse(localStorage.getItem('tarefas')) || [];
    const novaLista = [...tarefasExistentes, novaTarefa];
    localStorage.setItem('tarefas', JSON.stringify(novaLista));
    toast.success('Tarefa cadastrada com sucesso!');
    setNovaTarefa("");
  };

  const handleCancel = () => setNovaTarefa("");

  return (
    <div className="main-component">
      <div className="title">
        <h1>Lista de Tarefas</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <CustomInput
          label="Cadastre sua Tarefa"
          placeholder="Bater o ponto"
          color="primary"
          value={novaTarefa}
          onChange={handleChange}
        />
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
      </form>
    </div>
  );
}
