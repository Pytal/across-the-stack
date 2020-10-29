import Link from 'next/link'
import { useRouter } from 'next/router'
import { styled } from 'linaria/react'


const NavLayout = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #004c99e6;
  backdrop-filter: blur(8px);
  height: 4rem;
  margin-bottom: 2rem;
  gap: 0 2rem;
  box-shadow: 0 0 8px 2px rgba(0,0,0,0.3);
`

const StyledLink = styled.a<{ selected: boolean }>`
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: none;
  color: ${({ selected }) => selected ? 'whitesmoke' : '#bababa'};
  transition: color 0.1s ease-in;

  &:hover {
    color: whitesmoke;
  }
`


export const Nav = () => {
  const { pathname } = useRouter()

  return (
    <NavLayout>
      <Link href='/' passHref >
        <StyledLink selected={pathname === '/'}>Home</StyledLink>
      </Link>
      <Link href='/submit' passHref >
        <StyledLink selected={pathname === '/submit'}>Add Film</StyledLink>
      </Link>
    </NavLayout>
  )
}
