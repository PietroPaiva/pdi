export class Book{
    private available = true

    constructor(
        public readonly id: number,
        public title: string,
        public author: string
    ){}
    
    public borrow(): void{
        this.available = false
    }

    public giveBack(): void{
        this.available = true
    }

    public isAvailable(): boolean{
        return this.available
    }
}
