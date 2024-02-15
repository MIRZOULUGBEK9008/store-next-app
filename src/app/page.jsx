import useFetch from "@/hooks/useFetch";
import Products from "./components/Products";

export default async function Home() {
  const products = await useFetch("https://dummyjson.com/products?limit=20");
  return (
    <section className="py-10">
      <div className="base-container">
        <h2 className="base-title">Products</h2>
        <Products products={products} />
      </div>
    </section>
  );
}
