

function Test3({giveProps3}){
    function test3Button(){
        giveProps3("tes3에서 test로 넘기기")
    }
    return(
        <div>
           <button onClick={test3Button}>클릭</button>
        </div>
    )
}

export default Test3