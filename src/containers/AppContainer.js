import {connect} from "react-redux";
import App from "../App";

function mapStateToProps(state) {
    return{
        tasks: state.tasks,
        sideMenu: state.sideMenu,
        typeMenu: state.typeMenu
    }
}

export default connect(mapStateToProps)(App);