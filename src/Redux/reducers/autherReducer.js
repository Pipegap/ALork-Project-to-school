const SET_DATA_FROM_SERVER = 'DATA_FROM_SERVER',
SET_CHECK_IN = 'SET_CHECK_IN';

const initState = {
    data : [],
    checkedIn: null,
};


const autherReducer = (state = initState, action) => {

    let copyState = {...state};
    copyState.data = [...state.data];



    switch (action.type) {
        case SET_DATA_FROM_SERVER:
            copyState.data.push(action.data);
            return copyState;
        case SET_CHECK_IN:
            (copyState.data[0].resultCode === 0) ? copyState.checkedIn = true : copyState.checkedIn = false;
            return copyState;
        default:
            return state;
    }

}

export const setDataFromServerAC = (data) => ({type: SET_DATA_FROM_SERVER, data: data}),
setCheckInAC = () => ({type: SET_CHECK_IN});

export default autherReducer;

