import DOMPurify from 'dompurify';
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
				markdownText.value = DOMPurify.sanitize(e.target.value, {
					ALLOWED_TAGS: [
						'h1',
						'h2',
						'h3',
						'h4',
						'h5',
						'h6',
						'strong',
						'em',
						'ul',
						'ol',
						'li',
						'p',
						'br',
						'code',
						'pre',
						'blockquote',
						'a',
						'img',
					],
					ALLOWED_ATTR: ['href', 'src', 'alt'],
				});
			}}
			value={markdownText.value}
		></textarea>
	);
};
