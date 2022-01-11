module.exports = (sequelize, Sequelize, DataTypes) => {
  const RashiFal = sequelize.define(
    "rashi_fal", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rashi_name: {
        type: DataTypes.STRING,
        unique: true,
      },
      dainik: {
        type: DataTypes.TEXT,
      },
      dainik_duration: {
        type: DataTypes.STRING,
      },
      dainik_arogya: {
        type: DataTypes.INTEGER,
      },
      dainik_prem: {
        type: DataTypes.INTEGER,
      },
      dainik_karkirdi: {
        type: DataTypes.INTEGER,
      },
      saptahic: {
        type: DataTypes.TEXT,
      },
      saptahic_duration: {
        type: DataTypes.STRING,
      },
      saptahic_arogya: {
        type: DataTypes.INTEGER,
      },
      saptahic_prem: {
        type: DataTypes.INTEGER,
      },
      saptahic_karkirdi: {
        type: DataTypes.INTEGER,
      },
      masic: {
        type: DataTypes.TEXT,
      },
      masic_duration: {
        type: DataTypes.STRING,
      },
      masic_arogya: {
        type: DataTypes.INTEGER,
      },
      masic_prem: {
        type: DataTypes.INTEGER,
      },
      masic_karkirdi: {
        type: DataTypes.INTEGER,
      },
      varshik: {
        type: DataTypes.TEXT,
      },
      varshik_duration: {
        type: DataTypes.STRING,
      },
      varshik_arogya: {
        type: DataTypes.INTEGER,
      },
      varshik_prem: {
        type: DataTypes.INTEGER,
      },
      varshik_karkirdi: {
        type: DataTypes.INTEGER,
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

  return RashiFal;
};
