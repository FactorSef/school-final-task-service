import {
    Controller,
    Route,
    Tags,
    Get,
    Path,
    Put,
    Delete,
} from 'tsoa';

/** Пользователи */
@Route('comments')
@Tags('Comments')
export class CommentController extends Controller{
    /** Получение комментариев по id задачи */
    @Get(':taskId')
    public async getById(
        /** id задачи */
        @Path('taskId') id: string,
    ): Promise<void> {
        console.log(id)
        return;
    }

    /** Создаение или редактирование комментария */
    @Put('createOrEdit')
    public async createOrEdit(): Promise<void> {
        return;
    }

    /** Удаление комментария по id */
    @Delete(':commentId')
    public async delete(
        /** id комментария */
        @Path('commentId') id: string,
    ): Promise<void> {
        console.log(id);
        return;
    }
}