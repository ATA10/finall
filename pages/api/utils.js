export async function fetchData(file) {
  try {
    const response = await fetch(`/data/${file}.json`);
    if (!response.ok) {
      throw new Error('Veri çekme işlemi başarısız oldu.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    throw error;
  }
}