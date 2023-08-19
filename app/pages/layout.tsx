import Styles from './page.module.scss';
import Navbar from '@/components/parts/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'フロントページ | みずさわ',
  description: 'Welcome',
}

export default function pageLayouts({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className={Styles.container}>
      <Navbar />
      <main className={Styles.main}>
        { children }
      </main>
    </div>
  )
}