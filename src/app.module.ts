import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { EmployeeModule } from './employee/employee.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 사용할 데이터베이스 타입
      host: '127.0.0.1', // 데이터베이스 호스트
      port: 3306, // 데이터베이스 포트
      username: 'root', // 데이터베이스 사용자명
      password: '12341234', // 데이터베이스 비밀번호
      database: 'todoApp', // 데이터베이스 이름
      entities: [__dirname +  '/**/*.entity{.ts,.js}'], // 엔티티 파일 경로
      synchronize: false, // 개발 환경에서만 true로 설정 (자동으로 테이블을 동기화)
      logging: true,
    }),
    UserModule,
    CompanyModule,
    EmployeeModule
  ],
})
export class AppModule {}
