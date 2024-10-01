export const getRandomFact = ()=>{
    return fetch('https://catfact.ninja/fact')
    .then((res) => res.json())
    .then((data) => {
      const { fact } = data;
      return fact;
    })
}

export function getCatImgBy3Words(firstWord) {
    return fetch(`https://cataas.com/cat/says/${firstWord}`)
    .then((res) => res.blob())
    .then((data) => {
      const a = URL.createObjectURL(data)
      return a
    });
}