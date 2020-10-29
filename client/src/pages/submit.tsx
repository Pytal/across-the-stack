import Head from 'next/head'
import { Form } from '../components/Form'
import { Table } from '../components/Table'


export default () => {
  return (
    <>
      <Head><title>Add Film</title></Head>
      <Form />
      <Table />
    </>
  )
}
