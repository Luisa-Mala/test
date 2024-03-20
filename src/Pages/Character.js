import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCharacter } from "../Api/fetch";
import OutlinedCard from "../Components/Card/card";
import { Header } from "../Components/Header/Header";

export const Character = () => {
  let { characterId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    async function fetchData() {
      let data = await getCharacter(characterId);
      setCharacter(data);
    }
    fetchData();
  }, [characterId]);

  return (
    <>
      <Header />
      <section className="character">
        {character ? (
          <OutlinedCard data={character} large />
        ) : (
          <p>Cargando...</p>
        )}
      </section>
    </>
  );
};
