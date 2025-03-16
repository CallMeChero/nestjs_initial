import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable() // AKO OVO NE STAVIMO NECE IC U DI - drugim rijecima nece se re-use ako ima vise instanci
export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8')
        console.log(contents)
        const messages = JSON.parse(contents);
        console.log(messages[id])
        return messages[id];
    }

    async findAll() {
        const contents = await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contents);

        return messages;
    }

    async create(content: string) {
        const contents = await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);

        messages[id] = { id, content }

        await writeFile('messages.json', JSON.stringify(messages))
    }
}