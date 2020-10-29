import ky from 'ky/umd'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { styled } from 'linaria/react'
import { FilmsAtom } from '../atoms/Atoms'
import type { ReactNode } from 'react'
import type { Film } from '../types'


const PageLayout = styled.main`
  :global(body) {
    background-color: whitesmoke;
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface Props {
  children: ReactNode
}


export const Layout = ({ children }: Props) => {
  const router = useRouter()
  const setFilms = useSetRecoilState(FilmsAtom)

  useEffect(() => {
    (async () => {
      const data: Film[] = await ky.get(
        '/api/get_films',
        {
          searchParams:
          {
            offset: Number(router.query.offset) || 0
          }
        }
      ).json()

      setFilms(data)
    })()
  }, [router.query])


  return (
    <PageLayout>
      {children}
    </PageLayout>
  )
}
