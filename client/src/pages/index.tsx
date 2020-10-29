import Head from 'next/head'
import { styled } from 'linaria/react'
import { Table } from '../components/Table'


const Header = styled.h2`
  margin: 0 0 2rem 0;
`

export default () => {
  return (
    <>
      <Head><title>Home</title></Head>
      <Header>Film Library Listing</Header>
      <Table />
    </>
  )
}
