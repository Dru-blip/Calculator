export enum ObjectType {
  NUMBER,
  VECTOR,
  FUNCTION,
}

export interface CalcObject {
  type: ObjectType;
  add(other: CalcObject): CalcObject;
  sub(other: CalcObject): CalcObject;
  mul(other: CalcObject): CalcObject;
  div(other: CalcObject): CalcObject;
  toString():string
}

export class NumberObject implements CalcObject {
  readonly type: ObjectType = ObjectType.NUMBER;
  constructor(private val: number) {}
  add(other: NumberObject): NumberObject {
    return new NumberObject(this.val + other.val);
  }
  sub(other: NumberObject): NumberObject {
    return new NumberObject(this.val - other.val);
  }
  mul(other: NumberObject): NumberObject {
    return new NumberObject(this.val * other.val);
  }
  div(other: NumberObject): NumberObject {
    return new NumberObject(this.val / other.val);
  }
  toString(): string {
    return `${this.val}`
  }
}

export class VectorObject implements CalcObject {
  readonly type: ObjectType = ObjectType.VECTOR;
  add(other: CalcObject): CalcObject {
    throw new Error("Method not implemented.");
  }
  sub(other: CalcObject): CalcObject {
    throw new Error("Method not implemented.");
  }
  mul(other: CalcObject): CalcObject {
    throw new Error("Method not implemented.");
  }
  div(other: CalcObject): CalcObject {
    throw new Error("Method not implemented.");
  }
}
