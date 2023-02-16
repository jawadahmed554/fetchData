export default async function fetchData(n: number) {
  const response = await fetch(`https://randomuser.me/api/?page=${n}&results=10`);
  const data = await response.json();
  return data.results;
}
