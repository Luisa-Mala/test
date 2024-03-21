import { useEffect, useState } from "react";
import { useParams } from "react-router";
import OutlinedCard from "../Components/Card/card";
import { Header } from "../Components/Header/Header";
import { Button } from "@mui/material";
import { IconLike } from "../Elements/Icons/Like";
import { useGetLocalCharacter, useGetCharacterById } from "../Utils/Hooks";
import { Loading } from "../Elements/Loading/Loading";
import { Link } from "react-router-dom";

export const Character = () => {
  let { characterId } = useParams();
  const [isActive, setIsActive] = useState(false);

  const { character } = useGetCharacterById(characterId);
  const { item } = useGetLocalCharacter(characterId);

  useEffect(() => {
    setIsActive(item);
  }, [item]);

  const saveCharacter = (id) => {
    localStorage.setItem(id, "characterID");
    setIsActive(true);
  };
  const removeCharacter = (id) => {
    localStorage.removeItem(id);
    setIsActive(false);
  };

  return (
    <>
      <Header />
      <Loading />
      <div className="back">
        <Link to="/">
          <p>Back</p>
        </Link>
      </div>

      <section className="character">
        {character ? (
          <OutlinedCard data={character} large>
            <Button
              onClick={() => {
                !isActive
                  ? saveCharacter(characterId)
                  : removeCharacter(characterId);
              }}
            >
              <IconLike isActive={isActive} />
            </Button>
          </OutlinedCard>
        ) : (
          <p>Character not found..</p>
        )}
      </section>
    </>
  );
};
