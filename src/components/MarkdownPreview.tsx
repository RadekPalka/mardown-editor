import Markdown from 'react-markdown';
import { useSignals } from '@preact/signals-react/runtime';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { markdownText } from './MarkdownEditor';

export const MarkDownPreview: React.FC = () => {
	useSignals();
	return (
		<div className='editor-preview-style'>
			<Markdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
				components={{
					ul: ({ node, ...props }) => (
						<ul style={{ listStyleType: 'disc', marginLeft: '1.5em' }} {...props} />
					),
					ol: ({ node, ...props }) => (
						<ol style={{ listStyleType: 'decimal', marginLeft: '1.5em' }} {...props} />
					),
				}}
			>
				{markdownText.value}
			</Markdown>
		</div>
	);
};
