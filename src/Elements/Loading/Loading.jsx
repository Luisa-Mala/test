
import { useEffect, useState } from "react";
import loading from '../../images/loading.gif';

export const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);

  return (
    <div className={`loading ${isLoading && "hide"}`}>
      <img
        alt="loading gif"
        src={loading}       
      />
    </div>
  );
};
