import { SEARCH_CONTATCS } from "../../../constants/actionTypes";

export default (q) => (dispatch) => {
    dispatch({ type: SEARCH_CONTATCS, payload: q });
}