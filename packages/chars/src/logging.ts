import { createLogger, format, transports } from "winston"

const { combine, timestamp, errors, splat, printf } = format

const logFormat = printf(({ timestamp, level, message, stack }) => {
    return message as string
})
const trieLogTransport = new transports.File({ filename: "trie.log" })
const logger = createLogger({
    level: process.env.LOG_LEVEL || "info",
    format: combine(timestamp(), errors({ stack: true }), splat(), logFormat),
    transports: [trieLogTransport],
    exceptionHandlers: [trieLogTransport],
    rejectionHandlers: [trieLogTransport],
    exitOnError: false,
    handleExceptions: true,
    handleRejections: true
})
export default logger
