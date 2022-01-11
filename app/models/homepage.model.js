module.exports = (sequelize, Sequelize, DataTypes) => {
  const HomepageText = sequelize.define(
    "homepage_text", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dainik_title: {
        type: DataTypes.TEXT,
      },
      dainik_subtitle: {
        type: DataTypes.TEXT,
      },
      dainik_image: {
        type: DataTypes.TEXT,
      },
      saptahic_title: {
        type: DataTypes.TEXT,
      },
      saptahic_subtitle: {
        type: DataTypes.TEXT,
      },
      saptahic_image: {
        type: DataTypes.TEXT,
      },
      masic_title: {
        type: DataTypes.TEXT,
      },
      masic_subtitle: {
        type: DataTypes.TEXT,
      },
      masic_image: {
        type: DataTypes.TEXT,
      },
      varshik_title: {
        type: DataTypes.TEXT,
      },
      varshik_subtitle: {
        type: DataTypes.TEXT,
      },
      varshik_image: {
        type: DataTypes.TEXT,
      },
      samachar_gujarat: {
        type: DataTypes.TEXT,
      },
      samachar_bharat: {
        type: DataTypes.TEXT,
      },
      samachar_videsh: {
        type: DataTypes.TEXT,
      },
      bhagvan_img_url: {
        type: DataTypes.TEXT,
      },
      mataji_img_url: {
        type: DataTypes.TEXT,
      },
      sant_img_url: {
        type: DataTypes.TEXT,
      },
      suvichar: {
        type: DataTypes.TEXT,
      },
      slok: {
        type: DataTypes.TEXT,
      },
      prerna_dayak_vaky: {
        type: DataTypes.TEXT,
      },
      gita_gyan: {
        type: DataTypes.TEXT,
      },
      chanakya_niti: {
        type: DataTypes.TEXT,
      },
      ajb_gajab: {
        type: DataTypes.TEXT,
      },
      jokes: {
        type: DataTypes.TEXT,
      },
      shayri: {
        type: DataTypes.TEXT,
      },
      dainik_date: {
        type: DataTypes.STRING,
      },
      saptahic_date: {
        type: DataTypes.STRING,
      },
      masic_date: {
        type: DataTypes.STRING,
      },
      varshik_date: {
        type: DataTypes.STRING,
      },
      ads: {
        type: DataTypes.STRING,
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

  return HomepageText;
};
