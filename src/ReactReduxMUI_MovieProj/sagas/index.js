import { call, delay, put, takeLatest, all } from "redux-saga/effects";
import { API_KEY } from "../config";
import TheMovieDbApi from "../lib/api";
import { fetchedSearchMovies, searchMovies } from "../redux/Search";

const api = new TheMovieDbApi(API_KEY);

function* fetchSearchMovies(action) {
  yield delay(500);
  yield put(fetchedSearchMovies(yield call(api.searchMovies, action.payload)));
}

export default function* watcherSaga() {
  yield all([yield takeLatest(searchMovies.type, fetchSearchMovies)]);
}
