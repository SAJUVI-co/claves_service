import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './logger/logger.middleware';
import { UserServiceModule } from './user_service/user_service.module';
import { ClavesModule } from './claves/claves.module';
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

class LoggerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

@Module({
  imports: [
    LoggerModule,
    UserServiceModule,
    ClavesModule,
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
  ],
})
export class AppModule {}
