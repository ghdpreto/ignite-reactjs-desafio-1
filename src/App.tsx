import { Busca } from "./components/Busca";
import { Header } from "./components/Header";

import styles from "./App.module.scss";
import "./global.scss";
import { Contador } from "./components/Contador";
import { Tarefa } from "./components/Tarefa";
import semTarefaSvg from "./assets/sem-tarefa.svg";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Busca />
        <main className={styles.main}>
          <Contador />
          <div className={styles.lista}>
            <div className={styles.semTarefa}>
              <img src={semTarefaSvg} alt="Sem tarefa" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <strong>Crie tarefas e organize seus itens a fazer</strong>
            </div>
            <Tarefa />
            <Tarefa />
          </div>
        </main>
      </div>
    </>
  );
}
