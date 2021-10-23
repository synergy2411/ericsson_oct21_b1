// const logger = store => next => action => console.log("Logger works");

// Custom Middleware
const logger = function(store){
    return function(next){
        return function (action){
            console.log("[Triggered Action]", action)
            console.log("[Current store Snapshot]", store.getState())
            return next(action);
        }
    }
}

export default logger;