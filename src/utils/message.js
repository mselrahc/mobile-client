const TYPE = {
  error: 'danger',
  warn: 'warning',
  success: 'success',
  default: '',
};

const Message = {
  error: text => ({ type: TYPE.error, text }),
  warn: text => ({ type: TYPE.warn, text }),
  success: text => ({ type: TYPE.success, text }),
  default: text => ({ type: TYPE.default, text }),
};

export default Message;
