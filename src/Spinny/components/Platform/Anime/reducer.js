import {
  GET_LIST_DATA_LOADING,
  GET_LIST_DATA_SUCCESS,
  GET_LIST_DATA_FAILURE,
  GET_LIST_DATA_CLEAR,
  GET_LIST_DATA_MORE_LOADING
} from "../../../constants/actionTypes";

import {
  getLoadingState,
  getSuccessState,
  getErrorState
} from "../../../store/stateSettler";


const initialState = {
  listData: {
    loading: false,
    data: null,
    error: null,
    loadingMore: false
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_DATA_LOADING:
      return {
        ...state,
        listData: getLoadingState("listData", state)
      };
    case GET_LIST_DATA_MORE_LOADING:
      return {
        ...state,
        listData: {
          ...state.listData,
          loading: false,
          loadingMore: true
        }
      }
    case GET_LIST_DATA_SUCCESS:
      if (state.listData.loadingMore && !state.listData.loading) {
        let data = state.listData.data.results;
        let nextData = action.result.results;
        let totalData = [...data, ...nextData];
        let finalObject = { ...state.listData };
        finalObject.data.results = totalData;
        return {
          ...state,
          listData: { ...finalObject },
          loadingMore:false,
          loading:false
        };
      } else {
        return {
          ...state,
          listData: getSuccessState("listData", state, action),
          loading:false
        };
      }
    case GET_LIST_DATA_FAILURE:
      return {
        ...state,
        listData: getErrorState("listData", state, action)
      };
    case GET_LIST_DATA_CLEAR:
      return {
        ...state,
        listData: initialState.listData
      };
    default:
      return state;
  }
}
