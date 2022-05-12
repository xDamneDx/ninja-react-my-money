import { useAuthContext } from "../../hooks/useAuthContext";

// Styles:
import styles from "./Home.module.css";

// Conponents:
import TransactionForm from "./TransactionForm";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction list</div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
