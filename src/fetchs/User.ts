import { User } from "../interfaces/User/User";

const backendURI = import.meta.env.VITE_BACKEND_URI;

export const getUsers = async () => {
  return await fetch(`${backendURI}/users`)
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => console.error(err));
};

export const getUser = async (id: string) => {
  return await fetch(`${backendURI}/users/${id}`)
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => err);
};

export const postUser = async (user: User) => {
  return await fetch(`${backendURI}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  })
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => err);
};

export const updateUser = async (user: User) => {
  return await fetch(`${backendURI}/users`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  })
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => err);
};

export const deleteUser = async (id: string) => {
  return await fetch(`${backendURI}/users/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => err);
};
