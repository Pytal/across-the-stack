import got from 'got'
import type { NextApiHandler } from 'next'
import type { Film } from '../../types'


const insertFilm: NextApiHandler = async (req, res) => {
  const data: Film = { ...req.body, language_id: 1 }

  const text = await got.post(
    `${process.env.API_ENDPOINT}/film`,
    {
      headers:
      {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      json: data
    }
  ).text()

  res.send(text)
}

export default insertFilm
