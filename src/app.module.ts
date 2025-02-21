import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './logger/logger.middleware';
import { CamaraComercioModule } from './camara_comercio/camara_comercio.module';
import { SuperintendenciaModule } from './superintendencia/superintendencia.module';
import { CcfModule } from './ccf/ccf.module';
import { PaginaCuidadModule } from './pagina_cuidad/pagina_cuidad.module';
import { AlcaldiaModule } from './alcaldia/alcaldia.module';
import { PersonaModule } from './persona/persona.module';
import { ArlModule } from './arl/arl.module';
import { DianModule } from './dian/dian.module';
import { PersonaRepresentanteModule } from './persona_representante/persona_representante.module';
import { PlanillaSsModule } from './planilla_ss/planilla_ss.module';
import { EpsModule } from './eps/eps.module';
import { CorreosModule } from './correos/correos.module';
import { ContableModule } from './contable/contable.module';
import { PersonaModuloSubmoduloModule } from './persona_modulo_submodulo/persona_modulo_submodulo.module';
import { ModulosModule } from './modulos/modulos.module';
import { TiposPlantillaModule } from './tipos_plantilla/tipos_plantilla.module';
import { TipoEntidadModule } from './tipo_entidad/tipo_entidad.module';
import { AfpModule } from './afp/afp.module';
import { ProgramasModule } from './programas/programas.module';
import { ContadorPersonaModule } from './contador_persona/contador_persona.module';
import { UsersModule } from './users/users.module';
import { ContableProgramaModule } from './contable_programa/contable_programa.module';

class LoggerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

@Module({
  imports: [
    LoggerModule,
    CamaraComercioModule,
    SuperintendenciaModule,
    CcfModule,
    PaginaCuidadModule,
    AlcaldiaModule,
    PersonaModule,
    ArlModule,
    DianModule,
    PersonaRepresentanteModule,
    PlanillaSsModule,
    EpsModule,
    CorreosModule,
    ContableModule,
    PersonaModuloSubmoduloModule,
    ModulosModule,
    TiposPlantillaModule,
    TipoEntidadModule,
    AfpModule,
    ProgramasModule,
    ContadorPersonaModule,
    UsersModule,
    ContableProgramaModule,
  ],
})
export class AppModule {}
