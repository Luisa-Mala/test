import OutlinedCard from "../Components/Card/card";
import { Header } from "../Components/Header/Header";
import { Loading } from "../Elements/Loading/Loading";
import { useGetAllCharacter } from "../Utils/Hooks";

export const Home = () => {
  const { characters } = useGetAllCharacter();

  return (
    <>
      <Header />
      <section className="characters-grid">
        <Loading />
        {characters ? (
          characters.map((item, idx) => <OutlinedCard data={item} key={idx} />)
        ) : (
          <p>List not found...</p>
        )}
      </section>
    </>
  );
};
