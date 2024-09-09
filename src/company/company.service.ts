import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../entities/company.entity';
// import { User } from '../entities/user.entity'
// import { UserService } from '../user/user.service'; // 타 서비스 import 방법

const date = new Date() // now date 

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private companyRepository: Repository<Company>
        // private userService: UserService // 타 서비스 import 방법
    ){}

    // async getCompanyList(userId: number): Promise<Company[]>{
    //     return this.companyRepository.find({where: {
    //         owner: {id : userId}},
    //         relations: ['owner']
    //     })
    // }

    async addCompany(company: Partial<Company>): Promise<Company>{
        const mysqlFormattedDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        company.com_cre_day = mysqlFormattedDate
        // console.log(company.com_cre_day)
        return this.companyRepository.save(company)
    }
}
