import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'animal'
})
export default class Animal extends Model<Animal> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  name: string

  @Column
  weight: number
}