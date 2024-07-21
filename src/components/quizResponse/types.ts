export interface QuizResponseProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  style?: QuizResponseStyle;
}

export type QuizResponseStyle = 'default' | 'active' | 'wrong' | 'correct';