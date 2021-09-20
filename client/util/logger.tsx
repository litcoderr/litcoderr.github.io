const IS_LOG_ACTIVE = true;

class Logger {
    isLogActive: boolean;

    constructor(isLogActive: boolean) {
        this.isLogActive = isLogActive;
    }

    log(msg: String, color: String) {
        if(this.isLogActive) console.log(`%c${msg}`, `color: ${color}`); 
    }

    error(msg: String) {
        this.log(`[error] ${msg}`, "red");
    }

    warn(msg: String) {
        this.log(`[warn] ${msg}`, "orange");
    }

    info(msg: String) {
        this.log(`[info] ${msg}`, "green");
    }
}

const logger = new Logger(IS_LOG_ACTIVE);

export default logger;