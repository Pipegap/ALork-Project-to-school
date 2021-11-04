const SET_DATA_FROM_SERVER = 'DATA_FROM_SERVER',
SET_CHECK_IN = 'SET_CHECK_IN';

const initState = {
    dataFromServer : [],
    checkedIn: false,
};


const autherReducer = (state = initState, action) => {

    let copyState = {...state};
    copyState.dataFromServer = [...state.dataFromServer];



    switch (action.type) {
        case SET_DATA_FROM_SERVER:
            copyState.dataFromServer.push(action.data);
            return copyState;
        case SET_CHECK_IN:
            if (copyState.dataFromServer[0].resultCode === 0) {copyState.checkedIn = true}
            return copyState;
        default:
            return state;
    }

}

export const setDataFromServerAC = (data) => ({type: SET_DATA_FROM_SERVER, data: data}),
setCheckInAC = () => ({type: SET_CHECK_IN});

export default autherReducer;

