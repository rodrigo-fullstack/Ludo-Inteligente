async function carregarJSON(){
    const res = await fetch("ludo/Questoes.json")
    const data = await res.json();
    return data;
}

let object = "";
carregarJSON().then((obj) => {
    object = obj
    console.log(object[0].pergunta);
});

