import React from 'react';

type EditAreaProps = {
	className: string;
	setTemplate: React.Dispatch<React.SetStateAction<string>>;
};

const EditArea: React.FC<EditAreaProps> = ({ className, setTemplate }) => {
	return (
		<textarea
			className={className}
			onInput={(e) => setTemplate(e.currentTarget.value)}
		></textarea>
	);
};

export default EditArea;
