
export enum TokenType{
    NUMBER,
    PLUS,
    MINUS,
    ASTERISK,
    SLASH,
    MODULO,
    EOE
}


export default class Token{
    constructor(public type:TokenType,public literal:string|number){}
}