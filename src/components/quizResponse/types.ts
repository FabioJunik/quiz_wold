export interface QuizResponseProps {
  text: string;
  onClick?: () => void;
  style?: QuizResponseStyle;
}

export type QuizResponseStyle = 'default' | 'active' | 'wrong' | 'correct';