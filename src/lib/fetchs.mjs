async function obterDatos() {
    const resposta = await fetch("http://localhost:8000/datos/") 
    const datos = await resposta.json()
    return datos
}

export {
    obterDatos
}