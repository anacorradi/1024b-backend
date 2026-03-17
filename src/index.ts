
const x1 = 10
const vetor1:number[] = [0,1,2,3,4,5,6,7,8,9]
vetor1[0] = 10


//const asdfg = [10,1,2,3,4,5,6,7,8,9]

//asdfasdg = [0,1,2,3,4,5,6,7,8,9]

let vetor2:number[] = [1,2,3,4,5,6,7,8,9]
vetor2 = [0,1,2,3,4,5,6,7,8,9]

const outraLetra: {id:number;nome:string;idade:number}[] = [
    {id:1,nome:"marcelo",idade:18}
]


//funções em javascript/typescript

//oq é uma função?

/**
 * um bloco de código que pode ser reutilizado, e que tem um nome, e que pode receber parâmetros, e que pode retornar um valor
 * (tarefa é uma sequencia de ações que devem ser executadas para alcançar um objetivo)
 * beneficios: não repetir código
 


function nomeFuncao(valor: number): number{
    return valor * 2
}

const f = nomeFuncao
const f3 = f(10)
const f2 = nomeFuncao(10)

console.log("o valor de x é: " + f2)
console.log("o valor de x é: " + f3.toString())
*/

//termine essa função para que ela retorne a soma de todos os elementos do vetor

//somavetor([1,2,3]) => 6
//somavetor([1,2,3,4]) => 10
function somavetor(vetor: number[]): number{
    let soma = 0;
    for (let i = 0; i < vetor.length; i++){
        const element = vetor[i];
        soma = soma + element!
    }
    return soma}

    //2 - some as posiçôes de um vetor que são pares
    //somaPares([1,2,3,4]) => 6
    //somaPares([6,2,3,4,5,6]) => 12        

function somaPares(vetor: number[]): number{
    let soma = 0;
    for (let i = 0; i < vetor.length; i++){
        const element = vetor[i];
        if (i % 2 === 0){
            soma = soma + element!
        }
    }
    return soma}
   

    /**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código
function criaNovoVetor(vetor: number[], valor1: number, valor2: number): number[] {
    let novoVetor: number[] = [...vetor, valor1, valor2];
    return novoVetor;
}                   

//Fim do seu código

/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código
function divisivelPor11(min: number, max: number): number[] {
    let divisiveis: number[] = [];
    for (let i = min; i <= max; i++) {
        if (i % 11 === 0) {
            divisiveis.push(i);
        }
    }
    return divisiveis;
}
//Fim do seu código


/**
 *  Exercício 03 - maioresDeIdade
 * Nome da função - maioresDeIdade
 * Crie uma função que retorna um array com os objetos com idade maior que 18
 * @param {vetor:Pessoa[]} vetor Vetor de objetos com id, nome e idade
 * @returns {Pessoa[]} Retorna um array com os objetos com idade maior que 18
 * @example
 * 
 * const pessoa1 = {id: 1, nome: 'João', idade: 20}
 * const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
 * const pessoa3 = {id: 3, nome: 'José', idade: 17}
 * maioresDeIdade([pessoa1, pessoa2, pessoa3]) // [pessoa1, pessoa2]
 */
interface Pessoa{
    id: number,
    nome: string,
    idade: number
}

//Início do seu código
function maioresDeIdade(vetor: Pessoa[]): Pessoa[] {
    let maiores: Pessoa[] = [];
    for (const pessoa of vetor) {
        if (pessoa.idade >= 18) {
            maiores.push(pessoa);
        }
    }
    return maiores;
}
//Fim do seu código

/**
 * Exercício 04 - resolve equação
 * Nome da função - resolveEquacao
 * Crie uma função que retorne os pontos em Y a partir de um vetor dos pontos em X da equação y = x^2 + 2x + 6
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 * @example
 * resolveEquacao([1, 2, 3]) // [9, 14, 21]
 */

//Início do seu código
function resolveEquacao(vetor: number[]): number[] {
    let pontosY: number[] = []; 
    for (const x of vetor) {
        const y = x ** 2 + 2 * x + 6;
        pontosY.push(y);
    }  
    return pontosY;
} 
//Fim do seu código

/**
 * Exercício 05 - Calcular fatorial de um número
 * Nome da função - calcularFatorial
 * Crie uma função que calcule o fatorial de um número inteiro não negativo.
 * @param {number} num Número para cálculo do fatorial
 * @returns {number} Retorna o resultado do fatorial
 * @example
 * calcularFatorial(5) // 120
 * calcularFatorial(0) // 1
 */
//Início do seu código
function calcularFatorial(num: number): number {
    let fatorial: number = 1;

    for (let i: number = 1; i <= num; i++) {
        fatorial = fatorial * i;
    }

    return fatorial;
}
//Fim do seu código

