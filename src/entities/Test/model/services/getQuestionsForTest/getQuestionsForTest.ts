import axios from 'axios';
import { IQuestion } from '../../types/test';

const URL = '';

export const getQuestionsForTest = async (): Promise<IQuestion[]> => {
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.get<IQuestion[]>(URL, { headers });

        if (!response.data) {
            throw new Error('Response data is empty');
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching questions:', error);
        throw error;
    }
};
