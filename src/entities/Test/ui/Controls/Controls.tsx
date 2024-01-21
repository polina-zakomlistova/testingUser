import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { observer } from 'mobx-react-lite';
import useStore from 'features/hooks/useStore';
import { ReactNode } from 'react';
import RestartButton from '../Buttons/RestartButton/RestartButton';
import FinishButton from '../Buttons/FinishButton/FinishButton';
import NextButton from '../Buttons/NextButton/NextButton';
import cls from './Controls.module.scss';

interface ControlsProps {
    className?: string;
}

const Controls = (props: ControlsProps) => {
    const { className } = props;

    const mods:Mods = {};

    const [testStore] = useStore('test');

    const {
        isLastQuestion,
        isTestFinished,
    } = testStore;

    let buttonCmponent: ReactNode = <NextButton />;

    if (isLastQuestion) {
        buttonCmponent = <FinishButton />;
    }

    if (isTestFinished) {
        buttonCmponent = <RestartButton />;
    }

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {buttonCmponent}
        </div>

    );
};

export default observer(Controls);
