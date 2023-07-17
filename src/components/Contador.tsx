import styles from "./Contador.module.scss";

interface ContadorProps {
  total: number;
  concluidas: number;
  pendentes: number;
}

export function Contador({ total, concluidas, pendentes }: ContadorProps) {
  return (
    <div className={styles.contadorBox}>
      <p className={styles.criadas}>
        Tarefas criadas <span className={styles.contador}>{total}</span>
      </p>
      <p className={styles.concluidas}>
        Concluidas
        <span className={styles.contador}>
          {concluidas} de {pendentes}
        </span>
      </p>
    </div>
  );
}
