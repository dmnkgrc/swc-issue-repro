import { a } from './A'

type B = {
  a: any
}

export const b = {
  a
} as const satisfies B
