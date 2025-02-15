import React, { useState, useEffect } from "react";
import "./style.css";
import CustomButton from "../Button";
import CustomInput from "../Input";
import { toast } from "react-toastify";
import SelectAutoWidth from "../Select";
import { postGasto, fetchAreaGastos } from "../../repositories";

export default function Main() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [valorCadastro, setValorCadastro] = useState("");
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const [options, setOptions] = useState([]);

  // Busca as áreas de gastos usando axios (cliente padrão)
  useEffect(() => {
    fetchAreaGastos()
      .then((data) => setOptions(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  const handleTarefaChange = (e) => setNovaTarefa(e.target.value);
  const handleValorChange = (e) => setValorCadastro(e.target.value);
  const handleAreaChange = (e) => setAreaSelecionada(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Descrição:", novaTarefa);
    console.log("Valor:", valorCadastro);
    console.log("Área Selecionada:", areaSelecionada);
  
    try {
      await postGasto(
        novaTarefa,
        parseFloat(valorCadastro),
        areaSelecionada
      );
      toast.success("Gasto cadastrado com sucesso!");
      setNovaTarefa("");
      setValorCadastro("");
      setAreaSelecionada("");
    } catch (error) {
      toast.error("Erro ao cadastrar gasto");
    }
  };
  

  const handleCancel = () => {
    setNovaTarefa("");
    setValorCadastro("");
    setAreaSelecionada("");
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

          <SelectAutoWidth
            value={areaSelecionada}
            onChange={handleAreaChange}
            options={options}
          />
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
