import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { styled } from 'linaria/react'
import { FilmsAtom } from '../atoms/Atoms'


const TableLayout = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 1rem;
  width: 80%;
`

const TableHeader = styled.th`
  background-color: #333;
  color: whitesmoke;
  height: 2rem;
  width: 8rem;
  text-align: left;
  padding: 10px;

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`

const TableRow = styled.tr`
  &:not(:last-child) {
    td {
      border-bottom: 2px solid #333;
    }
  }

  &:last-child {
    td:first-child,
    td:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
`

const TableCell = styled.td`
  color: #222;
  font-weight: 500;
  padding: 10px;
`

const ButtonContainer = styled.div`
  margin: 1rem 0 5rem 0;
`

const Button = styled.button`
  cursor: pointer;
  background-color: #0061c2;
  color: whitesmoke;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  width: 5.5rem;
  height: 3rem;
  font-size: 2rem;
  margin: 0 0.25rem;
`


export const Table = () => {
  const router = useRouter()
  const films = useRecoilValue(FilmsAtom)

  const offset = Number(router.query.offset)
  const offsetAmount = 10


  const handleNext = () => {
    router.push({
      pathname: router.pathname,
      query: { offset: (offset || 0) + offsetAmount }
    })
  }

  const handlePrev = () => {
    if (offset > 0) {
      router.push({
        pathname: router.pathname,
        query: { offset: (offset - offsetAmount) < 0 ? 0 : (offset - offsetAmount) }
      })
    }
  }


  return (
    <>
    <TableLayout>
      <thead>
        <tr>
          <TableHeader>Title</TableHeader>
          <TableHeader>Description</TableHeader>
          <TableHeader>Release Year</TableHeader>
          <TableHeader>Length</TableHeader>
          <TableHeader>Rating</TableHeader>
        </tr>
      </thead>
      <tbody>
        {films?.map(({ film_id, title, description, release_year, length, rating }) =>
          <TableRow key={film_id}>
            <TableCell>{title}</TableCell>
            <TableCell>{description}</TableCell>
            <TableCell>{release_year}</TableCell>
            <TableCell>{length} mins</TableCell>
            <TableCell>{rating}</TableCell>
          </TableRow>
        )}
      </tbody>
    </TableLayout>
    <ButtonContainer>
      <Button onClick={handlePrev}>{'<'}</Button>
      <Button onClick={handleNext}>{'>'}</Button>
    </ButtonContainer>
    </>
  )
}
