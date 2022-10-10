import { useState } from "react"
import Test3 from "./test3"

function Test2({giveProps,giveProps2}){

    const [test2Use,setTestUse] = useState("")


    function givePropsButton(){
        giveProps("test2에서 test1으로 넘겨줌")
    }

    return(
        <div>
            <Test3 giveProps3={giveProps2}></Test3>
            <h1>world</h1>
            <button onClick={givePropsButton}>클릭</button>
        </div>
    )
}

export default Test2