"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const priority_repository_1 = __importDefault(require("./priority.repository"));
function getPriorities() {
    return priority_repository_1.default.getPriorities();
}
function getPriority(id) {
    return priority_repository_1.default.getPriority(id);
}
function postPriority(priority) {
    priority.prioridad = priority.prioridad.toLowerCase();
    return priority_repository_1.default.postPriority(priority);
}
function patchPriority(id, priority) {
    priority.prioridad = priority.prioridad.toLowerCase();
    return priority_repository_1.default.patchPriority(id, priority);
}
function deletePriority(id) {
    return priority_repository_1.default.deletePriority(id);
}
exports.default = { getPriorities, getPriority, postPriority, patchPriority, deletePriority };
