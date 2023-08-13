import Styles from './page.module.scss';
import Navbar from '../components/parts/navbar';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'フロントページ | みずさわ',
  description: 'Welcome',
}

export default function indexPage() {
  return (
    <div className={Styles.container}>
      <Navbar />
      <div className={Styles.main}>
        <main className={Styles.main__inde}>
          <div className={Styles.self_intro}>
            <div>
              <Image src="https://avatars.githubusercontent.com/u/49401718?s=400" alt="Fumi's Icon" width={200} height={200} />
              <h2>尾川 史典</h2>
              <p>Fuminori Ogawa</p>
              <hr />
              <p>中央大学 経済学部</p>
              <p>株式会社CoeFont Marketing</p>
            </div>
          </div>
          <div className={Styles.works}>
            <a href="/pages/about" className={`${Styles.works__item} ${Styles.works__SWItem} ${Styles.intro}`}>
              <div>
                <h2>About</h2>
              </div>
            </a>
            <a href="//zenn.dev/natom_nano" className={`${Styles.works__item} ${Styles.works__smallItem}`}>
              <div>
                <h3>Blog</h3>
                <p>あんまり書いていない</p>
              </div>
            </a>
            <a href="/dlcenter" className={`${Styles.works__item} ${Styles.works__SLItem}`}>
              <div>
                <h2>ダウンロードセンター</h2>
                <p>各種資料や成果物のダウンロードはこちら</p>
              </div>
            </a>
            <a href="//twitter.com/mizphses" className={`${Styles.works__item} ${Styles.works__smallItem} ${Styles.twitter}`}>
              <div>
                <h3>Twitter</h3>
                <p>@mizphses</p>
              </div>
            </a>
            <a href="//github.com/mizphses" className={`${Styles.works__SWItem} ${Styles.github}`}>
              <div>
                <h3>GitHub</h3>
                <p>@mizphses</p>
              </div>
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}