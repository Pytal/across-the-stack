import ky from 'ky/umd'
import { useRouter } from 'next/router'
import { styled } from 'linaria/react'
import type { FormEvent } from 'react'
import type { Film } from '../types'


const Heading = styled.h2`
  margin: 0 0 1rem 0;
`

const FormLayout = styled.form`
  margin-bottom: 1rem;
  width: 80%;
  display: grid;
  grid-auto-flow: column;
`

const Input = styled.input`
  height: 2.5rem;
  min-width: 5rem;
  font-size: 0.9rem;
  padding-left: 0.5rem;
  margin: 0 0.15rem;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: 0 0 0 1px #999999;

  &:focus {
    box-shadow: 0 0 0 2.5px #1C7AD9;
  }
`

const SubmitButton = styled.button`
  display: none;
`


export const Form = () => {
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const [
      { value: title },
      { value: description },
      { value: release_year },
      { value: length },
      { value: rating },
      // @ts-expect-error
    ] = e.target.children

    // @ts-expect-error
    e.target.reset()

    const data: Film = { title, description, release_year, length, rating }
    const text = await ky.post('/api/insert_film', { json: data }).text()

    router.push({ pathname: router.pathname })
  }


  return (
    <>
      <Heading>Add your favourite Film below 👇</Heading>
      <FormLayout onSubmit={handleSubmit}>
        <Input type='text' placeholder='Title' required autoFocus />
        <Input type='text' placeholder='Description' required />
        <Input type='text' placeholder='Release Year' required />
        <Input type='text' placeholder='Length' required />
        <Input type='text' placeholder='Rating' required />
        <SubmitButton type='submit'>+</SubmitButton>
      </FormLayout>
    </>
  )
}
