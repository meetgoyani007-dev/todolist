module.exports = (sequelize, Sequelize, DataTypes) => {
  const ads = sequelize.define(
    "tbl_ads", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ad_id: {
        type: DataTypes.TEXT,
        unique: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        unique: true,
      },
      page_name: {
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

  return ads;
};
