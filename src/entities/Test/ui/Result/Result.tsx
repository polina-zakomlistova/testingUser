import { classNames, Mods } from 'shared/lib/classNames/classNames';
import useStore from 'features/hooks/useStore';
import { observer } from 'mobx-react-lite';
import cls from './Result.module.scss';

interface CounterProps {
    className?: string;
}

const Result = ((props: CounterProps) => {
    const { className } = props;

    const [testStore] = useStore('test');

    const {
        correctCount,
        uncorrectCount,
        percentCorrect,
    } = testStore;

    const mods:Mods = {};

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            <div className={cls.counter}>
                {percentCorrect}
                % правильных ответов
            </div>
            <div className={classNames(cls.counter, {}, [cls.correct])}>
                Правильно отвечено:
                {correctCount}
            </div>
            <div className={classNames(cls.counter, {}, [cls.uncorrect])}>
                Неправильно отвечено:
                {uncorrectCount}
            </div>
        </div>
    );
});

export default observer(Result);
