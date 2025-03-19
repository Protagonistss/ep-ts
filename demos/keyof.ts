interface Key_T1 {
  name: string
  age: number
}
type Key_T2 =  {
  name: string
  age: number
  sex: string
}

type t = keyof Key_T1 | Key_T2
type t1 = Exclude<keyof Key_T1, never>

enum Key_T3 { a, b, c, d='abc' }
type t3 = keyof Key_T3
type t4 = Key_T3['toString']
