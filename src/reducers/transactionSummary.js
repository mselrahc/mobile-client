import { GET_TRANSACTION_SUMMARY } from '../actions/constants';

const initialState = {
  data: [],
  isLoading: false,
};

function transactionSummary(state = initialState, { type, payload }) {
  switch (type) {
    case GET_TRANSACTION_SUMMARY.request:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TRANSACTION_SUMMARY.success:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    case GET_TRANSACTION_SUMMARY.failure:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default transactionSummary;
