import { Evaluator } from "./eval";
import { Lexer } from "./lexer";
import Parser from "./parser";
import { Expression } from "./parser/nodes";

export default class Engine {
  static run(expression: string) {
    const lexer = new Lexer(expression);
    const parser = new Parser(lexer);
    const evaluator = new Evaluator();
    const root: Expression = parser.parse();
    const result = root.accept(evaluator);
    console.log(result);
  }
}
