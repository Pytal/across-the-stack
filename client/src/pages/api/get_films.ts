import got from 'got'
import type { NextApiHandler } from 'next'
import type { Film } from '../../types'


const getFilms: NextApiHandler = async (req, res) => {
  const offset = Number(req.query.offset)

  const json: Film[] = await got.get(
    `${process.env.API_ENDPOINT}/film`,
    {
      searchParams:
      {
        order: 'last_update.desc',
        offset
      }
    }
  ).json()

  res.json(json)
}

export default getFilms
