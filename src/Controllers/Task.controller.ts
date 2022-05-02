import {
    Post,
    Controller,
    Route,
    Tags,
    Get,
    Path,
    Put,
    Delete,
    Patch,
} from 'tsoa';

/** Пользователи */
@Route('tasks')
@Tags('Tasks')
export class TaskController extends Controller{
    /** Получение списка задач по фильтру */
    @Post()
    public async getByFilter(): Promise<void> {
        return;
    }

    /** Получение задачи по id */
    @Get(':taskId')
    public async getById(
        /** id задачи */
        @Path('taskId') id: string,
    ): Promise<void> {
        console.log(id)
        return;
    }

    @Patch(':taskId/status')
    public async updateStatus(
        /** id задачи */
        @Path('taskId') id: string,    
    ): Promise<void> {
        console.log(id);
        return;
    }

    /** Удаление задачи по id */
    @Delete(':taskId')
    public async delete(
        /** id задачи */
        @Path('taskId') id: string,
    ): Promise<void> {
        console.log(id);
        return;
    }

    /** Создаение или редактирование задачи */
    @Put('createOrEdit')
    public async createOrEdit(): Promise<void> {
        return;
    }
}