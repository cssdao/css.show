import { Metadata } from 'next/types';
import './globals.css';

export const metadata: Metadata = {
  title: 'CSS DAO',
  description: '成为一个在Web3世界中具有重要影响力的技术性质DAO。我们致力于为Web3生态系统的发展做出贡献，通过技术创新和社区合作，推动Web3的应用和普及。',
  openGraph: {
    title: 'CSS DAO',
    description: '成为一个在Web3世界中具有重要影响力的技术性质DAO。我们致力于为Web3生态系统的发展做出贡献，通过技术创新和社区合作，推动Web3的应用和普及。',
    url: 'https://css.show',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@cssdao',
    site: '@cssdao',
    description: '成为一个在Web3世界中具有重要影响力的技术性质DAO。我们致力于为Web3生态系统的发展做出贡献，通过技术创新和社区合作，推动Web3的应用和普及。',
  },
  appleWebApp: {
    capable: true,
    title: 'CSS DAO',
    statusBarStyle: 'black-translucent',
  },
  themeColor: '#000000',
  applicationName: 'CSS DAO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
