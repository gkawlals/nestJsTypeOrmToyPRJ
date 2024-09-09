import { Controller, Get, Post, Put, Delete, Body, Param, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    private readonly logger = new Logger(UserService.name);

    @Post()
    async signupUser(@Body() user:Partial<User>): Promise<User>{
        this.logger.log('create user controller start')
        this.logger.log('create user controller end')
        return this.userService.create(user)
    }

    @Post('idCheck')
    async idCheck(@Param('userId') userId: string): Promise<User | boolean>{
        return this.userService.duplicateUserId(userId)
    }

    @Post('details')
    async detailUserPage(@Body() user:Partial<User>): Promise<User>{
        this.logger.log('find user detail page controller start')
        this.logger.log('find user detail page controller end')
        return this.userService.detailUserPage(user)
    }

    @Post('login')
    async userLogin(@Body() userData: Partial<User>): Promise<boolean>{
        // JWT 토큰을 통한 인증 ?
        // 암호화 복호화를 통한 비밀번호 보안 ?
        // 암호화 복호화를 위한 비밀번호 패스 키 생성 ?
        this.logger.log('find user login page controller start')
        const userId = userData.usr_id
        const userPwd = userData.usr_pwd
        this.logger.log('find user login page controller end')
        return this.userService.userLogin(userId, userPwd)
    }
}
