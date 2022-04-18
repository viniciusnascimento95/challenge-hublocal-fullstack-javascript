import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateResponsibleCompany1650247209517
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'responsible_company',
        columns: [
          {
            name: 'company_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'responsible_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'is_main',
            type: 'boolean',
            default: false,
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
        ],
        foreignKeys: [
          {
            name: 'CompanyResponsibleFK',
            referencedTableName: 'companies',
            referencedColumnNames: ['id'],
            columnNames: ['company_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'ResponsibleCompanyFK',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['responsible_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('responsible_company');
  }
}
