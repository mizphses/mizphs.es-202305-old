import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Center | みずな',
  description: '資料等ダウンロードセンター',
}

export default function pagesTop() {
  return (
    <div>
      <h2>ダウンロードセンター</h2>
      <p>現在ダウンロード可能な資料はありません。</p>
    </div>
  )
}