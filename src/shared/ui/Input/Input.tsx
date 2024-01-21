import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

export enum InputTheme {
    RADIO = 'radio',
}

export enum InputSize {
    S = 'size-s',
    M = 'size-m',
    L = 'size-l',
}

export enum LabelPosition {
    left = 'left-label',
    right = 'right-label',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'| 'onChange'|'id'|'size'>

interface InputProps extends HTMLInputProps {
    className?: string;
    label?: string;
    value: string;
    name?: string;
    onChange?: (value:string)=> void;
    id:string;
    theme?: InputTheme;
    size?:InputSize,
    labelPosition?:LabelPosition,
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        label,
        value = '',
        name,
        onChange,
        type = 'text',
        id,
        size,
        theme,
        labelPosition,
        ...otherProps
    } = props;

    const classes: string[] = [cls[size], cls[theme], className];

    const mods: Mods = {};

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => (
        onChange?.(e.target.value)
    );

    return (
        <div
            className={classNames(
                cls.wrapperInputLabel,
                {},
                [cls[labelPosition]],
            )}
        >
            {label && (
                <label htmlFor={id} className={cls.label}>
                    {label}
                </label>
            )}
            <input
                className={classNames(
                    cls.input,
                    mods,
                    classes,
                )}
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
