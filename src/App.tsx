import React from 'react';
import './App.css';
import EditArea from './components/EditArea';
import PreviewArea from './components/PreviewArea';
import DataArea from './components/DataArea';

const App: React.FC = () => {
	const [template, setTemplate] = React.useState('');
	const [data, setData] = React.useState('{}');

	return (
		<div className="app">
			<EditArea className="edit-area" setTemplate={setTemplate} />
			<DataArea className="data-area" setData={setData} />
			<PreviewArea
				className="preview-area"
				template={template}
				data={data}
			/>
		</div>
	);
};

export default App;
