"use client";
import { useEffect, useState } from 'react';
import { fetchEntityData } from '../../api'; // Adjust the path

const HomePage: React.FC = () => {
  const [entityData, setEntityData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entity = 'characters'; // Replace with the desired entity ('characters', 'boss', 'artifacts', etc.)
        const subEntity = 'albedo'; // Replace with the desired sub-entity if applicable
        const fileName = 'en.json'; // Replace with the desired file name
        const data = await fetchEntityData(entity, subEntity, fileName);
        setEntityData(data);
      } catch (error) {
        console.error('Error fetching entity data:', error);
      } finally {
        setLoading(false); // Whether successful or not, stop loading
      }
    };

    fetchData();
  }, []);

  return (
    <main className="genshin-blue text-center py-8"> {/* Apply Tailwind classes */}
      <div className="container mx-auto">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {entityData && (
          <div className="text-white">
            <p className="mt-4">Here you will find information about the video game "Genshin Impact."</p>
            <div className="genshin-green mt-8">
              <div>
                {/* Display entity data */}
                <p>{JSON.stringify(entityData.name)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default HomePage;