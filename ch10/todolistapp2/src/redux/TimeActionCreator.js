import Constant from '../Constant';

const TimeActionCreator = {
    changeTime() {
        return {  type: Constant.CHANGE_TIME, payload : { currentTime: new Date() } }
    }
}

export default TimeActionCreator;
