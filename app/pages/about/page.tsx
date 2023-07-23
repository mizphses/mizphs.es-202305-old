import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '自己紹介 | みずな',
  description: 'Welcome',
}

export default function pagesTop() {
  return (
    <div>
      <h1>自己紹介</h1>
      <div>
        <Image src="/images/fumi_photo.webp" alt="My photo" width={200} height={230} />
      </div>
      <div>
        <h2>尾川　史典</h2>
        <h3>Fuminori Ogawa</h3>
        <hr />
        <p>岡山出身 / 川崎在住</p>
        <p>中央大学経済学部経済情報システム学科 2021入学/2025卒業見込み</p>
        <p>株式会社CoeFont / Marketing</p>
      </div>
    </div>
  )
}