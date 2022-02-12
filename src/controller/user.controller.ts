import { Request, Response } from "express";
import { Get, Route } from "tsoa";

interface UserResponse{
    nome:string;
}


@Route('user')
export class UserController {

    static getAll(req: Request, res: Response) {
        res.send(UserController._getAll());
    }

    @Get("/")
    static _getAll(): UserResponse[] {
        return [
            {
                nome: "Gabriel"
            },
            {
                nome: "Evaldo 2"
            }
        ]
    }




}