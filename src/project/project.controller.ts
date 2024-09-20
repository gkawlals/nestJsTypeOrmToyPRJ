import { Body, Controller, Logger, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from '../entities/project.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as xlsx from 'xlsx';  // Excel 파일 처리 패키지 (xlsx)
import { Express } from 'express';

// project 등록 및 수정 
// project - task 
@Controller('project')
export class ProjectController {
    constructor(private readonly prjService: ProjectService){}
    private readonly logger = new Logger(ProjectService.name)

    @Post('addPrj')
    async addProject(@Body() prj: Project): Promise<Project>{
        // 프로젝트를 신규로 저장할때, 프로젝트 명부터 모든걸 다 등록하기 
        this.logger.log(`project add controller start ${prj}`)
        this.logger.log('project add controller end') 
        return this.prjService.addProject(prj)
    }

    @Post('addPrjExcel')
    @UseInterceptors(FileInterceptor('file'))
    async addProjectForExcel(@UploadedFile() file: Express.Multer.File): Promise<any> {
        // Excel 파일을 읽어 JSON 형식으로 변환
        const workbook = xlsx.read(file.buffer, { type: 'buffer' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = xlsx.utils.sheet_to_json(sheet);
        this.logger.debug(workbook)
        this.logger.debug(sheet)
        this.logger.debug(jsonData)
        // 변환된 데이터를 서비스로 전달
        await this.prjService.addProjectForExcel(jsonData);
        return { message: 'Projects added from Excel file.' };
      }
}
