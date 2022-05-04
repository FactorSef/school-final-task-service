import { CommentDTO } from "../Models/Comment.model";
import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class Comment implements CommentDTO {
    @ObjectIdColumn()
    id: string;
    @Column()
    taskId: string;
    @Column()
    userId: string;
    @Column()
    text: string;
}