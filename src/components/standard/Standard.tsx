import { useContext } from "react";
import { buttons } from "../../util";
import CalculatorButton from "../CalculatorButton";
import { CalculatorContext } from "../../context"

export default function Standard() {
    const { expression, result } = useContext(CalculatorContext)
    return (
        <div className="p-2 flex items-center h-full">
            <div className="grid grid-cols-1 gap-3 w-full h-full">
                <div className="w-full flex flex-col items-end justify-end">
                    <p className="text-[64px] font-semibold">{expression ? expression : "0"}</p>
                    <p className="text-[56px] font-bold text-gray-500">{result ? result : "0"}</p>
                </div>
                <div className="grid grid-cols-4 gap-5 h-full">
                    {
                        buttons.standard.map((button, index) => (
                            <CalculatorButton button={button} key={index} />
                        ))
                    }
                </div>
            </div>

            <div className="h-full w-[400px]">
                <h1>History</h1>
            </div>

        </div>
    )
}