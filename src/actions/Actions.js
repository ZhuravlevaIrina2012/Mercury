export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const clickSidebar = (info) => (
    {
        type: TOGGLE_SIDEBAR,
        payload: info
    }
);

export const toggleSidebar = (sideMenu) => {
    return dispatch => {
        if (sideMenu) {
            dispatch(clickSidebar({
                sideMenu: false,
                typeMenu: 'openMenu'
            }));
        } else {
            dispatch(clickSidebar({
                sideMenu: true,
                typeMenu: 'fullScreen'
            }));
        }
    }
}