import { useState, useEffect, FC } from 'react';
import Lottie from 'lottie-react';
import style from './Loader.module.scss';

export const Loader: FC = () => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    // Replace 'your-json-link' with the actual link to your JSON file
    const jsonLink = 'https://lottie.host/ad5176c2-56fe-4ec3-930d-fbe3c2fd43a9/pr4RoH7NUW.json';

    // Fetch the JSON data
    fetch(jsonLink)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error fetching animation data:', error));
  }, []);

  return (
    <div className={style.loaderContainer}>
      <Lottie color='black' animationData={animationData} loop autoplay className={style.loader} />
    </div>
  );
};
