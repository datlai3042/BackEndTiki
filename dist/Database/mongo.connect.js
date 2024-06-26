"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class MongoConnect {
    static connect;
    static async Connect() {
        if (!MongoConnect.connect) {
            const connectString = process.env.MODE === 'DEV' ? process.env.MONGO_URI_LOCAL : process.env.MONGO_URI_PRO;
            MongoConnect.connect = mongoose_1.default.connect(connectString);
            MongoConnect.connect
                .then(() => {
                console.log('Connect Database is success');
            })
                .catch((e) => console.log('Connect dabase is error::', e));
            return MongoConnect.connect;
        }
        return MongoConnect.connect;
    }
}
exports.default = MongoConnect;
