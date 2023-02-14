export type Comment = {
  id: string;
  text: string;
  author: string;
  avatar: string | null;
  date: Date | number;
  rating: number;
  hidden: boolean;
};

export enum LoadingState {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error'
}
