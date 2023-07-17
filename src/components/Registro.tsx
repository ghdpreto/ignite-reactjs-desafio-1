import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from "./Registro.module.scss";

interface RegistroProps {
  onAdicionarTarefa: (conteudo: string) => void;
}

export function Registro({ onAdicionarTarefa }: RegistroProps) {
  const [novaTarefaTexto, setNovaTarefaTexto] = useState("");

  // enviar a tarefa
  function handleNovaTarefa(event: FormEvent) {
    event.preventDefault();
    onAdicionarTarefa(novaTarefaTexto);
    setNovaTarefaTexto("");
  }

  function handleNovaTarefaDigitada(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNovaTarefaTexto(event.target.value);
  }

  function handleTarefaInvalida(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <form onSubmit={handleNovaTarefa} className={styles.registro}>
      <input
        type="text"
        required
        onInvalid={handleTarefaInvalida}
        onChange={handleNovaTarefaDigitada}
        value={novaTarefaTexto}
        placeholder="Adicione uma nova tarefa..."
      />
      <button className={styles.botao} type="submit">
        Criar <PlusCircle size={20} weight="bold" />
      </button>
    </form>
  );
}
