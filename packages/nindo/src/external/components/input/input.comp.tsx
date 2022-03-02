import React, { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { debounce } from "lodash"
import validator from 'validator';

import './input.scss';

interface IInputProps extends InputHTMLAttributes<Element> {
	showInvalidMessage?: boolean
}

export const Input = ({ showInvalidMessage = true, ...props }: IInputProps) => {
	const [invalidText, setInvalidText] = useState('')
	const inputRef = useRef<any>()

	function validateInput(text: string) {
		if (!text.trim() || inputRef.current?.validity.valid) {
			setInvalidText('')
			return
		}

		if (inputRef.current?.validity?.tooShort) {
			setInvalidText(`Should be at least ${inputRef.current?.minLength} characters`)
			return
		}

		if (inputRef.current?.validity?.tooLong) {
			setInvalidText(`Should not be more than ${inputRef.current?.maxLength} characters`)
			return
		}

		if (inputRef.current?.validity?.rangeUnderflow) {
			setInvalidText(`Value is too small`)
			return
		}

		if (inputRef.current?.validity?.rangeOverflow) {
			setInvalidText(`Value is too big`)
			return
		}

		if (inputRef.current?.validity?.typeMismatch) {
			setInvalidText(`Input has a type mismatch`)
			return
		}

		if (inputRef.current?.validity?.valueMissing) {
			setInvalidText(`Input has a missing value`)
			return
		}

		if (props.type === 'email') {
			if (validator.isEmail(text)) {
				setInvalidText('')
				return
			}
			setInvalidText('Invalid email')
			return;
		}

		if (props.type === 'url') {
			if (validator.isURL(text)) {
				setInvalidText('')
				return
			}
			setInvalidText('Invalid url')
			return;
		}

		if (!inputRef.current?.validity?.valid) {
			setInvalidText(`Invalid input`)
			return
		}
	}

	const debouncedSearch = debounce(async (event) => {
		validateInput(event.target.value)
	}, 300);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChange?.(e);
		debouncedSearch(e);
	}

	useEffect(() => {
		return () => {
			debouncedSearch.cancel();
		}
	}, [debouncedSearch, inputRef])

	return (
		<div className="input-wrapper">
			{showInvalidMessage ?
				<>
					<input ref={inputRef} {...props} onChange={onChange} />
					{invalidText &&
						<span className="input-error">{invalidText}</span>
					}
				</>
				:
				<>
					<input ref={inputRef} {...props} />
				</>
			}
		</div>
	);
};
