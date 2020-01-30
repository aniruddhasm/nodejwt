module.exports = {
  fetchAllRecords: (tableName) => {
    return `SELECT * FROM ${tableName};`
  },

  fetchRecordsByOffsetLimit: (tableName, offset, limit) => {
    return `SELECT * FROM ${tableName} LIMIT ${offset} ${limit};`
  },

  fetchAllRecordsByCondition: (tableName, condition) => {
    return `SELECT * FROM ${tableName} WHERE ${condition};`
  },

  fetchAllRecordsByConditionOffsetLimit: (tableName, condition, offset, limit) => {
    return `SELECT * FROM ${tableName} WHERE ${condition} LIMIT ${offset} ${limit};`
  }
}
