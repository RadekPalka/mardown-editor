import DOMPurify from 'dompurify';
import { signal } from '@preact/signals-react';

export const markdownText = signal('');

export const MarkdownEditor: React.FC = () => {
	return (
		<textarea
			onChange={(e) => (markdownText.value = DOMPurify.sanitize(e.target.value))}
		></textarea>
	);
};
