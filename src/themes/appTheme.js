import { createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme();
appTheme.palette = {
    ...appTheme.palette,
    type: "dark",
    primary: {
        light: '#ee98fb',
        main: '#ba68c8',
        dark: '#883997',
        contrastText: '#fff'
    },
    text: {
        primary: '#fff',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        hint: 'rgba(255, 255, 255, 0.5)',
        icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
        paper: '#333',
        default: '#212121'
    },
    action: {
        active: '#fff',
        hover: 'rgba(255, 255, 255, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(255, 255, 255, 0.16)',
        selectedOpacity: 0.16,
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(255, 255, 255, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.24
    }
}

export { appTheme };