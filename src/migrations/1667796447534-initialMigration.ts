import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1667796447534 implements MigrationInterface {
    name = 'initialMigration1667796447534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "UQ_605baeb040ff0fae995404cea37" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_605baeb040ff0fae995404cea37" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_605baeb040ff0fae995404cea37"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "UQ_605baeb040ff0fae995404cea37"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "userId"`);
    }

}
