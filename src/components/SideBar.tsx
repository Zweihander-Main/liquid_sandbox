import React from 'react';

type SideBarProps = {
	className: string;
};

const SideBar: React.FC<SideBarProps> = ({ className }) => {
	return <div className={className}></div>;
};

export default SideBar;
