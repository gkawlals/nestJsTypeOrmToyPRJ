import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from '../entities/project.entity';

// project 등록 및 수정 
// project - task 
@Controller('project')
export class ProjectController {
    constructor(
        private readonly prjService: ProjectService,
        private readonly logger = new Logger(ProjectService.name)
    ){}

    @Post('addPrj')
    async addProject(@Body() prj: Project): Promise<Project>{
        // 프로젝트를 신규로 저장할때, 프로젝트 명부터 모든걸 다 등록하기 
        this.logger.log(`project add controller start ${prj}`)
        this.logger.log('project add controller end')
        return this.prjService.addProject(prj)
    }

    @Post('addPrjExcel')
    async addProjectForExcel(@Body() prj: Project): Promise<Project[]>{
        // 진행중인 프로젝트를 저장할때 excel 파일을 기준으로 등록하기
        return []
    }
}
