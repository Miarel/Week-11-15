import * as SQLite from 'expo-sqlite';

// Database instance with initialization flag
let db;
let isInitialized = false;

// Initialize the database
const initDatabase = async () => {
  try {
    if (isInitialized) return db;
    
    // Open database connection
    db = await SQLite.openDatabaseAsync('FoodJournal.db');
    
    // Create tables
    await db.execAsync('PRAGMA journal_mode = WAL');
    
    await db.withTransactionAsync(async () => {
      await db.execAsync(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          email TEXT UNIQUE, 
          password TEXT
        );`
      );
      
      await db.execAsync(
        `CREATE TABLE IF NOT EXISTS journals (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          userId INTEGER, 
          image TEXT, 
          name TEXT,
          date TEXT, 
          category TEXT, 
          rating TEXT,
          description TEXT, 
          FOREIGN KEY(userId) REFERENCES users(id)
        );`
      );
    });
    
    isInitialized = true;
    console.log('Database initialized successfully');
    return db;
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
};

// Execute SQL queries with automatic initialization
const executeSql = async (query, params = []) => {
  try {
    if (!isInitialized) {
      await initDatabase();
    }
    

      return await db.runAsync(query, params);

  } catch (error) {
    console.error('SQL execution error:', error);
    throw error;
  }
};

const getAllSql = async (query, params = []) => {
  try {
    if (!isInitialized) {
      await initDatabase();
    }
    
    return await db.getAllAsync(query, params);

  } catch (error) {
    console.error('SQL getting data error:', error);
    throw error;
  }
};

const runQuery = async (query, params = []) => {
  try {
    if (!isInitialized) {
      await initDatabase();
    }
    return await db.runAsync(query, params);
  } catch (error) {
    console.error('SQL mutation error:', error);
    throw error;
  }
};
export { initDatabase, executeSql, getAllSql, runQuery };