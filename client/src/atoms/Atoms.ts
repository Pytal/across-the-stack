import { atom } from 'recoil'
import type { Film } from '../types'

export const FilmsAtom = atom<Film[]|null>({
  key: 'Films',
  default: null
})
