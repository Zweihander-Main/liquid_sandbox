import React from 'react';
import './App.css';
import BottomBar from './components/BottomBar';
import SideBar from './components/SideBar';
import EditArea from './components/EditArea';
import PreviewArea from './components/PreviewArea';

const App: React.FC = () => {
	const [template, setTemplate] = React.useState('');
	const [data, setData] = React.useState('{}');

	return (
		<div className="app">
			<SideBar className="side-bar" />
			<BottomBar className="bottom-bar" setData={setData} />
			<EditArea className="edit-area" setTemplate={setTemplate} />
			<PreviewArea
				className="preview-area"
				template={template}
				data={data}
			/>
		</div>
	);
};

export default App;
