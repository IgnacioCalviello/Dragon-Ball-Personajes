import { Link } from "wouter";

export default function Card({ name, description, image, ki, id }) {
  return (
    <article className="bg-base-100 shadow-sm w-96 h-60 flex justify-between rounded">
      <div className="min-w-36">
        <img
          src={image}
          alt={name + "'s photo"}
          className="w-full h-full   object-center object-contain hover:scale-110 transition"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {name} {ki}
        </h2>
        <p className="max-h-28 overflow-y-scroll">{description}</p>
        <div className="justify-end self-end">
          <Link href={`/personajes/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </article>
  );
}
