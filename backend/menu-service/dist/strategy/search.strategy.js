"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExactMatchStrategy = void 0;
class ExactMatchStrategy {
    async search(prisma, modelName, fieldName, query) {
        const model = prisma[modelName];
        return await model.findMany({
            where: {
                [fieldName]: query
            }
        });
    }
}
exports.ExactMatchStrategy = ExactMatchStrategy;
