import {connect} from "react-redux";
import TopMenu from "../components/TopMenu";

function mapStateToProps(state) {
    return{
        tasks: state.tasks,
        sideMenu: state.sideMenu,
        typeMenu: state.typeMenu
    }
}

export default connect(mapStateToProps)(TopMenu);