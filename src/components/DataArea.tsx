import React from 'react';

type DataAreaProps = {
	className: string;
	setData: React.Dispatch<React.SetStateAction<string>>;
};

const DataArea: React.FC<DataAreaProps> = ({ className, setData }) => {
	return (
		<textarea
			className={className}
			onInput={(e) => setData(e.currentTarget.value)}
			defaultValue={'{}'}
		></textarea>
	);
};

export default DataArea;
