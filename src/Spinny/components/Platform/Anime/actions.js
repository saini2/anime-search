import {
    GET_LIST_DATA_LOADING,
    GET_LIST_DATA_SUCCESS,
    GET_LIST_DATA_FAILURE,
    GET_LIST_DATA_MORE_LOADING
} from "../../../constants/actionTypes";
/*
    Fetch Wrapper used to hit API.
  */
import httpFetch from "../../../utils/http";

export function getListData(data=null) {
    let url = `https://api.jikan.moe/v3/search/anime?q=${data.query}&limit=16&page=${data.pageNo}`;
    return {
        types: [
            GET_LIST_DATA_LOADING,
            GET_LIST_DATA_SUCCESS,
            GET_LIST_DATA_FAILURE
        ],
        promise: () =>
            httpFetch(url)
    };
}

export function getListDataMore(data=null) {
    let url = `https://api.jikan.moe/v3/search/anime?q=${data.query}&limit=16&page=${data.pageNo}`;
    return {
        types: [
            GET_LIST_DATA_MORE_LOADING,
            GET_LIST_DATA_SUCCESS,
            GET_LIST_DATA_FAILURE
        ],
        promise: () =>
            httpFetch(url)
    };
}
