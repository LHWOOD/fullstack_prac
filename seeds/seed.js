const sequelize = require("../config/connection");
const { User } = require("../models");

// const musicData = require("./Music-Seed.json");
const userData = require("./userSeed.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  // const music = await Music.bulkCreate(musicData);
  // console.log("\n----- MUSIC SEEDED -----\n");
  const user = await User.bulkCreate(userData);
  console.log("\n----- GOLDLEADER SEEDED -----\n");

  process.exit(0);
};

seedDatabase();
