import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {
        unique: true,
    })
    title: string;

    @Column({
        type: 'varchar',
        unique: true
    })
    slug: string;

    @Column({
        type: 'text',
        nullable: true
    })
    description: string;

    @Column('numeric', {
        precision: 10,
        scale: 2,
        default: 0.00
    })
    price: number;

    @Column({
        type: 'int',
        default: 0
    })
    stock: number;

    @Column({
        type: 'text',
        array: true
    })
    sizes: string[];

    @Column({
        type: 'text'
    })
    gender: string;
}
