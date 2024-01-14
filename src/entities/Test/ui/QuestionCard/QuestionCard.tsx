import { classNames, Mods } from 'shared/lib/classNames/classNames';
import useStore from 'features/hooks/useStore';
import { observer } from 'mobx-react-lite';
import { useCallback, useMemo } from 'react';
import { Input, InputTheme, LabelPosition } from 'shared/ui/Input/Input';
import cls from './QuestionCard.module.scss';
import { IAnswer } from '../../model/types/test';

interface QuestionCardProps {
    className?: string;
}

const QuestionCard = (props: QuestionCardProps) => {
    const {
        className,
    } = props;

    const [testStore] = useStore('test');

    const {
        setAnswer,
        currentQuestion,
        currentQuestionIndex,
        countQuestion,
    } = testStore;

    const onCheckedHandler = useCallback((id:string) => {
        setAnswer(id);
    }, [setAnswer]);

    const mods:Mods = {};

    const title = useMemo(
        () => (`Вопрос
                ${currentQuestionIndex + 1}
                из
                ${countQuestion}`
        ),
        [currentQuestionIndex, countQuestion],
    );

    return (
        <div className={classNames(cls.QuestionCard, mods, [className])}>
            <h3 className={cls.title}>{title}</h3>
            <div className={cls.question}>{currentQuestion.question}</div>
            <div className={cls.answerList}>
                {currentQuestion.answerOptions.map((item:IAnswer) => (
                    <Input
                        key={item.id}
                        theme={InputTheme.RADIO}
                        labelPosition={LabelPosition.right}
                        id={item.id}
                        type="radio"
                        name="answer"
                        value={item.text}
                        label={item.text}
                        onChange={(value) => onCheckedHandler(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default observer(QuestionCard);
