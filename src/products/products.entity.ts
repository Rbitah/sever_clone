import { User } from "src/authentication/entities/authentication.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Products{
    @PrimaryGeneratedColumn('uuid')
    productId:string;

    @Column()
    products_name:string;

    @Column()
    price:number;

    @Column()
    location:string;

    @Column()
    quantity_amount:number;

    @Column()
    quantity_metric:string;

    @Column()
    imageUrl: string;
    @ManyToOne(() => User, (user) => user.products)
    seller: User;


    
}