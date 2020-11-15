import React from 'react';
import { Liquid } from 'liquidjs';

const engine = new Liquid({ strictFilters: false, strictVariables: false });

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
		try {
			const dataObject = JSON.parse(data) as Record<string, unknown>;
			void engine
				.parseAndRender(template || ' ', dataObject)
				.catch(() => {
					setMarkup('Error rendering template');
				})
				.then(
					(returnMarkup) => returnMarkup && setMarkup(returnMarkup)
				);
		} catch (e) {
			setMarkup('Error with provided data');
		}
	}, [template, data]);
	return (
		<div
			className={className}
			dangerouslySetInnerHTML={{ __html: markup }}
		></div>
	);
};

export default PreviewArea;
