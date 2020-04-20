import { GET_STOCK_SUMMARY } from '../actions/constants';

const initialState = {
  data: [],
  isLoading: false,
};

function stockSummary(state = initialState, { type, payload }) {
  switch (type) {
    case GET_STOCK_SUMMARY.request:
      return {
        ...state,
        isLoading: true,
      };
    case GET_STOCK_SUMMARY.success:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    case GET_STOCK_SUMMARY.failure:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default stockSummary;
