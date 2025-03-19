interface T1 {
  a: string
  c: number
}

interface T2 {
  a: string
  b: string
}

type T3 = T1 & T2
type T4 = keyof T3
type T5 = T3['c']


type U = T1 | T2
type T6 = keyof U