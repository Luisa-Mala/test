export const getAllCharacter = () => {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((character) => character)
    .catch((error) => console.log(error));
};

export const getCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((character) => character)
    .catch((error) => console.log(error));
};
