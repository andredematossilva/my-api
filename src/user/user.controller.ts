import { Body, Controller, Get, Param, Post, Query, Redirect, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import UserSearchDTO from './dtos/user-search.dto';
import UserDTO from './dtos/user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    //Exemplos de parâmetros: Path, Query e Body
    @Get(':id')
    getUser(@Param('id') id: number) {
        console.log(id);
        return this.userService.getUserById(Number(id));
    }

    @Delete(':id')
    DeleteUser(@Param('id') id: string) {
        console.log(id);
        return this.userService.delete(id);
    }

    @Put(':id')
    UpdateUser(@Param('id') id: string, @Body() user: UserDTO) {
        console.log(id);
        return this.userService.update(id, user);
    }

    @Get()
    getUsers(@Query() params: UserSearchDTO) {
        const { name } = params;
        if (name) {
            return this.userService.getUserByName(name);
        }
        return this, this.userService.getAll();
    }

    @Get('new')
    getUserV2() {
        return 'Redirected successfully!';
    }

    @Post()
    saveUser(@Body() user: UserDTO) {
        return this.userService.saveUser(user);
    }
}

