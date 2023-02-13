export type Comment = {
  id: string;
  text: string;
  author: string;
  avatar: string | null;
  date: Date;
  rating: number;
  hidden: boolean;
};
