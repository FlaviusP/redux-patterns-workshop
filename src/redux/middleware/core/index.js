import {apiMiddleware} from "./api.middleware";
import {loggerMiddleware} from "./logger.middleware";
import {normalizeMiddleware} from './normalize.middleware';
import {notificationMiddleware} from './notification.middleware';
import {multiMiddleware} from "./multi.middleware";

export const coreMiddleware = [multiMiddleware, apiMiddleware, normalizeMiddleware, notificationMiddleware, loggerMiddleware];
