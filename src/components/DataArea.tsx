import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript.js';

type DataAreaProps = {
	className: string;
	setData: React.Dispatch<React.SetStateAction<string>>;
};

const DataArea: React.FC<DataAreaProps> = ({ className, setData }) => {
	return (
		<CodeMirror
			className={className}
			value="{}"
			options={{
				mode: { name: 'javascript', json: true },
				theme: 'material',
				lineNumbers: true,
			}}
			onChange={(editor, data, value) => {
				setData(value);
			}}
		/>
	);
};

export default DataArea;
