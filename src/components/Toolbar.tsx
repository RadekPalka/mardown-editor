import { faBold, faItalic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Toolbar: React.FC = () => {
	return (
		<div>
			<FontAwesomeIcon icon={faBold} />
			<FontAwesomeIcon icon={faItalic} />
		</div>
	);
};
