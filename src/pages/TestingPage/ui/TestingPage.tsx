import React, { FC } from 'react';
import { Test } from 'entities/Test';
import cls from './TestingPage.module.scss';

export const TestingPage: FC = () => (
    <section>
        <h2 className={cls.title}>Тестирование пользователя</h2>
        <Test />
    </section>
);
