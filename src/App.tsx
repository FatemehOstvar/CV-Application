import {useState} from "react";
import {HomePage} from "./components/showPage"
import {EnterInfo} from "./components/showPage"
import {Result} from "./components/showPage"
     export type Pages = "homePage" | "enterInfo" | "result"
export function App() {
    const [page, setPage] = useState<Pages>('homePage')
    return (
        <>
            {(page === "homePage") ?
                (<HomePage setPage={setPage}/>) :
                (page === "enterInfo") ?
                    (<EnterInfo setPage={setPage}/>) :
   (<Result setPage={setPage}/>)
            }
        </>
    )
}