import { signal } from '@preact/signals-react';
import { useEffect, useRef } from 'react';
import { useSignals } from '@preact/signals-react/runtime';
import { example } from '../constants/markdownExample';

export const markdownText = signal(example);
export const textareaRef = signal<HTMLTextAreaElement | null>(null);

export const MarkdownEditor: React.FC = () => {
	const ref = useRef<HTMLTextAreaElement>(null);
	useSignals();
	useEffect(() => {
		textareaRef.value = ref.current;
	}, []);

	return (
		<textarea
			ref={ref}
			className='editor-preview-style'
			onChange={(e) => {
				markdownText.value = e.target.value;
			}}
			value={markdownText.value}
		></textarea>
	);
};
