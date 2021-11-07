export interface Question {
  question: String;
  options: { option: String; answer: String;}[];
  selectedAnswer: String;
  correctAnswer: String;
}
