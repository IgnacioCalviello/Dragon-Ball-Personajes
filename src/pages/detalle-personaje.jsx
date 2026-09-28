import { useParams } from "wouter";
import Layout from "../layouts/layout";
import { getOnePersonajeById } from "../services/personajes";
import { useQuery } from "../hooks/use-query";

// HOOK EXCEPTION: Pueden ser llamados (solo en el orden superior) de un custom-hook

export default function DetallePersonaje() {
  const { id } = useParams();

  const { data: personaje } = useQuery({
    promise: () => getOnePersonajeById(id),
  });

  return (
    <Layout>
      <h1>
        Nombre : {personaje?.name}, ki : {personaje?.ki}
      </h1>
    </Layout>
  );
}
