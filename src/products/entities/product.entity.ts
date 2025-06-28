import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    unique: true,
  })
  slug: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column('float', {
    default: 0,
  })
  price: number;

  @Column({
    type: 'int',
    default: 0,
  })
  stock: number;

  @Column({
    type: 'text',
    array: true,
  })
  sizes: string[];

  @Column({
    type: 'text',
  })
  gender: string;

  @BeforeInsert()
  checkSlugInsert() {
      if (!this.slug) {
          this.slug = this.title;
      }
      this.slug = this.slug
        .toLowerCase()
        .replace(' ', '-')
        .replaceAll("'", '')
  }
  @BeforeUpdate()
  checkSlugUpdate() {
      this.slug = this.slug
        .toLowerCase()
        .replace(' ', '-')
        .replaceAll("'", '')
    }

}
