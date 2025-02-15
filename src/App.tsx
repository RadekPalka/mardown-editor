import { MarkdownEditor } from './components/MarkdownEditor';
import { MarkDownPreview } from './components/MarkdownPreview';
import { Toolbar } from './components/Toolbar';

function App() {
	return (
		<div className='min-h-screen flex w-screen flex-wrap'>
			<Toolbar />
			<MarkdownEditor />
			<MarkDownPreview />
		</div>
	);
}

export default App;
