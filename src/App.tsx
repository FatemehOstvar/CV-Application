import {useState} from "react";
import {HomePage} from "./components/showPage"
import {EnterInfo} from "./components/showPage"
import {Result} from "./components/showPage"
     export type Pages = "homePage" | "enterInfo" | "result"
    const preInput = {"name":"Setareh",
    surname: "O",
        email:"E@gmail.com",
         "phone number": +99244243 }
export type Inputs = typeof preInput
export function App() {
    const [page, setPage] = useState<Pages>('homePage')
const [input, setInput] = useState<Inputs>(preInput)
    return (
        <>
            {(page === "homePage") ?
                (<HomePage setPage={setPage}/>) :
                (page === "enterInfo") ?
                    (<EnterInfo setPage={setPage} setInput ={setInput} input = {input}/>) :
   (<Result setPage={setPage} input={ input}/>)
            }
        </>
    )
}