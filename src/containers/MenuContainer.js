import {toggleSidebar} from "../actions/Actions";
import {connect} from "react-redux";
import Menu from "../components/Menu";

function mapStateToProps(state) {
    return{
        tasks: state.tasks,
        sideMenu: state.sideMenu,
        typeMenu: state.typeMenu
    }
}

function mapDispatchToProps(dispatcher) {
    return {
        clickMenu: (state) => dispatcher(toggleSidebar(state))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);