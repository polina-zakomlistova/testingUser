import { observer } from 'mobx-react-lite';
import useStore from 'features/hooks/useStore';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

const FinishButton = () => {
    const [testStore] = useStore('test');

    const {
        currentQuestion,
        setIsFinish,
        setShowResult,
    } = testStore;

    const disabled = !currentQuestion.userAnswer;

    const onFinishHandler = () => {
        setShowResult(true);
        setIsFinish();
    };

    return (
        <Button
            onClick={onFinishHandler}
            disabled={disabled}
            theme={ButtonTheme.SUCCESS}
        >
            Закончить и показать результаты
        </Button>
    );
};

export default observer(FinishButton);
