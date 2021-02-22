export type UsersResponse = {
  content: User[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  avatarUrl: string;
};
