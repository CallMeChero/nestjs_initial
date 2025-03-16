import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.respository";

@Injectable()  // AKO OVO NE STAVIMO NECE IC U DI - drugim rijecima nece se re-use ako ima vise instanci
export class MessagesService {

    constructor(
        public readonly _messagesRepo: MessagesRepository
    ) { }

    async findOne(id: string) {
        return this._messagesRepo.findOne(id);
    }

    async findAll() {
        return this._messagesRepo.findAll();
    }

    async create(content: string) {
        return this._messagesRepo.create(content);
    }
}