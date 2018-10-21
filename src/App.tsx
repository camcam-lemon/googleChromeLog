import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Root from './Root';

const theme = createMuiTheme();

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Root />
    </MuiThemeProvider>,
    document.getElementById('content') as HTMLElement,
);
