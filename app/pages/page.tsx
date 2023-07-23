import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pageディレクトリへようこそ | みずな',
  description: 'Welcome',
}

export default function pagesTop() {
  return (
    <div>
      <h2>pagesディレクトリについて</h2>
      <p>このディレクトリは静的なページを格納することを目的としています。</p>
      <p>アプリとかはまた別でディレクトリを切る（あるいはドメインごと分離する）と思います。</p>
    </div>
  )
}