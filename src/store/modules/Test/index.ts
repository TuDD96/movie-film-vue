/* eslint-disable no-empty-pattern */
import apiCaller from "@/utils/api";

const state = {
  test: 1,
};

const getters = {
  GET_TEST_STATE: (state: { test: number }) => state.test,
};

const mutations = {};

const actions = {
  TEST_ACTION: ({}) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        `/api/admin/index`,
        null,
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  },
};

export default { state, getters, mutations, actions };
