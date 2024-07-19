import { json } from "@remix-run/node";
import type { User } from './api-types';
import type { ContactRecord } from "~/data";

const dummyJSONUsers = 'https://dummyjson.com/users'


export const getUsers = async () => {
  const response = await fetch(dummyJSONUsers);
  const data = await response.json();
  
  return data.users.map((user: User) => ({
    id: user.id.toString(),
    first: user.firstName,
    last: user.lastName,
    avatar: user.image,
    twitter: user.email,
    notes: user.note || '',
    favorite: user.favorite ?? false,
    createdAt: new Date().toISOString(),
  }));
};


export const getUserById = async( id: string): Promise<ContactRecord | null> => {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const user: User | null = await response.json();

  if (!user) {
    return null;
  }

  return {
    id: user.id.toString(),
    first: user.firstName,
    last: user.lastName,
    avatar: user.image,
    twitter: user.email,
    notes: user.note || '',
    favorite: user.favorite ?? false,
    createdAt: new Date().toISOString(),
  };
}


