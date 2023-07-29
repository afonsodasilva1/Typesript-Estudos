//let aluno: [string, number, boolean]
//let aluno: (string | number | boolean)[]

//aluno = ['Afonso', 19, 'true']

//let objecto: Record<string, number | string>
//let objecto: {id:number; selecao: string; grupo: string}

//objecto = {id: 1, selecao: 'Brasil', grupo: 'G'}

/*function soma(num1: number, num2: number) {
    return num1 + num2
}

const soma2 = (a: number, b: number) => a + b;
*/

/*let id: string | number

type Id = string | number

let userId: Id

type Usuario = {id: string, nome: string, data_nascimento: string, password: string}

let user: Usuario*/

interface Usuario{
    nome: string,
    id: number,
    password: string
}
