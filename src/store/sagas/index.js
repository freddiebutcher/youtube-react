import {all, call, put, fork} from 'redux-saga/effects';
import {watchMostPopularVideos, watchMostPopularVideosByCategory, watchVideoCategories} from './video';
import {watchWatchDetails} from './watch';
export default function* (){
  yield all([
    fork(watchMostPopularVideos),
    fork(watchVideoCategories),
    fork(watchMostPopularVideosByCategory),
    fork(watchWatchDetails)
  ]);
  }

export function* fetchEntity(request, entity, ...args) {
  try {
    const response = yield call(request);
    yield put(entity.success(response.result, ...args));
  } catch (error) {
    yield put(entity.failure(error, ...args));
  }
}

export function ignoreErrors(fn, ...args) {
  return () => {
    const ignoreErrorCallBack = (response) => response;
    return fn(...args).then(ignoreErrorCallBack, ignoreErrorCallBack);
  };
}
