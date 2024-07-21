import { CalcObject } from "../eval/object";
import { Token } from "../lexer";
import Visitor from "../visitor";

export interface Expression {
  accept(visitor: Visitor): CalcObject;
}

export class Literal implements Expression {
  constructor(public token: Token) {}
  accept(visitor: Visitor): CalcObject {
    return visitor.visit_literal(this);
  }
}

export class BinaryExpression implements Expression {
  constructor(
    public op: Token,
    public left: Expression,
    public right: Expression,
  ) {}
  accept(visitor: Visitor): CalcObject {
    return visitor.visit_binary(this);
  }
}

export class UnaryExpression implements Expression {
  constructor(
    public op: Token,
    public right: Expression,
  ) {}
  accept(visitor: Visitor): CalcObject {
    return visitor.visit_unary(this);
  }
}
