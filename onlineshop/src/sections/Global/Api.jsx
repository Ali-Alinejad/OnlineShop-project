export default async function FakeApi() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
