import React from 'react';

type BottomBarProps = {
	className: string;
	setData: React.Dispatch<React.SetStateAction<string>>;
};

const BottomBar: React.FC<BottomBarProps> = ({ className, setData }) => {
	return <div className={className}></div>;
};

export default BottomBar;
