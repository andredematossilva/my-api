import { Body, Controller, Get, Param, Post, Query, Redirect, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';

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
    UpdateUser(@Param('id') id: string, @Body() user: any) {
        console.log(id);
        return this.userService.update(id, user);
    }

    @Get()
    getUsers(@Query('name') name: string) {
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
    saveUser(@Body() user) {
        return this.userService.saveUser(user);
    }
}

