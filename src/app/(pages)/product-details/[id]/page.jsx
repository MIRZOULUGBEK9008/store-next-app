import Link from "next/link";

function ProductDetails({ params }) {
  return (
    <section className="base-container py-10">
      <Link className="btn btn-outline mb-5" href="/">
        Back
      </Link>
      <h2 className="base-title capitalize">Product details</h2>
      <span>
        <strong>ID:</strong>
        {params.id}
      </span>
    </section>
  );
}

export default ProductDetails;
