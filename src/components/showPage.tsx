
import type {Pages} from "../App.tsx";
import React from "react";
import type {Inputs} from "../App.tsx";
type reactPage = React.Dispatch<React.SetStateAction<Pages>>
type ResultProps= {
setPage: reactPage,
input : Inputs
}
type EnterInfoProps={
    setPage: reactPage,
        setInput:React.Dispatch<React.SetStateAction<Inputs>>,
input : Inputs
}
function Result({setPage,input}:ResultProps) {

    return(
        <div><p>CV</p>
    <ul>
        {Object.entries(input).map(([key, val])=>
            (<li key={key}> {key} : {val} </li>)
        )}
    </ul>
    <button onClick={()=>setPage("enterInfo")}>Edit</button>
    <button onClick={() => setPage("homePage")}>Home</button>

        </div>
    );
}

function EnterInfo({setPage, setInput, input}:EnterInfoProps) {
return(
    <div><p>Enter Your Info</p>
        <div><p>General Info</p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" defaultValue={input.name}/><br/>

        <label htmlFor="sName">Surname</label>
        <input type="text" id="sName" defaultValue={input.surname}/><br/>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" defaultValue={input.email}/><br/>

        <label htmlFor="phNumb">Phone Number</label>
        <input type="number" id="phNumb" defaultValue={input["phone number"]}/><br/>
        {/*<label htmlFor="phNumb">Phone Number</label>*/}
        {/*<input type="text" id="phNumb"/><br/>*/}
</div>
        <button onClick={() => {
             setPage("result");
             setInput({'name': (document.getElementById('name')as HTMLInputElement | null)?.value ?? '',
    surname:  (document.getElementById('sName')as HTMLInputElement | null)?.value ?? '',
        email: (document.getElementById('email')as HTMLInputElement | null)?.value ?? '',
        "phone number": Number((document.getElementById('phNumb')as HTMLInputElement | null)?.value ?? -1) } )

        }}> Generate CV</button>
        <button onClick={() => setPage("homePage")}>Home</button>

    </div>
)
}

function HomePage({setPage}: {"setPage": reactPage }){

    return(
        <div><p>Welcome To CV generator</p>
        <button onClick={()=>setPage("enterInfo")}> new CV </button>
        <button onClick={() => setPage("homePage")}>Home</button>

        </div>
    )
}
export {HomePage, EnterInfo,Result};