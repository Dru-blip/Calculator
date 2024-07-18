
export interface CalculatorContextProps{
    expression:string,
    result:string,
    setExpression:React.Dispatch<React.SetStateAction<string>>,
    setResult:React.Dispatch<React.SetStateAction<string>>
}
export interface ContextProviderProps{
    children:React.ReactNode
}

export interface IButton{
    label:string,
    type:"operator"|"command"|"number"|"decimal"
    opName?:string
}