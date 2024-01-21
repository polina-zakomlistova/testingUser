import { makeAutoObservable } from 'mobx';
import RootStore from 'app/providers/store/config/store';
import { IQuestion } from 'entities/Test/model/types/test';
import { questions } from './data';
import { getQuestionsForTest } from '../services/getQuestionsForTest/getQuestionsForTest';

export interface ITestStore {
    rootStore: RootStore;
}

export default class Test implements ITestStore {
    rootStore: RootStore;

    error: string;

    isLoading: boolean;

    initialItems: IQuestion[] = questions;

    items: IQuestion[] = this.initialItems;

    currentQuestionIndex: number = 0;

    showResult = false;

    isTestFinished: boolean = false;

    get currentQuestion():IQuestion {
        return this.items[this.currentQuestionIndex];
    }

    fetchQuestions = async () => {
        this.isLoading = true;

        try {
            const result = await getQuestionsForTest();
            this.initialItems = result;
            this.isLoading = false;
        } catch (error) {
            this.error = error;
            this.isLoading = false;
        }
    };

    get isLastQuestion(): boolean {
        return this.currentQuestionIndex === this.countQuestion - 1;
    }

    get countQuestion():number {
        return this.items.length;
    }

    get correctCount():number {
        return this.items.filter((item) => item.isCorrect).length;
    }

    get uncorrectCount():number {
        return this.items.filter((item) => !item.isCorrect).length;
    }

    get percentCorrect():number {
        return Math.round((this.correctCount / this.countQuestion) * 100);
    }

    restart = () => {
        this.items = this.initialItems;
        this.currentQuestionIndex = 0;
        this.isTestFinished = false;
    };

    setIsFinish = () => {
        this.isTestFinished = true;
    };

    setShowResult = (value: boolean) => {
        this.showResult = value;
    };

    nextQuestion = () => {
        if (this.currentQuestionIndex < (this.countQuestion - 1)) {
            this.currentQuestionIndex++;
        }
    };

    prevQuestion = () => {
        if (this.currentQuestionIndex - 1 >= 0) {
            this.currentQuestionIndex--;
        }
    };

    setIsCorrectValue = (value: boolean) => {
        this.currentQuestion.isCorrect = value;
    };

    isCorrectAnswer = (
        idAnswer: string,
    ): boolean => (
        this.currentQuestion.correctAnswerId === idAnswer
    );

    setAnswer = (idAnswer: string) => {
        const isCorrect = this.isCorrectAnswer(idAnswer);
        this.setIsCorrectValue(isCorrect);
        this.currentQuestion.userAnswer = idAnswer;
    };

    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
}
