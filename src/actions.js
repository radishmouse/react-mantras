
export const ADD_MANTRA = 'ADD_MANTRA';
export const ADD_KARMA = 'ADD_KARMA';

export function actionAddMantraWithKarma(mantra) {
    return (dispatch, getState) => {
        dispatch(actionAddMantra(mantra));
        console.log(getState());
        const state = { ...getState() };
        const count = state.karma[mantra] || 1;

        dispatch({
            type: ADD_KARMA,
            payload: {
                [mantra]: count
            }
        })
    }
}

export function actionAddMantra(mantra) {
    return ({
        type: ADD_MANTRA,
        payload: {
            mantra
        }
    })
}