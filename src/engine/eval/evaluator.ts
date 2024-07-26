import { TokenType } from "../lexer";
import { nodes } from "../parser";
import Visitor from "../visitor";
import { CalcObject, NumberObject } from "./object";

export default class Evaluator implements Visitor {
  visit_literal(node: nodes.Literal): CalcObject {
    return new NumberObject(node.token.literal as number);
  }
  visit_binary(node: nodes.BinaryExpression): CalcObject {
    const left = node.left!.accept(this);
    let right=null;

    if(!node.right){
      right=left
    }else{
      right=node.right.accept(this)
    }

    switch (node.op.type) {
      case TokenType.PLUS: {
        return left.add(right);
      }
      case TokenType.MINUS: {
        return left.sub(right);
      }
      case TokenType.ASTERISK: {
        return left.mul(right);
      }
      case TokenType.SLASH: {
        return left.div(right);
      }
      default: {
        return left;
      }
    }
  }
  visit_unary(node: nodes.UnaryExpression): CalcObject {
    return new NumberObject(0);
  }
}
