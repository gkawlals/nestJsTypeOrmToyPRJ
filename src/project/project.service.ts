import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../entities/project.entity';

@Injectable()
export class ProjectService{
    // private readonly logger = new Logger(ProjectService.name),
  constructor(
    @InjectRepository(Project)
    private prjRepository: Repository<Project>
  ){}
  private readonly logger = new Logger(ProjectService.name);
  
  async addProject(prj: Partial<Project>): Promise<Project>{
    // string으로 들어온 데이터 변환이 되는지
    // const now = LocalDate.now()// ex)start date, end date, deploy date
    const formatterData = Project.dataTypeParsing(prj)
    return this.prjRepository.save(prj)
  }

  async addProjectForExcel(data: any[]): Promise<void>{
    this.logger.log('add project service start')
    for(const entry of data){
      const project = Project.dataTypeParsing(entry)
      await this.prjRepository.save(project);
    }
    this.logger.log('add project service end')
  }
}
