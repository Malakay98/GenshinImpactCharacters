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
    <main className="genshin-blue text-center py-8"> {/* Apply Tailwind classes */}
      <div className="container mx-auto">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data &&
          <div className="text-white">
            <h2 className="genshin-font text-3xl">{data.message}</h2>
            <p className="mt-4">Here you will find information about the video game "Genshin Impact."</p>
            <div className="genshin-green mt-8">
              <h3 className="genshin-font text-2xl">Our current data</h3>
              <ul className="mt-4">
                <li><p className="genshin-font">Characters: {data.statistics.characters}</p></li>
                <li><p className="genshin-font">Media: {data.statistics.media}</p></li>
                <li><p className="genshin-font">Voices: {data.statistics.voices}</p></li>
                <li><p className="genshin-font">Banners: {data.statistics.banners}</p></li>
              </ul>
            </div>
          </div>
        }
      </div>
    </main>
  );
};

export default HomePage;