console.log('-----METODO ARRAY.FROM-------')
const myList = [
    { 
        name: "The lord of rings",
        price: 79.90
    }, 
    {
        name: "Cosmos",
        price: 40
    }, 
    {
        name: "Game of thrones",
        price: 85.0
    },
    {
        name: "Dom Casmurro",
        price: 35.90
    }
]
//copia usando from
const bookList = Array.from(myList)
console.table(bookList)
//copia e mapeia usando o from com uma arrow function como argumento
const cheapBooks = Array.from(myList, book => {
    return {...book, isCheap: book.price < 50}
})
console.log('-----cheap books-------')
console.table(cheapBooks)
//copia usando of
console.log('-----METODO ARRAY.OF-------')
const numbers = Array.of(1,2,3,4,5,6,7,8,9)
const copyNumbers = Array.of(...numbers)
console.log(copyNumbers)
