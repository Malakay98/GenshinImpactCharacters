// Function to fetch local data
export const fetchEntityData = async (entity: string, subEntity: string, fileName: string): Promise<any> => {
  try {
    const data = await import(`../assets/data/${entity}/${subEntity}/${fileName}`);
    return data.default; // Assuming the data is exported as default in the JSON file
  } catch (error) {
    console.error(`Error fetching ${fileName} data:`, error);
    throw error;
  }
};