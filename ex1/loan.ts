import {Book} from "./book"
import {User} from "./user"

export class Loan{
    public readonly loanDate: Date = new Date(); 
    private returnDate: Date | undefined = undefined 

    constructor(
        public readonly book: Book,
        public readonly user: User,
        
    ){}

    public finish(): void {
        this.returnDate = new Date() 
    }

    public isActive(): boolean{
        if (this.returnDate === undefined){
            return true
        } else {
            return false
        }
    } 

}
