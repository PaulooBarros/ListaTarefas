export const fetchAreaGastos = async (httpClient) => {
    const API_URL = 'http://localhost:3000/areaGastos';
    try {
      const response = await httpClient.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar área de gastos:', error);
      throw error;
    }
  };
  