import { RecoilRoot, } from 'recoil'
import { Nav } from '../components/Nav'
import { Layout } from '../components/Layout'
import type { AppProps } from 'next/app'


export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Nav />
      <RecoilRoot>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  )
}
