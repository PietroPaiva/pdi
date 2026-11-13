export class User{
    private situation: boolean = true
    private numberLoans: number = 0
    
    constructor(
        public readonly id: number,
        public name: string
    ){}

    viewSituation(){
        return this.situation
    }

    habilitSituation(){
        return this.situation = true
    }
}

