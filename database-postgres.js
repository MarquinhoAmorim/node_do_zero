import { randomUUID } from "node:crypto"
import { conn } from './db.js'

export class DatabasePostgres {
    #videos = new Map()


    async list(search) {
       let videos  
        
       if (search) {
            videos = await conn`select * from videos where title like ${'%' +search+ '%'}`
       } else {
            videos = await conn`select * from videos`
       }

       return videos
    }

    async create(video) {
        const videoId = randomUUID()
        const { title, description, duration} = video

        await conn`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`
    }

    async update(id, video){
        const { title, description, duration} = video

        await conn`update videos set title = ${title}, description = ${description}, duration = ${duration}`
    }

    async delete(id){
        await conn`delete from videos where id = ${id}`
    }
}