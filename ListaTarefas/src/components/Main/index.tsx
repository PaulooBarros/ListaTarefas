import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./style.css";
import CustomButton from "../Button/index.jsx";
import CustomInput from "../Input/index.jsx";
import { toast } from "react-toastify";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Trash2 } from "lucide-react";
import { theme } from "../../Config/theme.js";

const Main: React.FC = () => {
  const [novaTarefa, setNovaTarefa] = useState<string>("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas") || "[]") as string[];
    setTarefas(tarefasSalvas);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setNovaTarefa(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!novaTarefa.trim()) {
      toast.error("A tarefa não pode estar vazia!");
      return;
    }
    const novaLista = [...tarefas, novaTarefa];
    setTarefas(novaLista);
    localStorage.setItem("tarefas", JSON.stringify(novaLista));
    toast.success("Tarefa cadastrada com sucesso!");
    setNovaTarefa("");
  };

  const handleCancel = () => setNovaTarefa("");

  const handleDelete = (index: number) => {
    const novaLista = tarefas.filter((_, i) => i !== index);
    setTarefas(novaLista);
    localStorage.setItem("tarefas", JSON.stringify(novaLista));
    toast.info("Tarefa excluída.");
  };

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

      <TableContainer
        component={Paper}
        sx={{ boxShadow: 4, borderRadius: 2, overflow: "hidden" }}
      >
        <Table
          sx={{
            minWidth: 640,
            backgroundColor: theme.palette.roxo.main,
            "& th": {
              backgroundColor: theme.palette.roxo.main,
              color: theme.palette.roxo.contrastText,
              fontSize: "1.1rem",
            },
            "& td": { fontSize: "1rem" },
          }}
          aria-label="tabela de tarefas"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Tarefa</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tarefas.map((tarefa, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" },
                  "&:nth-of-type(even)": { backgroundColor: "#f0f0f0" },
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{tarefa}</TableCell>
                <TableCell sx={{ cursor: "pointer" }}>
                  <Trash2 onClick={() => handleDelete(index)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Main;
