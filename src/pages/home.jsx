import Layout from "../layouts/layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl text-center mt-2">
        Bienvenido a la APP de Dragon Ball!
      </h1>

      <img
        className="mx-auto w-xl mt-5"
        src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"
        alt="Logo de dragon ball super"
      />
    </Layout>
  );
}
