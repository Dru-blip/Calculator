import { CalcObject } from "../eval/object";
import { nodes } from "../parser";

interface Visitor {
  visit_literal(node: nodes.Literal): CalcObject;
  visit_binary(node: nodes.BinaryExpression): CalcObject;
  visit_unary(node: nodes.UnaryExpression): CalcObject;
}

export default Visitor;
