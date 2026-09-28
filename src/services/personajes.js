import axios from "axios";

const base = axios.create({
  baseURL: "https://dragonball-api.com/api",
});

export const getAllPersonajes = async () => {
  const { data } = await base.get("/characters");
  return data.items;
};

export const getOnePersonajeById = async (id) => {
  const { data } = await base.get(`/characters/${id}`);
  return data;
};
