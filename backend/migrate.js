const migration = require('./src/migrations/0000000000001-seed-trails.js');

async function run() {
  try {
    await migration.down();
    await migration.up();
    console.log("Migration completed!");
    process.exit(0);
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
}

run();
