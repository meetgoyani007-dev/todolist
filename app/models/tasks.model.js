module.exports = (sequelize, Sequelize, DataTypes) => {
  const Task = sequelize.define(
    "tasks", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.TEXT,
        unique: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        unique: true,
      },
       user_id: {
        type: DataTypes.INTEGER
      }
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Task;
};
