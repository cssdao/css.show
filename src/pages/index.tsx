import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { TypographyH1, TypographyH4, TypographyInlineCode, TypographyP } from '@/components/ui/typography'
import { Github, LogOut, MousePointerClick, QrCode, Twitter, User, Wallet } from 'lucide-react'
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Metadata } from 'next/types'
import Head from 'next/head'

const Profile = () => {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected)
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button><Wallet className="mr-2 h-4 w-4" />我的钱包</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>我的钱包</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span className='max-w-full block truncate' title={ensName ?? address}>{ensName ?? address}</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => disconnect()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>断开连接</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  return <Button onClick={() => connect()}><Wallet className="mr-2 h-4 w-4" />连接钱包</Button>
}

const App = () => (
  <>
    <Head>
      <title>CSS DAO</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="成为一个在Web3世界中具有重要影响力的技术性质DAO。我们致力于为Web3生态系统的发展做出贡献，通过技术创新和社区合作，推动Web3的应用和普及。" />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-title' content='CSS DAO' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      <meta name='application-name' content='CSS DAO' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='og:title' content='CSS DAO' />
      <meta name='og:description' content='成为一个在Web3世界中具有重要影响力的技术性质DAO。我们致力于为Web3生态系统的发展做出贡献，通过技术创新和社区合作，推动Web3的应用和普及。' />
      <meta name='og:url' content='https://css.show' />
      <meta name='og:type' content='website' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@cssdao' />
      <meta name='twitter:site' content='@cssdao' />
      <meta name='twitter:title' content='CSS DAO' />
      <meta name='twitter:description' content='成为一个在Web3世界中具有重要影响力的技术性质DAO。我们致力于为Web3生态系统的发展做出贡献，通过技术创新和社区合作，推动Web3的应用和普及。' />
    </Head>
    <main className="relative overflow-hidden">
      <div className="bg-black w-full min-h-screen overflow-hidden relative">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col-reverse md:flex-row items-center justify-center p-4 md:p-8 lg:p-24 xl:p-32 2xl:p-48">
          <div className='absolute top-4 right-4 z-10 flex items-center flex-row justify-start space-x-2'>
            {/* <ThemeBtn /> */}
            <Profile />
          </div>
          <div className='md:mr-4'>
            <div className='flex items-center space-x-2 mb-4'>
              <Link href='https://twitter.com/cssdao'>
                <Button>
                  <Twitter className="mr-2 h-4 w-4" /> @cssdao
                </Button>
              </Link>
              <Link href='https://github.com/cssdao'>
                <Button>
                  <Github className="mr-2 h-4 w-4" /> @cssdao
                </Button>
              </Link>
              <Link href='https://discord.gg/zRaDp3QvNu'>
                <Button>
                  Discord
                </Button>
              </Link>
            </div>
            <h1 className='font-bold text-white text-[48px] sm:text-[68px] leading-tight'>
              <span className='text-[68px] md:text-[88px]'>CSS DAO</span><br />
              开放、透明、<br />协作和创新。
            </h1>
          </div>
          <div className='md:pl-[10%] md:ml-auto mb-6 md:mb-0'>
            <Image
              src="/logo.svg"
              alt="CSS DAO"
              className="w-44 sm:w-400"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative px-4 py-8 md:p-8 lg:p-24 xl:p-32 2xl:p-48">
        <TypographyH1>CSS DAO 是什么？</TypographyH1>
        <TypographyP>
          CSS DAO 的愿景是成为一个在 Web3 世界中具有重要影响力的<TypographyInlineCode>技术性质 DAO</TypographyInlineCode>。<br />
          我们致力于为 Web3 生态系统的发展做出贡献，通过技术创新和社区合作，推动 Web3 的应用和普及。<br /><br />
          我们坚信，Web3 的未来是去中心化、安全、开放和透明的。因此，我们将致力于开发去中心化应用（DApps）、智能合约和其他 Web3 相关技术，为用户提供更加安全、私密和自主的在线体验。我们还将支持和参与 Web3 的标准化工作，以确保 Web3 生态系统的互操作性和可持续性。<br /><br />
          CSS DAO 的核心价值观是开放、透明、协作和创新。我们欢迎各种背景和技术水平的人加入我们的社区，共同探索、学习和创造 Web3 的未来。我们相信，通过 CSS DAO 的努力和不断的创新，可以让 Web3 技术更加完善、普及，推动 Web3 世界的可持续发展。
        </TypographyP>
      </div>

      <div className='relative flex flex-col md:flex-row pb-10'>
        <div className='w-full md:w-1/2 px-4 py-8 md:p-8 lg:p-24 xl:p-32 2xl:p-48 bg-[#f8fcfa]'>
          <TypographyH1>加入我们</TypographyH1>
        </div>
        <div className='w-full md:w-1/2 flex flex-wrap'>
          <Link href='https://twitter.com/cssdao' className='transition ease-in-out hover:scale-110 hover:z-10 w-full block relative md:w-1/2 md:border-r border-b bg-[#f2f4f3] shadow-none hover:bg-[#f8fcfa] hover:shadow-2xl hover:border-[#f8fcfa] border-gray-200 before:block before:pt-[100%]'>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
              <div className='rounded-full bg-blue-500 text-white w-20 h-20 flex flex-col justify-center items-center mb-2'>
                <Twitter className="h-10 w-10" />
              </div>
              <TypographyH4>Twitter @cssdao</TypographyH4>
            </div>
          </Link>
          <Link href='https://github.com/cssdao' className='transition ease-in-out hover:scale-110 hover:z-10 w-full block relative md:w-1/2 border-b bg-[#f2f4f3] shadow-none hover:bg-[#f8fcfa] hover:shadow-2xl hover:border-[#f8fcfa] border-gray-200 before:block before:pt-[100%]'>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
              <div className='rounded-full bg-black text-white w-20 h-20 flex flex-col justify-center items-center mb-2'>
                <Github className="h-10 w-10" />
              </div>
              <TypographyH4>Github @cssdao</TypographyH4>
            </div>
          </Link>
          <Link href='https://discord.gg/zRaDp3QvNu' className='transition ease-in-out hover:scale-110 hover:z-10 w-full block relative md:w-1/2 md:border-r border-b bg-[#f2f4f3] shadow-none hover:bg-[#f8fcfa] hover:shadow-2xl hover:border-[#f8fcfa] border-gray-200 before:block before:pt-[100%]'>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
              <div className='rounded-full bg-blue-600 text-white w-20 h-20 flex flex-col justify-center items-center mb-2'>
                <MousePointerClick className="h-10 w-10" />
              </div>
              <TypographyH4>Discord @cssdao</TypographyH4>
            </div>
          </Link>
          <div className='transition ease-in-out hover:scale-110 hover:z-10 w-full block relative md:w-1/2 bg-[#f2f4f3] shadow-none hover:bg-[#f8fcfa] hover:shadow-2xl before:block before:pt-[100%]'>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
              <div className='rounded-full bg-green-500 text-white w-20 h-20 flex flex-col justify-center items-center mb-2'>
                <QrCode className="h-10 w-10" />
              </div>
              <TypographyH4>微信群 马上就来</TypographyH4>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
)

export default App
