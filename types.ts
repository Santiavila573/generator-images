
export type MessageSender = 'user' | 'bot';

export interface Message {
  id: string;
  sender: MessageSender;
  text?: string;
  imageUrl?: string;
  isLoading?: boolean;
}
