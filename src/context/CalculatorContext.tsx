import { createContext, useState } from "react";
import { CalculatorContextProps, ContextProviderProps } from "../types";

const CalculatorContext=createContext<CalculatorContextProps>({} as CalculatorContextProps)


export const CalculatorContextProvider=({children}:ContextProviderProps)=>{
    const [expression,setExpression]=useState<string>("")
    const [result,setResult]=useState<string>("")
    return (
        <CalculatorContext.Provider value={{expression,setExpression,result,setResult}}>
            {children}
        </CalculatorContext.Provider>
    )
}


export default CalculatorContext