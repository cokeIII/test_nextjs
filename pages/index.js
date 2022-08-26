import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Kasasma jaroensri</h1>
      <Link href="/page2">
        <a>Page2</a>
      </Link>
    </div>
  );
}
