import { IQuestion } from '../types/test';

export const questions: IQuestion[] = [
    {
        id: '1',
        question: 'Текст вопроса 1',
        correctAnswerId: '11',
        isCorrect: false,
        userAnswer: null,
        answerOptions: [
            {
                id: '11',
                text: 'Верный ответ',
            },
            {
                id: '12',
                text: 'Ошибка',
            },
            {
                id: '13',
                text: 'Ошибка',
            },
            {
                id: '14',
                text: 'Ошибка',
            },
        ],
    },
    {
        id: '2',
        question: 'Текст вопроса 2',
        correctAnswerId: '22',
        isCorrect: false,
        userAnswer: null,
        answerOptions: [
            {
                id: '21',
                text: 'Ошибка',
            },
            {
                id: '22',
                text: 'Верный ответ',
            },
            {
                id: '23',
                text: 'Ошибка',
            },
            {
                id: '24',
                text: 'Ошибка',
            },
        ],
    },
    {
        id: '3',
        question: 'Текст вопроса 3',
        correctAnswerId: '33',
        isCorrect: false,
        userAnswer: null,
        answerOptions: [
            {
                id: '31',
                text: 'Ошибка',
            },
            {
                id: '32',
                text: 'Ошибка',
            },
            {
                id: '33',
                text: 'Верный ответ',
            },
            {
                id: '34',
                text: 'Ошибка',
            },
        ],
    },
    {
        id: '4',
        question: 'Текст вопроса 4',
        correctAnswerId: '44',
        isCorrect: false,
        userAnswer: null,
        answerOptions: [
            {
                id: '41',
                text: 'Ошибка',
            },
            {
                id: '42',
                text: 'Ошибка',
            },
            {
                id: '43',
                text: 'Ошибка',
            },
            {
                id: '44',
                text: 'Верный',
            },
        ],
    },
    {
        id: '5',
        question: 'Текст вопроса 5',
        correctAnswerId: '51',
        isCorrect: false,
        userAnswer: null,
        answerOptions: [
            {
                id: '51',
                text: 'Верный ответ',
            },
            {
                id: '52',
                text: 'Ошибка',
            },
            {
                id: '53',
                text: 'Ошибка',
            },
            {
                id: '54',
                text: 'Ошибка',
            },
        ],
    },

];
