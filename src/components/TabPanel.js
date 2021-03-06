import React from 'react';
import Box from '@material-ui/core/Box';

export default function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`a11y-tabpanel-${index}`}
			aria-labelledby={`a11y-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}
