import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt'

const date = new Date() // now date 

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){}
    private readonly logger = new Logger(UserService.name);
    private readonly saltRound = 10;

    async create(user: Partial<User>): Promise<User> {
        this.logger.log('create user service start')
        user.usr_cre_day = date.toISOString()
        // const hashPwd = await this.hashPassword(user.usr_pwd)
        user.usr_pwd = await this.hashPassword(user.usr_pwd) // 비밀번호 암호화
        // 비밀번호 패스 키를 활용해 비밀번호 암호화 후 저장
        this.logger.log('create user service end')
        return this.usersRepository.save(user);
    }

    async duplicateUserId(userId: string): Promise<User | boolean>{
        const isMatch = await this.usersRepository.find({where: { usr_id: userId}})
        if (isMatch.length >= 1){
            return false
        }else {
            return true
        }
    }

    async hashPassword(userPwd: string): Promise<string>{
        const salt = await bcrypt.genSalt(this.saltRound) // 10자리 암호 패스 키 생성 
        this.logger.log('user password pass key', salt)
        const hashed = await bcrypt.hash(userPwd, salt) // 비밀번호화 패스 키 합성
        this.logger.log('user password + pass key hashed', hashed)
        return hashed
    }

    async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean>{
        this.logger.log('comparing passwords ....')
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword)
        this.logger.log(`comparing passwords Complata ${isMatch}`)
        return isMatch
    }

    async detailUserPage(user: Partial<User>): Promise<User>{
        this.logger.log('find user detail page service start')
        this.logger.log('find user detail page service end')
        return this.usersRepository.findOne({where:{id: user.id}});
    }

    async userLogin(userId: string, userPwd: string): Promise<boolean>{
        // 비밀번호 패스 키를 활용해 비밀번호 암호화
        // 비밀번호와 아이디를 기준으로 유저가 맞는지 확인 find(where: {usr_id, usr_pwd}) = 1인 경우
        const userData: Partial<User[]> = await this.usersRepository.find({
            where: {usr_id: userId}
        })
        const hashedPwd = userData[0].usr_pwd 
        const isMatch = await this.comparePassword(userPwd, hashedPwd)
        this.logger.log(isMatch)
        return isMatch
    }
}
