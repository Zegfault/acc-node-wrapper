const wrapper = require('./src')

/**
 * @name initBroadcastSDK
 * @comment This is the init function for the ACC Node Wrapper. This inits the Broadcast SDK.
 * @param SERVER_DISPLAYNAME
 * @param SERVER_IP
 * @param SERVER_PORT
 * @param SERVER_PASS
 * @param SERVER_COMMANDPASS
 * @param UPDATE_INTERVAL
 * @param Logging
 */
wrapper.initBroadcastSDK('Max', '127.0.0.1', 9996, '123', '123', 250, true)
