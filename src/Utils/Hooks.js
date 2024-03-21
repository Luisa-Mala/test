import { useEffect, useState } from "react";
import { getAllCharacter, getCharacter } from "../Services/fetch";

export function useGetLocalCharacter(id) {
  const [item, setItem] = useState(false);

  useEffect(() => {
    const character = localStorage.getItem(id);
    character ? setItem(true) : setItem(false);
  }, [id]);

  return { item };
}

export function useGetAllCharacter() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const response = await getAllCharacter();
    const { results } = response;
    setCharacters(results.sort((a, b) => a.name.localeCompare(b.name)));
  };

  return { characters };
}

export function useGetCharacterById(id) {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getCharacterId(id);
  }, [id]);

  const getCharacterId = async (id) => {
    const response = await getCharacter(id);
    setCharacter(response);
  };

  return { character };
}
