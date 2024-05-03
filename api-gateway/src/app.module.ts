import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

/* 
        * API gateway
        is one of the services in a microservices architecture that connects 
        the client-side and external application to the internal services.

        API gateway handles the routing, transforming and aggregating request
        data, and implementing shared logic like authentication and rate-limiters.

        * Flow: 
        
        User(make request) ---> [host]/api/auth/signup ---> API gateway (take it
        and send "create_user" event via "Kafka") ---> Auth Microservice (handle this event)

        
*/

@Module({
  imports: [
    ClientsModule.register({
      clients: [
        {
          transport: Transport.REDIS,
          name: 'MATH_SERVICE',
          options: {
            host: 'localhost',
            port: 6379,
          },
        },
        {
          transport: Transport.REDIS,
          name: 'ANOTHER_SERVICE',
          options: {
            host: 'localhost',
            port: 6379,
          },
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
