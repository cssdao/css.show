import '@/styles/globals.css'
import '@icon-park/react/styles/index.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { WagmiConfig, createConfig } from 'wagmi'
import {
  configureChains,
} from '@wagmi/core'
import { mainnet, sepolia, zkSyncTestnet, zkSync, hardhat } from '@wagmi/core/chains'
import { publicProvider } from '@wagmi/core/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia, zkSyncTestnet, zkSync, hardhat],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </WagmiConfig>
  )
}
