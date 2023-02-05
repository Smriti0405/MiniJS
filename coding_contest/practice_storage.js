
let url = "https://kontests.net/api/v1/all"
let f = fetch(url)

f.then((val1)=>{
    return val1.json()
}).then((val2)=>{
    console.log(val2)
    let str = ""
    for(let i in val2){
        
        str += `
        <div class="card_info">
            <img src="./coding.jpg" alt="">
            <div class="card_body">
                <h3 id="contest_title">${val2[i].name}</h3>
                <h4 id="coding_site">${val2[i].site}</h4>
                <p id="contest_start"><b>Start: </b>${val2[i].start_time}</p>
                <p id="contest_end"><b>End: </b>${val2[i].end_time}</p>
                <p id="contest_day"><b>In 24-hrs: </b>${val2[i].in_24_hours}</p>
                <a href="${val2[i].url}" target="_blank" id="contest_link"><button>Quick Link</button></a>
            </div>
        </div>`
    }
    layout.innerHTML = str
})