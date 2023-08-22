export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type User = {
  [k: string]: any
}