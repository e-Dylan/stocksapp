import { chakra, theme as chakraTheme } from '@chakra-ui/react';

const theme = {
	...chakraTheme,
	colors: {
		...chakraTheme.colors,
	},
	radii: {
		...chakraTheme.radii,
	},
	icons: {
		...chakraTheme.icons,
	}
} 

export default theme;