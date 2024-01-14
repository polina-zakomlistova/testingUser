import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { observer } from 'mobx-react-lite';
import useStore from 'features/hooks/useStore';
import Result from '../Result/Result';
import QuestionCard from '../QuestionCard/QuestionCard';
import cls from './Test.module.scss';
import Controls from '../Controls/Controls';

interface TestProps {
    className?: string;
}

const Test = (props: TestProps) => {
    const { className } = props;

    const [testStore] = useStore('test');

    const {
        showResult,
        fetchQuestions,
    } = testStore;

    // в случае использования API
    // useEffect(() => {
    //     fetchQuestions();
    // }, []);

    const mods:Mods = {};

    return (
        <div className={classNames(cls.Test, mods, [className])}>
            <div>
                { showResult ? <Result /> : <QuestionCard /> }
                <Controls />
            </div>
        </div>
    );
};

export default observer(Test);
