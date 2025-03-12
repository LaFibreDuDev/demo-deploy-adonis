import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'posts';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('title');
            table.string('content');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1739307913628_create_posts_table.js.map