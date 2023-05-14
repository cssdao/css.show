import { Button } from '@/components/ui/button';
import { Github, Mail, Twitter } from 'lucide-react';
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
                Discord
              </Button>
            </Link>
          </div>
          <h1 className='font-bold text-white text-[68px] leading-tight'>
            <span className='text-[88px]'>CSS DAO</span><br />
            开放、透明、<br />协作和创新。
          </h1>
        </div>
        <div className='md:pl-[10%] md:ml-auto mb-6 md:mb-0'>
          <Image
            src="/logo.svg"
            alt="CSS DAO"
            className=""
            width={400}
            height={400}
            priority
          />
        </div>
      </div>

      {/* <div className="relative p-4 md:p-8 lg:p-24">
        
      </div> */}
    </main>
  )
}
