import { json } from "@remix-run/node";
import type { User } from './api-types';



export const getUsers = async () => {
  const response = await fetch('https://dummyjson.com/users');
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