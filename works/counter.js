let count = 1000
let cps = 0
function producer(price,cps){
    this.price = price
    this.cps = cps
    this.num = 0
}
let cursor = new producer(20,1)
let BBA = new producer(100,10)
const countUp = () =>{
    count++
}
const changeCps =()=>{
    cps = mult(cursor)+mult(BBA)
    let Ecps = document.getElementById("cps")
    Ecps.innerText=cps + " count-per-second"
}
const mult =(ele)=>{
    return ele.cps*ele.num
}

const buyCursor = () =>{
    if(count>=cursor.price){
        count-=cursor.price
        cursor.price +=20
        cursor.num++
        let EnC = document.getElementById("numCursor")
        let EpC = document.getElementById("priceCursor")
        EnC.innerText = cursor.num + " "
        EpC.innerText = cursor.price + " count"

        changeCps()
    }
}
const buyBBA = () =>{
    if(count>=BBA.price){
        count-=BBA.price
        BBA.price +=100
        BBA.num++
        let EnB = document.getElementById("numBBA")
        let EpB = document.getElementById("priceBBA")
        EnB.innerText = BBA.num + " "
        EpB.innerText = BBA.price + " count"
        changeCps()
    }
}
const exertCps = ()=>{
    const countElement = document.getElementById('count')
    countElement.innerText = "回数:　" + count
    count += cps/10
    count *= 10
    count = Math.floor(count)
    count /= 10
}

const inter=()=>{
    setInterval(exertCps,100)
}