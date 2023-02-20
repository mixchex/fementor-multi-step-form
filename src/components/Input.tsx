import React, { useState } from 'react';
import { StyledInput, StyledRadio, StyledToggle, StyledCheckbox } from './styled/Input.styled';

interface Props {
    id: string,
    type?: string,
    label?: string,
    subLabel?: string,
    helperText?: string,
    icon?: string,
    name: string,
    placeholder?: string,
    checked?: boolean,
    value: string,
    onChange(event: React.FormEvent<HTMLInputElement>): void;
    error?: boolean,
    errorText?: string
}

const Field = ({
    id = 'input',
    type = "text",
    label,
    subLabel,
    helperText,
    name,
    icon,
    placeholder,
    checked,
    value,
    onChange,
    error,
    errorText
}: Props) => {

    const [invalid, setInvalid] = useState(false);

    switch (type) {
        case 'radio':
            return (
                <StyledRadio className={checked ? 'checked' : ''}>
                    <label>
                        <div>
                            {icon && <img src={icon} alt={label} className="icon" />}
                            <input
                                id={id}
                                type={type}
                                name={name}
                                value={value}
                                onChange={onChange}
                                placeholder={placeholder}
                            />
                        </div>
                        <span className="text">
                            <span className="label">{label}</span>
                            {subLabel && <span className="sublabel">{subLabel}</span>}
                            {helperText && <span className="helper">{helperText}</span>}
                            {error && <span className="errorText">{errorText}</span>}
                        </span>
                    </label>
                </StyledRadio>
            );
        case "checkbox":
            return <StyledCheckbox className={checked ? 'checked' : ''}>
                <label>
                    <div>
                        <input
                            id={id}
                            type={type}
                            name={name}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                        />
                        <span className="text">
                            <span className="label">{label}</span>
                            {subLabel && <span className="sublabel">{subLabel}</span>}
                            {error && <span className="errorText">{errorText}</span>}
                        </span>
                    </div>
                    {helperText && <span className="helper">{helperText}</span>}
                </label>
            </StyledCheckbox>
        case 'check-toggle':
            return <StyledToggle className={checked ? 'checked' : ''}>
                <label>
                    <span></span>
                    <input
                        id={id}
                        type="checkbox"
                        name={name}
                        checked={checked}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                </label>
            </StyledToggle>;
            
        default:
            return (
                <StyledInput className={(error || invalid) && 'error'}>
                    <header>
                        <label htmlFor={id}>{label}</label>
                        {subLabel && <span>{subLabel}</span>}
                        {errorText != "" && <span className="errorText">{errorText}</span>}
                    </header>
                    <input
                        id={id}
                        type={type}
                        name={name}
                        value={value}
                        onInvalid={() => setInvalid(true)}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                </StyledInput>
            )
    }
    
}
export default Field;