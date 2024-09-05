export default async function FakeApi() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
