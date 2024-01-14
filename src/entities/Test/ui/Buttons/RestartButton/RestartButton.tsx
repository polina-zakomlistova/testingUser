import { observer } from 'mobx-react-lite';
import useStore from 'features/hooks/useStore';
import { Button } from 'shared/ui/Button/Button';

const RestartButton = () => {
    const [testStore] = useStore('test');

    const {
        currentQuestion,
        restart,
        setShowResult,
    } = testStore;

    const disabled = !currentQuestion.userAnswer;

    const onClickHandler = () => {
        restart();
        setShowResult(false);
    };

    return (
        <Button
            onClick={onClickHandler}
            disabled={disabled}
        >
            Заново
        </Button>

    );
};

export default observer(RestartButton);
