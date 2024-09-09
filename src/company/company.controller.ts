import { Controller, Get, Post, Put, Delete, Body, Param, Logger} from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from '../entities/company.entity';
import { User } from '../entities/user.entity'

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}
    private readonly logger = new Logger(CompanyService.name);
    // 업장에 대한 내용을 CRUD

    @Post('List')
    async getCompanyList(userId: number): Promise<Company[]>{
        this.logger.log('get company list controller start')
        this.logger.log('get company list controller end')
        return this.companyService.getCompanyList(userId)
    }

    @Post('add')
    async addCompany(@Body() compnay: Partial<Company>): Promise<Company>{
        this.logger.log('create company controller start')
        this.logger.log('create company controller end')
        return this.companyService.addCompany(compnay)
    }
}
