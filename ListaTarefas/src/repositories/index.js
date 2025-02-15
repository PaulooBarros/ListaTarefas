// repositories.js
import axios from "axios";

export const fetchAreaGastos = async () => {
  const API_URL = "http://localhost:3000/areaGastos";
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar área de gastos:", error);
    throw error;
  }
};

export const postGasto = async (descricao, valor, area) => {
  const API_URL = "http://localhost:3000/gastosCadastrados";
  try {
    const response = await axios.post(API_URL, {
      descricao,
      valor,
      area,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao salvar gasto:", error);
    throw error;
  }
};
