import Markdown from 'react-markdown';
import { useSignals } from '@preact/signals-react/runtime';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { markdownText } from './MarkdownEditor';

export const MarkDownPreview: React.FC = () => {
	useSignals();
	return (
		<div>
			<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
				{markdownText.value}
			</Markdown>
		</div>
	);
};
