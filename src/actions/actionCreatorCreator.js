function createCommonActionCreator(actionTypes) {
  return {
    getAll: (fromBeginning = true) => ({
      type: actionTypes.getAll.request,
      payload: {
        fromBeginning,
      },
    }),

    get getMore() {
      return () => this.getAll(false);
    },

    get: id => ({
      type: actionTypes.get.request,
      payload: { id },
    }),

    save: (id, entity, onSaveSuccess, onSaveFailure) => ({
      type: actionTypes.save.request,
      payload: { id, entity, onSaveSuccess, onSaveFailure },
    }),

    remove: id => ({
      type: actionTypes.remove.request,
      payload: { id },
    }),

    setSearchText: text => ({
      type: actionTypes.set.searchText,
      payload: { text },
    }),
  };
}

export { createCommonActionCreator };
