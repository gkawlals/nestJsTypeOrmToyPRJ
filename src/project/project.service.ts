import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../entities/project.entity';

@Injectable()
export class ProjectService{
  constructor(
    private readonly logger = new Logger(ProjectService.name),
    @InjectRepository(Project)
    private prjRepository : Repository<Project>
  ){}

  async addProject(prj: Project): Promise<Project>{
    // string으로 들어온 데이터 변환이 되는지
    // const now = LocalDate.now()// ex)start date, end date, deploy date
    const formatterData = Project.dataTypeParsing(prj)
    return this.prjRepository.save(formatterData)
  }
}
