import Lexer from "./lexer";
import { TokenType } from "./token";



export default class Engine{
    static run(expression:string){
        let lexer=new Lexer(expression)
        let token=lexer.scanToken();
        while(token.type!==TokenType.EOE){
            console.log(token)
            token=lexer.scanToken()
        }
    }
}