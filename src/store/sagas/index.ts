import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
  ]);
}
// foo.js
// export function *fooSagas() {
//   yield all([
//     takeEvery("FOO_A", fooASaga),
//     takeEvery("FOO_B", fooBSaga),
//   ]);
// }
//
// // bar.js
// export function *barSagas() {
//   yield all([
//     takeEvery("BAR_A", barASaga),
//     takeEvery("BAR_B", barBSaga),
//   ]);
// }
//
// // index.ts
// import { fooSagas } from './foo';
// import { barSagas } from './bar';
//
// export default function* rootSaga() {
//   yield all([
//     fooSagas,
//     barSagas
//   ])
// }
