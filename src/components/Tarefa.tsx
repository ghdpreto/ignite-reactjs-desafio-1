import { Trash } from "@phosphor-icons/react";

import styles from "./Tarefa.module.scss";
import { ITarefa } from "../interfaces/Tarefa";
import { ChangeEvent } from "react";

interface TarefaProps {
  tarefa: ITarefa;
  onConcluir: (id: number) => void;
  onDeletar: (tarefa: ITarefa) => void;
}

export function Tarefa({ tarefa, onConcluir, onDeletar }: TarefaProps) {
  function handleConcluir(event: ChangeEvent) {
    onConcluir(Number(event.target.id));
  }

  function handleDeletarTarefa() {
    onDeletar(tarefa);
  }

  return (
    <article className={styles.container}>
      <input
        type="checkbox"
        id={tarefa.id.toString()}
        name={tarefa.id.toString()}
        checked={tarefa.completa}
        onChange={handleConcluir}
      />
      <label htmlFor={tarefa.id.toString()}>{tarefa.descricao}</label>
      <button onClick={handleDeletarTarefa}>
        <Trash size={20} weight="bold" />
      </button>
    </article>
  );
}
