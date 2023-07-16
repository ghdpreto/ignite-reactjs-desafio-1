import styles from "./Contador.module.scss";

export function Contador() {
  return (
    <div className={styles.contadorBox}>
      <p className={styles.criadas}>
        Tarefas criadas <span className={styles.contador}>0</span>
      </p>
      <p className={styles.concluidas}>
        Concluidas <span className={styles.contador}>2 de 5</span>
      </p>
    </div>
  );
}
