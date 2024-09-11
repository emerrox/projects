const $d = document
lista = $d.getElementById('pokemons')

function ajax(options) {
    let {url,method,fSuccess,fError,data}=options
    fetch (url,{
        method:method||"GET",
        headers:{"Content-type":"application/json; charset=utf-8"},
        body:JSON.stringify(data)
    })
    .then(resp=>resp.json())
    .then(json=>fSuccess(json))
    .catch(err=>{
        let error={
            status:err.status,
            statusText:err.statusText||"Ocurrio un error"
        }
        fError(error)
    })
}

function getPokemons(num) {
    for (let i = 1; i <= num; i++) {
        ajax({
            url:'https://pokeapi.co/api/v2/pokemon/' + i,
            fSuccess:json=>{
                console.log(json);
                lista.innerHTML+=`<img src="${json.sprites.front_default}" /><div class="pkm">${json.id} ${json.name}</div>`
            },
            fError:error=>console.log(error)
        })
    }
}

$d.addEventListener('DOMContentLoaded', ()=>{
    // console.log(lista);
    // lista.innerHTML= Math.floor(Math.random()*10) +1
    getPokemons(5)

})