export const getCharacter = async (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    console.error(response.statusText);
    return null;
  }

  return await response.json();
};

export const getAllCharacter = async () => {
  const url = `https://rickandmortyapi.com/api/character/`;

  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    console.error(response.statusText);
    return null;
  }

  return await response.json();
};
