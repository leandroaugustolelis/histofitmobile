export type PostsResponse = {
  content: Post[];
};

export type Post = {
  id: string;
  date: Date;
  location: string;
  caption: string;
  photo: string;
  photoUrl: string;
};
