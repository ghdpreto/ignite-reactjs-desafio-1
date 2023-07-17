import { Registro } from "./components/Registro";
import { Header } from "./components/Header";

import styles from "./App.module.scss";
import "./global.scss";
import { Contador } from "./components/Contador";
import { Tarefa } from "./components/Tarefa";
import { ITarefa } from "./interfaces/Tarefa";
import { useState } from "react";

import semTarefaSvg from "./assets/sem-tarefa.svg";

export function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  function concluirTarefa(id: number) {
    const tarefaAtualizada = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, completa: !tarefa.completa };
      }

      return tarefa;
    });

    setTarefas([...tarefaAtualizada]);
  }

  function adicionarTarefa(conteudo: string) {
    const novaTarefa: ITarefa = {
      id: new Date().getTime(),
      completa: false,
      descricao: conteudo,
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  function deletarTarefa(tarefa: ITarefa) {
    const tarefasAtualizda = tarefas.filter((el) => el.id !== tarefa.id);

    setTarefas(tarefasAtualizda);
  }

  const totalDeTarefas = tarefas.length;
  const totalDeTarefaConcluidas = tarefas.filter((el) => el.completa).length;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Registro onAdicionarTarefa={adicionarTarefa} />
        <main className={styles.main}>
          <Contador
            total={totalDeTarefas}
            concluidas={totalDeTarefaConcluidas}
            pendentes={totalDeTarefas}
          />
          <div className={styles.lista}>
            {tarefas.length > 0 ? (
              tarefas.map((tarefa) => {
                return (
                  <Tarefa
                    key={tarefa.id}
                    tarefa={tarefa}
                    onConcluir={concluirTarefa}
                    onDeletar={deletarTarefa}
                  />
                );
              })
            ) : (
              <div className={styles.semTarefa}>
                <img src={semTarefaSvg} alt="Sem tarefa" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <strong>Crie tarefas e organize seus itens a fazer</strong>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
