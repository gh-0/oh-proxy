import { call, put, select } from "redux-saga/effects";
import { ProxyAction, updateGFWList } from "@/actions/proxy";
import fetchGFWList from "@/utils/fetch-gfwlist";
import { RootState } from "@/store/query-store";
import asyncSaga from "./utils/async-saga";

export function* updateGFWListSaga(action: ProxyAction) {
  const gfwUrl = yield select((state: RootState) => state.proxy.gfwUrl);
  if (gfwUrl) {
    yield asyncSaga(function* () {
      const gfwList: string[] = yield call(fetchGFWList, gfwUrl);
      yield put(updateGFWList(gfwList));
    })(action);
  } else {
    yield put(updateGFWList([]));
  }
}
