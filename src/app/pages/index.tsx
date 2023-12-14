"use client";
import { useEffect, useState } from 'react';
import { fetchData } from '../../api'; // Adjust the path

const HomePage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (error) {
        setError('Error fetching data'); // Set a specific error message or handle the error appropriately
      } finally {
        setLoading(false); // Whether successful or not, stop loading
      }
    };

    getData();
  }, []);

  return (
    <main>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data &&
          <div>
            <h2>{data.message}</h2>
            <p>Here you will find information of the videogame "Genshin Impact."</p>
            <div>
              <h3>Our current data</h3>
              <ul>
                <li><p>Characters</p>{data.statistics.characters}</li>
                <li><p>Media</p>{data.statistics.media}</li>
                <li><p>Voices</p>{data.statistics.voices}</li>
                <li><p>Banners</p>{data.statistics.banners}</li>
              </ul>
            </div>
          </div>
        }
      </div>
    </main>
  );
};

export default HomePage;