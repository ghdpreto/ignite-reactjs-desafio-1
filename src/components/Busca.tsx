import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Busca.module.scss";

export function Busca() {
  return (
    <div className={styles.buscar}>
      <input type="text" placeholder="Adicione uma nova tarefa..." />
      <button className={styles.botao} type="button">
        Criar <PlusCircle size={20} weight="bold" />
      </button>
    </div>
  );
}
