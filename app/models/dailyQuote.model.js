module.exports = (sequelize, Sequelize, DataTypes) => {
  const DailyQuote = sequelize.define(
    "daily_quote", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quote: {
        type: DataTypes.TEXT,
        unique: true,
      },
      image_url: {
        type: DataTypes.TEXT,
        unique: true,
      },
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return DailyQuote;
};
