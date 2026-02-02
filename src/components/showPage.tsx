
import type {Pages} from "../App.tsx";
import React from "react";
type ResultProps= {
setPage: React.Dispatch<React.SetStateAction<Pages>>
}
function Result({setPage}:ResultProps) {

    return(
        <div><p>Welcome To Result</p>
<button onClick={()=>setPage("enterInfo")}>Edit</button>
        </div>
    )
}

function EnterInfo({setPage}:ResultProps) {
return(
        <div><p>Welcome To EnterInfo</p>
<button onClick={()=>setPage("result") }> Generate CV</button>
        </div>
    )
}

function HomePage({setPage}:ResultProps){

    return(
        <div><p>Welcome To CV generator</p>
        <button onClick={()=>setPage("enterInfo")}> new CV </button>
        </div>
    )
}
export {HomePage, EnterInfo,Result};