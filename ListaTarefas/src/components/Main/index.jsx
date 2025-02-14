import React, { Component } from "react";
import "./style.css";
import CustomButton from "../Button";
import CustomInput from "../Input";

export default class Main extends Component {
  state = {
    novaTarefa: "",
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleClick = () => {
    alert("Tarefa Cadastrada!");
  };

  render() {
    return (
      <div className="main-component">
        <div className="title">
          <h1>Lista de Tarefas</h1>
        </div>
        <form className="form" action="#">
          <CustomInput
            label="Cadastre sua Tarefa"
            placeholder="Bater o ponto"
            color="primary"
          />
          <CustomButton text="Cancelar" variant="outlined" color="michas" />
          <CustomButton
            variant="outlined"
            text="Enviar"
            onClick={this.handleClick}
            color="roxo"
          />
        </form>
      </div>
    );
  }
}
