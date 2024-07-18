import { Button } from "@mantine/core";
import { IButton } from "../types";
import { useContext } from "react";
import { CalculatorContext } from "../context";
import { create, all } from 'mathjs'
import Engine from "../engine";

const config = {}
const math = create(all, config)


interface Props {
    button: IButton
}

export default function CalculatorButton({ button }: Props) {
    const { expression, setExpression, setResult } = useContext(CalculatorContext)
    const onClick = () => {
        switch (button.type) {
            case "number":
            case "operator": {
                setExpression(expression + button.label)
                break
            }
            case "command": {
                if (button.opName === 'equals') {
                    Engine.run(expression.replace("x","*").replace("÷","/"))
                }
                break
            }
            case "decimal": {
                break
            }
        }
    }
    if (button.opName === 'equals') {
        return <Button onClick={onClick} className="h-full text-2xl font-semibold"  >{button.label}</Button>
    }
    return <Button onClick={onClick} className="h-full text-2xl font-semibold" variant="default" >{button.label}</Button>
}