import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.entity';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { OrderItem } from './orders/entities/order-item';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      //{
      // type: 'sqlite',
      // database: 'db.sqlite',
      // synchronize: true,
      // migrations: [],
      // entities: [Customer, Product, Order, OrderItem, User],
      //}
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'db-project',
        password: 'Pass1234',
        database: 'db-project',
        entities: [Customer, Product, Order, OrderItem, User],
        synchronize: true,
      },
    ),
    CustomersModule,
    ProductsModule,
    OrdersModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
