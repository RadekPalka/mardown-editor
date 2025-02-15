import { faBold, faItalic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Toolbar: React.FC = () => {
	return (
		<div className='flex gap-6 bg-black py-4 px-4'>
			<FontAwesomeIcon icon={faBold} color='white' className='cursor-pointer' />
			<FontAwesomeIcon icon={faItalic} color='white' className='cursor-pointer' />
		</div>
	);
};
