import { conn } from './db.js'

// conn`DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log('Tabela apagada')
// })

conn`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
);
`.then(() => {
    console.log('Tabela Criada!')
})