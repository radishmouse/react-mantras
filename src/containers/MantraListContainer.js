// we need connect function from react-redux
import {
    connect
} from 'react-redux';
// we need our dumb component
import MantraList from '../components/MantraList';

// we need? mapStateToProps
function mapStateToProps(state) {
    return {
        mantras: state
    }
}
// we need? mapDispatchToProps
// nope. This component does
// not change redux state.

// "wire" everything together
const reduxConnector = connect(mapStateToProps);
// and export it!!!!
export default reduxConnector(MantraList);