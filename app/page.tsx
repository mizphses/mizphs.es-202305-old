import Styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'フロントページ | みずな',
  description: 'Welcome',
}

export default function indexPage() {
  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
        <h1 className={Styles.title}>
          みずな
        </h1>
        <p className={Styles.description}>
          みずなのホームページです。 Here is Mizuna Website.
        </p>
      </main>
    </div>
  )
}