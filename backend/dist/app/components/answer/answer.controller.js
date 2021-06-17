"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const answer_repository_1 = __importDefault(require("./answer.repository"));
function getAnswers() {
    return answer_repository_1.default.getAnswers();
}
function getAnswer(id) {
    return answer_repository_1.default.getAnswer(id);
}
function postAnswer(answer) {
    return answer_repository_1.default.postAnswer(answer);
}
function patchAnswer(id, answer) {
    return answer_repository_1.default.patchAnswer(id, answer);
}
function deleteAnswer(id) {
    return answer_repository_1.default.deleteAnswer(id);
}
exports.default = { getAnswers, getAnswer, postAnswer, patchAnswer, deleteAnswer };
