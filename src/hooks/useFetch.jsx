export default async function useFetch(url) {
  const response = await fetch(url);
  if (response.ok === true && response.status === 200) {
    const data = await response.json();
    return data;
  } else throw new Error("Something went wrong !");
}
