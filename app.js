const books = require('./database')

const readline = require('readline-sync');
const initialEntry = readline.question('Deseja buscar um livro? S/N')

//  Se sim, mostra as categorias disponiveis, pergunta qual categoria escolhe 
// Se não, mostra todods os livros em ordem crescente pela quantidade de páginas

if(initialEntry.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ');

    console.log('Filosofia', '/Programação', '/Suspense');

    const categoryEntry = readline.question('Qual categoria vc escolhe?')

    const answer = books.filter(book => book.category === categoryEntry)
    
    console.table(answer);
} else {
    
    const ordenedBooks = books.sort(( a, b ) => a.pages - b.pages)
    console.log('Esses são todos os níveis disponíveis:');
    console.table(ordenedBooks);
}