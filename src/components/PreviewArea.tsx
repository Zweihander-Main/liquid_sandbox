import React from 'react';
import { Liquid } from 'liquidjs';

const engine = new Liquid();

type PreviewAreaProps = {
	template: string;
	data: string;
	className: string;
};

const PreviewArea: React.FC<PreviewAreaProps> = ({
	className,
	template,
	data,
}) => {
	const [markup, setMarkup] = React.useState('');
	React.useEffect(() => {
		void engine
			.parseAndRender(template || ' ', JSON.parse(data))
			.catch(() => {
				setMarkup('Error');
			})
			.then((returnMarkup) => returnMarkup && setMarkup(returnMarkup));
	}, [template, data]);
	return (
		<div
			className={className}
			dangerouslySetInnerHTML={{ __html: markup }}
		></div>
	);
};

export default PreviewArea;
