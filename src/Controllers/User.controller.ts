import {
    Body,
    Controller,
    Get,
    Put,
    Path,
    Post,
    // Query,
    Route,
    Tags,
    
    
    // SuccessResponse,
} from 'tsoa';

/** Модель авторизации */
interface UserCredentional {
    /** Логин пользователя */
    login: string;
    /** Пароль */
    password: string;
}

interface User {
    login: string;
    username: string;
    photoUrl?: string;
    about?: string;
}

/** Пользователи */
@Route('users')
@Tags('Users')
export class UserController extends Controller{
    /** Получение списка пользователей по фильтру */
    @Post()
    public async getByFilter(): Promise<void> {
        return;
    }

    /** Получение пользователя по id */
    @Get(':id')
    public async getById(
        @Path('id') id: string,
    ): Promise<User> {
        console.log(id);

        return {
            login: id,
            username: 'testUsername',
            photoUrl: 'testPhoto',
            about: 'testAbout',
        };
    }

    /** Получение списка всех пользователей */
    @Get('all')
    public async getAll(): Promise<void> {
        return;
    }

    /** Редактирование пользователя */
    @Put('edit')
    public async edit(): Promise<void> {
        return;
    }

    /** Авторизация пользователя */
    @Post('login')
    public async login(
        @Body() credential: UserCredentional
    ): Promise<User>{
        console.log(credential)

        return {
            login: 'testlogin',
            username: 'testUsername',
            photoUrl: 'testPhoto',
            about: 'testAbout',
        };
    }
}