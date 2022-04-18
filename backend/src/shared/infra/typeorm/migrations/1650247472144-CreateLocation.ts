import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateLocation1650247472144 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'locations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'public_place',
            type: 'varchar',
          },
          {
            name: 'complement',
            type: 'varchar',
          },
          {
            name: 'district',
            type: 'varchar',
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'state',
            type: 'varchar',
          },
          {
            name: 'number',
            type: 'varchar',
          },
          {
            name: 'cep',
            type: 'varchar',
          },
          {
            name: 'company_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'created_by',
            type: 'uuid',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'CompanyPlaceFK',
            referencedTableName: 'companies',
            referencedColumnNames: ['id'],
            columnNames: ['company_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'UserPlaceFK',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['created_by'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('locations');
  }
}