/**
 * Exercício 06 - Encontrar o menor número em um array
 * Nome da função - encontrarMenorNumero
 * Crie uma função que percorra um array de números e retorne o menor valor encontrado.
 * @param {number[]} vetor Array de números
 * @returns {number} Retorna o menor número presente no array
 * @example
 * encontrarMenorNumero([3, 1, 5, 2, 4]) // 1
 * encontrarMenorNumero([-3, -1, -5]) // -5
 */

//Início do seu código
function encontrarMenorNumero(vetor: number[]): number {
    let menor: number = vetor[0];

    for (let i: number = 1; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }

    return menor;
}
//Fim do seu código


/**
 * Exercício 07 - Calcular o maior entre dois números
 * Nome da função - calcularMaior
 * Crie uma função que receba dois números e retorne o maior deles.
 * @param {number} a Primeiro número
 * @param {number} b Segundo número
 * @returns {number} Retorna o maior dos dois valores
 * @example
 * calcularMaior(2, 3) // 3
 * calcularMaior(5, 1) // 5
 */

//Início do seu código
function calcularMaior(a: number, b: number): number {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
//Fim do seu código

/**
 * Exercício 08 - Concatenar duas strings
 * Nome da função - concatenarStrings
 * Crie uma função que receba duas strings e as retorne unidas em uma única string.
 * @param {string} s1 Primeira string
 * @param {string} s2 Segunda string
 * @returns {string} Retorna as duas strings concatenadas
 * @example
 * concatenarStrings('Olá, ', 'mundo!') // 'Olá, mundo!'
 * concatenarStrings('123', '456') // '123456'
 */

//Início do seu código
function concatenarStrings(s1: string, s2: string): string {
    return s1 + s2;
}
//Fim do seu código



/**
 * Exercício 09 - Inverte a ordem dos caracteres de uma string
 * Nome da função - inverteString
 * Crie uma função que receba uma string e retorne essa string com os caracteres em ordem inversa.
 * @param {string} str A string que será invertida
 * @returns {string} Retorna a string com os caracteres em ordem inversa
 * @example
 * inverteString("hello") // "olleh"
 * inverteString("abcdef") // "fedcba"
 */ 

// Início do seu código
function inverteString(str: string): string {
    let resultado: string = "";

    for (let i: number = str.length - 1; i >= 0; i--) {
        resultado = resultado + str[i];
    }

    return resultado;
}
// Fim do seu código

/**
 * Exercício 10 - Contagem de vogais
 * Nome da função - contaVogais
 * Crie uma função que receba uma string e retorne a quantidade de vogais presentes na string.
 * @param {string} str A string que será analisada
 * @returns {number} Retorna a quantidade de vogais na string
 * @example
 * contaVogais("hello") // 2
 * contaVogais("abcdef") // 2
 */

// Início do seu código
function contaVogais(str: string): number {
    let contador: number = 0;

    for (let i: number = 0; i < str.length; i++) {
        if (
            str[i] === "a" || str[i] === "e" || str[i] === "i" ||
            str[i] === "o" || str[i] === "u" ||
            str[i] === "A" || str[i] === "E" || str[i] === "I" ||
            str[i] === "O" || str[i] === "U"
        ) {
            contador++;
        }
    }

    return contador;
}
// Fim do seu código

/**
 * Exercício 11 - divisivelPor7Ou9
 * Nome da função - divisivelPor7Ou9
 * Crie uma função que retorna um array com os números divisíveis por 7 ou por 9 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 7 ou por 9 no intervalo
 * @example
 * divisivelPor7Ou9(1, 50) // [7, 9, 14, 18, 21, 27, 28, 35, 36, 42, 45, 49]
 * divisivelPor7Ou9(7, 70) // [7, 9, 14, 18, 21, 27, 28, 35, 36, 42, 45, 49, 54, 56, 63, 70]
 */

//Início do seu código
function divisivelPor7Ou9(min: number, max: number): number[] {
    let resultado: number[] = [];

    for (let i: number = min; i <= max; i++) {
        if (i % 7 === 0 || i % 9 === 0) {
            resultado.push(i);
        }
    }

    return resultado;
}
//Fim do seu código

/**
 * Exercício 12 - Contagem de consoantes
 * Nome da função - contaConsoantes
 * Crie uma função que receba uma string e retorne a quantidade de consoantes presentes na string.
 * @param {string} str A string que será analisada
 * @returns {number} Retorna a quantidade de consoantes na string
 * @example
 * contaConsoantes("hello") // 3
 * contaConsoantes("abcdef") // 4
 */

// Início do seu código
function contaConsoantes(str: string): number {
    let contador: number = 0;

    for (let i: number = 0; i < str.length; i++) {
        let letra: string = str[i];

        if (
            letra !== "a" && letra !== "e" && letra !== "i" &&
            letra !== "o" && letra !== "u" &&
            letra !== "A" && letra !== "E" && letra !== "I" &&
            letra !== "O" && letra !== "U"
        ) {
            contador++;
        }
    }

    return contador;
}
// Fim do seu código