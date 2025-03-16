import { MessagesRepository } from "./messages.respository";

export class MessagesService {

    constructor(
        private readonly _messagesRepo: MessagesRepository
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