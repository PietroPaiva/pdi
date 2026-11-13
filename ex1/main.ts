import { Book } from "./book"
import { User } from "./user"
import { Loan } from "./loan"
import {Library} from "./biblioteca"

const b1 = new Book(1, "Casos", "Pietro");
const u1 = new User(12, "Jorge");

const emprestimo = new Loan(b1, u1);
console.log(emprestimo.isActive()); 

emprestimo.finish();
console.log(emprestimo.isActive());

const v1 = new Library()

const b2 = new Book(2, "Dom", "Pietr")

v1.addBook(b1)
v1.addBook(b2)

console.log(v1.listAllBooks())
console.log(v1.listAvaibleBooks())

const u2 = new User(13, "Maria")
v1.addUser(u1)
v1.addUser(u2)

v1.lendBook(12, 1)
console.log(v1.listAvaibleBooks())        
console.log(v1.listUserLoans(12).length)  


try {
  v1.lendBook(13, 1)
} catch (erro) {
  console.log((erro as Error).message)
}


try {
  v1.lendBook(12, 999)
} catch (erro) {
  console.log((erro as Error).message)
}


v1.returnBook(1)
console.log(v1.listAvaibleBooks())
console.log(v1.listUserLoans(12).length)

try {
  v1.returnBook(1)
} catch (erro) {
  console.log((erro as Error).message) 
}