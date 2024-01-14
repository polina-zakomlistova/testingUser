export interface IAnswer {
    text: string;
    id: string;
}
export interface IQuestion {
    id: string;
    userAnswer: string | null;
    question: string;
    isCorrect: boolean;
    correctAnswerId: string;
    answerOptions: IAnswer[];
}
