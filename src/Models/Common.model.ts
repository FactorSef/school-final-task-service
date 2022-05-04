import { TaskRankEnum, TaskStatusEnum, TaskTypeEnum } from "./Task.model";

export interface UserFilter {
    query?: string | null;
}

export interface TaskFilter {
    query?: string;
    assignedUsers?: Array<string>;
    userIds?: Array<string>;
    type?: Array<TaskTypeEnum>;
    status?: Array<TaskStatusEnum>;
    rank?: Array<TaskRankEnum>;
}

export interface QueryDTO<T extends object> {
    filter: T;
    page: number;
    limit: number;
}

export interface ListDTO<T> {
    data: Array<T>
    page: number;
    limit: number;
    total: number;
}