import DOMPurify from 'dompurify';
import { signal } from '@preact/signals-react';
import { useEffect, useRef } from 'react';

export const markdownText = signal('');
export const textareaRef = signal<HTMLTextAreaElement | null>(null);

export const MarkdownEditor: React.FC = () => {
	const ref = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		textareaRef.value = ref.current;
	}, []);

	return (
		<textarea
			ref={ref}
			className='editor-preview-style'
			onChange={(e) => (markdownText.value = DOMPurify.sanitize(e.target.value))}
		></textarea>
	);
};
