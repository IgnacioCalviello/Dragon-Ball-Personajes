import Card from "../components/card";
import { useQuery } from "../hooks/use-query";
import Layout from "../layouts/layout";
import { getAllPersonajes } from "../services/personajes";

export default function ListPersonajes() {
  const { data: items, isLoading } = useQuery({
    promise: getAllPersonajes,
  });

  if (isLoading) return <p>Cargando...</p>;

  return (
    <Layout>
      <section className="flex flex-wrap gap-3 justify-center">
        {items?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </section>
    </Layout>
  );
}
