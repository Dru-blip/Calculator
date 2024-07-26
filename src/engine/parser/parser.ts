import { Lexer, Token, TokenType } from "../lexer";
import { BinaryExpression, Expression, Literal } from "./nodes";

export default class Parser {
  private currentToken: Token | undefined;
  private nextToken: Token | undefined;

  constructor(public lexer: Lexer) {
    this.advance();
    this.advance();
  }

  private advance() {
    this.currentToken = this.nextToken;
    this.nextToken = this.lexer.scanToken();
  }

  private peek() {
    return this.currentToken;
  }

  private check(type: TokenType): boolean {
    if (this.currentToken?.type === type) {
      return true;
    }
    return false;
  }

  public parse() {
    const expr = this.parseExpression();
    return expr;
  }

  private parseExpression(): Expression |null{
    const expr = this.parseTerm();
    return expr;
  }

  private parseTerm(): Expression |null{
    let expr = this.parseFactor();
    while (this.check(TokenType.MINUS) || this.check(TokenType.PLUS)) {
      const operator = this.currentToken!;
      this.advance();
      const right = this.parseFactor();
      expr = new BinaryExpression(operator, expr, right);
    }
    return expr;
  }

  private parseFactor(): Expression|null {
    let expr = this.parseUnary();
    while (this.check(TokenType.SLASH) || this.check(TokenType.ASTERISK)) {
      const operator = this.currentToken!;
      this.advance();
      const right = this.parseUnary();
      expr = new BinaryExpression(operator, expr, right);
    }
    return expr;
  }

  private parseUnary(): Expression|null{
    return this.parseNumber();
  }

  private parseNumber(): Expression|null {
    const literal = this.currentToken!;
    this.advance();
    if(literal.type===TokenType.EOE){
      return null
    }
    return new Literal(literal);
  }
}
