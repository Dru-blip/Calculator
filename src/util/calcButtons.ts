import { IButton } from "../types"


export const common: IButton[] = [
    { label: "%", type: "operator", opName: "modulo" },
    { label: "CE", type: "command" },
    { label: "C", type: "command" },
    { label: "DEL", type: "command" },
    { label: "1/x", type: "operator", opName: "one division" },
    { label: "x²", type: "operator", opName: "sq" },
    { label: "√x", type: "operator", opName: "sqroot" },
    { label: "÷", type: "operator", opName: "divide" },
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "x", type: "operator", opName: "multiply" },
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "-", type: "operator", opName: "subtract" },
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "+", type: "operator", opName: "add" },
    { label: "+/-", type: "operator", opName: "negate" },
    { label: "0", type: "number" },
    { label: ".", type: "decimal" },
    { label: "=", type: "command", opName: "equals" }
];

export const standard = [...common]