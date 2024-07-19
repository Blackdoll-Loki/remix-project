export type User = {
  id: number; 
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  note?: string;
  favorite?: boolean;
};

export type ContactMutation = {
  id?: string;
  first?: string;
  last?: string;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: boolean;
};

export type ContactObj = {
  contact: ContactMutation
}

type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

type PostsResponse = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};