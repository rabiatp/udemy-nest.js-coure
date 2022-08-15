import { AuditModel } from "./audit.model";
import { GroupModel } from "./group.model";
import { RoleModel } from "./role.model";

export class UserModel{
    id: String;
    name: String;
    surname: String;
    image: String;
    email: String;
    password: String;
    passwordHash: String;
    audit: AuditModel;
    rotes: RoleModel[]
    groups: GroupModel[]
}