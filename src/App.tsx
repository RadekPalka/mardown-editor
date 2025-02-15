import Markdown from 'react-markdown';
import { signal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import DOMPurify from 'dompurify';
import { Toolbar } from './components/Toolbar';
const markdownText = signal('');
function App() {
	useSignals();
	return (
		<div className='min-h-screen'>
			<Toolbar />
			<textarea
				onChange={(e) => (markdownText.value = DOMPurify.sanitize(e.target.value))}
			></textarea>
			<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
				{markdownText.value}
			</Markdown>
		</div>
	);
}

export default App;
