import { Button } from '@/components/ui/button';
import { TypographyH1, TypographyInlineCode, TypographyP } from '@/components/ui/typography';
import { Github, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative">
      <div className="bg-black w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center p-4 md:p-8 lg:p-24 xl:p-32 2xl:p-48">
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
                Discord @cssdao
              </Button>
            </Link>
          </div>
          <h1 className='font-bold text-white text-[58px] sm:text-[68px] leading-tight'>
            <span className='text-[78px] md:text-[88px]'>CSS DAO</span><br />
            开放、透明、<br />协作和创新。
          </h1>
        </div>
        <div className='md:pl-[10%] md:ml-auto mb-6 md:mb-0'>
          <Image
            src="/logo.svg"
            alt="CSS DAO"
            className=" w-64 sm:w-400"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>

      <div className="relative p-4 md:p-8 lg:p-24 xl:p-32 2xl:p-48">
        <TypographyH1>CSS DAO 是什么？</TypographyH1>
        <TypographyP>
          CSS DAO 的愿景是成为一个在 Web3 世界中具有重要影响力的<TypographyInlineCode>技术性质 DAO</TypographyInlineCode>。<br />
          我们致力于为 Web3 生态系统的发展做出贡献，通过技术创新和社区合作，推动 Web3 的应用和普及。<br /><br />
          我们坚信，Web3 的未来是去中心化、安全、开放和透明的。因此，我们将致力于开发去中心化应用（DApps）、智能合约和其他 Web3 相关技术，为用户提供更加安全、私密和自主的在线体验。我们还将支持和参与 Web3 的标准化工作，以确保 Web3 生态系统的互操作性和可持续性。<br /><br />
          CSS DAO 的核心价值观是开放、透明、协作和创新。我们欢迎各种背景和技术水平的人加入我们的社区，共同探索、学习和创造 Web3 的未来。我们相信，通过 CSS DAO 的努力和不断的创新，可以让 Web3 技术更加完善、普及，推动 Web3 世界的可持续发展。
        </TypographyP>
      </div>
    </main>
  )
}
