import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './utils/logger/logger.middleware';
// import { CamaraComercioModule } from './camara_comercio/camara_comercio.module';
// import { SuperintendenciaModule } from './superintendencia/superintendencia.module';
// import { CcfModule } from './ccf/ccf.module';
// import { CuidadModule } from './cuidad/cuidad.module';
// import { AlcaldiaModule } from './alcaldia/alcaldia.module';
// import { PersonaModule } from './persona/persona.module';
// import { ArlModule } from './arl/arl.module';
// import { DianModule } from './dian/dian.module';
// import { PersonaRepresentanteModule } from './persona_representante/persona_representante.module';
// import { PlanillaSsModule } from './planilla_ss/planilla_ss.module';
// import { EpsModule } from './eps/eps.module';
// import { CorreosModule } from './correos/correos.module';
// import { ContableModule } from './contable/contable.module';
// import { PersonaModuloSubmoduloModule } from './persona_modulo_submodulo/persona_modulo_submodulo.module';
// import { ModulosModule } from './modulos/modulos.module';
// import { TiposPlantillaModule } from './tipos_plantilla/tipos_plantilla.module';
// import { TipoEntidadModule } from './tipo_entidad/tipo_entidad.module';
// import { AfpModule } from './afp/afp.module';
// import { ProgramasModule } from './programas/programas.module';
// import { ContadorPersonaModule } from './contador_persona/contador_persona.module';
import { UsersModule } from './users/users.module';
// import { ContableProgramaModule } from './contable_programa/contable_programa.module';
// import { UsuarioPersonaModule } from './usuario_persona/usuario_persona.module';
// import { PaginaCuidadModule } from './pagina_cuidad/pagina_cuidad.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DOCKER_DB_PORT,
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_ROOT_PASSWORD,
  MYSQL_USER,
} from './utils/config/envs.config';

class LoggerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

@Module({
  imports: [
    LoggerModule,
    // CamaraComercioModule,
    // SuperintendenciaModule,
    // CcfModule,
    // CuidadModule,
    // AlcaldiaModule,
    // PersonaModule,
    // ArlModule,
    // DianModule,
    // PersonaRepresentanteModule,
    // PlanillaSsModule,
    // EpsModule,
    // CorreosModule,
    // ContableModule,
    // PersonaModuloSubmoduloModule,
    // ModulosModule,
    // TiposPlantillaModule,
    // TipoEntidadModule,
    // AfpModule,
    // ProgramasModule,
    // ContadorPersonaModule,
    UsersModule,
    // ContableProgramaModule,
    // UsuarioPersonaModule,
    // PaginaCuidadModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: MYSQL_HOST,
      port: DOCKER_DB_PORT,
      username: MYSQL_USER,
      password: MYSQL_ROOT_PASSWORD,
      database: MYSQL_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
