import Link from "next/link";

function Card({ cardInfo }) {
  const { title, rating, brand, description, thumbnail, id } = cardInfo;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full object-cover h-[200px]"
          src={thumbnail}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{title}</h2>
        <p className="line-clamp-3">{description}</p>
        <div className="card-actions justify-end mb-5">
          <div className="badge badge-outline">🟊 {rating}</div>
          <div className="badge badge-outline">{brand}</div>
        </div>
        <div className="flex justify-between">
          <Link
            className="btn btn-accent w-2/5"
            href={`/product-details/${id}`}
          >
            Details
          </Link>
          <button className="btn btn-neutral w-2/5">🧺 +</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
