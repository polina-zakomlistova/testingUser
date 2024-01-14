import { observer } from 'mobx-react-lite';
import useStore from 'features/hooks/useStore';
import { Button } from 'shared/ui/Button/Button';

const NextButton = () => {
    const [testStore] = useStore('test');

    const {
        currentQuestion,
        nextQuestion,
    } = testStore;

    const disabled = !currentQuestion.userAnswer;

    return (
        <Button
            onClick={nextQuestion}
            disabled={disabled}
        >
            Далее
        </Button>
    );
};

export default observer(NextButton);
