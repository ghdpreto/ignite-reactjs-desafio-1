import { Trash } from "@phosphor-icons/react";

import styles from "./Tarefa.module.scss";

export function Tarefa() {
  return (
    <article className={styles.container}>
      <input type="checkbox" id="tarefa" name="tarefa" />
      <label htmlFor="tarefa">Conteudo da tarefa</label>
      <button>
        <Trash size={20} weight="bold" />
      </button>
    </article>
  );
}
