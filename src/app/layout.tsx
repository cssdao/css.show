import './globals.css';

export const metadata = {
  title: 'CSS DAO',
  description: '成为一个在Web3世界中具有重要影响力的技术性质DAO。我们致力于为Web3生态系统的发展做出贡献，通过技术创新和社区合作，推动Web3的应用和普及。',
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
