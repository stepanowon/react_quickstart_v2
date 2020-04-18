import Constant from '../Constant';

const initialState = {
    currentTime : new Date()
}
const TimeReducer = (state=initialState, action) => {
    switch(action.type) {
        case Constant.CHANGE_TIME:
            return { ...state, currentTime : action.payload.currentTime }
        default:
            return state;
    }
}
export default TimeReducer;
