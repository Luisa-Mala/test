import { useEffect, useState } from "react";
import { getAllCharacter } from "../Api/fetch";
import OutlinedCard from "../Components/Card/card";
import { Header } from "../Components/Header/Header";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let data = await getAllCharacter();
      // SORT ALPHABETICAL ORDER
      setCharacters(data.results.sort((a, b) => a.name.localeCompare(b.name)));
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="characters-grid">
        {characters ? (
          characters.map((item) => (
            <>
              <OutlinedCard data={item} />
            </>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </section>
    </>
  );
};
