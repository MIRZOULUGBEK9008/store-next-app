import Card from "./Card";

export default function Products({ products: { products } }) {
  return (
    <ul className="grid grid-cols-3 gap-8 py-5 max-[1000px]:gap-6 max-[1000px]:grid-cols-2 max-[600px]:gap-4 max-[600px]:grid-cols-1">
      {products.length > 0 &&
        products.map((item) => {
          return <Card cardInfo={item} />;
        })}
    </ul>
  );
}
