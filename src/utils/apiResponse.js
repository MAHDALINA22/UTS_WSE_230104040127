function success(message, data = null) {
  return { status: "success", message, data };
}

function fail(message) {
  return { status: "fail", message };
}

module.exports = { success, fail };
