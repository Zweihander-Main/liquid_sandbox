import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import '../lib/codemirror_liquid_mode/liquid.js';
import '../lib/codemirror_liquid_mode/liquid.css';

type EditAreaProps = {
	className: string;
	setTemplate: React.Dispatch<React.SetStateAction<string>>;
};

const EditArea: React.FC<EditAreaProps> = ({ className, setTemplate }) => {
	return (
		<CodeMirror
			className={className}
			value=""
			options={{
				mode: 'liquid',
				theme: 'material',
				lineNumbers: true,
			}}
			onChange={(editor, data, value) => {
				setTemplate(value);
			}}
		/>
	);
};

export default EditArea;
