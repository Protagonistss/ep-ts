 const foo = (bar: string) => {
  return bar
 }

 const ret = foo('bar')
 console.log('ret', ret)
let x = 1
const x1 = 2
let x3 = 3 as const
let x4 = x3
type Foo =  {
  name: string
  age: number
  part: string
}

type Bar =  {
  name: string
  age: number
  gender: boolean
}

type FooBar = Omit<Foo | Bar, never>

const fooBar: FooBar = {
  name: 'foo',
  age: 12
}

const enum X {
  UP,
  Down
}

type _x = typeof X

class MyClass {
  a: string = '1'
}

type my = typeof MyClass

function testSome (a: any): a is string  {
  return true
}
console.log(testSome(3))