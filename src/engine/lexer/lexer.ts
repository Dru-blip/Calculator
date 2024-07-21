import Token, { TokenType } from "./token";

export default class Lexer {
  private currentChar: string = "\0";

  private currentIndex: number = 0;
  constructor(public expression: string) {
    this.advance();
  }

  private advance() {
    if (this.currentIndex >= this.expression.length) {
      this.currentChar = "\0";
    }
    this.currentChar = this.expression[this.currentIndex++];
  }

  private peek(): string {
    return this.currentChar;
  }

  private next(): string | null {
    return this.expression[this.currentIndex + 1];
  }

  private isNumber(char: string) {
    return char !== null && char !== "" && !isNaN(Number(char));
  }

  private scanNumber(): number {
    let num = 0;
    while (this.isNumber(this.currentChar)) {
      num = num * 10 + Number.parseInt(this.currentChar);
      this.advance();
    }
    return num;
  }

  private scanOperator() {
    switch (this.currentChar) {
      case "+": {
        return TokenType.PLUS;
      }
      case "-": {
        return TokenType.MINUS;
      }
      case "*": {
        return TokenType.ASTERISK;
      }
      case "/": {
        return TokenType.SLASH;
      }
    }
  }

  public scanToken(): Token {
    const token = new Token(TokenType.EOE, this.currentChar);
    switch (this.currentChar) {
      case "+":
      case "-":
      case "*":
      case "/": {
        token.type = this.scanOperator()!;
        this.advance();
        break;
      }
      default: {
        if (this.isNumber(this.currentChar)) {
          const num = this.scanNumber();
          token.type = TokenType.NUMBER;
          token.literal = num;
          break;
        }
      }
    }

    return token;
  }
}
