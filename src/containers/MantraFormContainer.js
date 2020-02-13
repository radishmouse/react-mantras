import {
    connect
} from 'react-redux';

import MantraForm from '../components/MantraForm';
import { actionAddMantra } from '../actions';

// we don't need mapStateToProps!
// we aren't displaying anything from redux state.

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (newMantra) => {
            dispatch(actionAddMantra(newMantra))
        }
    }
}

// Fancy version: equivalent to the version above, but only uses arrow functions
// const mapDispatchToProps = dispatch => ({
//     handleSubmit: (newMantra) => dispatch(actionAddMantra(newMantra))
// });


const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(MantraForm);