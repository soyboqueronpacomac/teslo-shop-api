import { Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; 
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }), //confuracion de variable de entrono
    // Conección base de datos
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT || '5432', 10),
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        autoLoadEntities: true,
        synchronize: true
      }),
      inject: [ConfigService],
    }),
    
  ],
  
  controllers: [
  ],
  providers: [],
})
export class AppModule {}
