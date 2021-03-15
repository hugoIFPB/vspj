const Sequelize = require("sequelize");
const db = require("./db");
const HQ = require("./model/HQ");

async function sincronizar() {
  await db.sync();
}

async function inserir() {
  await HQ.create({titulo:"Conseguimos!!!"});
}

async function consultar() {
  const hq = await HQ.findAll();
  console.log(hq);
}

// sincronizar();
// inserir();
consultar();