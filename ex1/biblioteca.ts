import {Book} from './book'
import { User } from './user'
import { Loan } from './loan'

const max_active_loans = 3

export class Library{
    private books: Book[] = []
    private users: User[] = []
    private loans: Loan[] = []


    addBook(books: Book): void{
        this.books.push(books)
    }

    addUser(users: User): void{
        this.users.push(users)
    }

    listAvaibleBooks(){
        return this.books.filter((book) => book.isAvailable())
    }

    listUserLoans(userId: number):Loan[] {
        return this.loans.filter(
            (loan) => loan.user.id === userId && loan.isActive()
        )
    }

    lendBook(userId: number, bookId: number): void{
        const user = this.users.find((u) => u.id === userId)
        if (!user){
            throw new Error ("Usuário não encontrado")
        }


        const book = this.books.find((b) => b.id === bookId)
        if (!book){
            throw new Error ("Livro não encontrado")
        }


        const bookAvaible = book.isAvailable()
        if (!bookAvaible){
            throw new Error ("Livro Emprestado!")
        }

        if (this.listUserLoans(userId).length >= max_active_loans){
            throw new Error ("Limite de Empréstimo atingido")
        }

        const loan = new Loan(book, user)
        this.loans.push(loan)
        book.borrow()
    }

    returnBook(bookId: number): void {
        const loan = this.loans.find(
        (l) => l.book.id === bookId && l.isActive()
    )
        if (!loan) {
            throw new Error("Este livro não está emprestado")
        }

  loan.finish()
  loan.book.giveBack()
}

    listAllBooks(){
        return this.books
    }
}


