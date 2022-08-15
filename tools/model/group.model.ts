import { AuditModel } from './audit.model';
import { RoleModel } from './role.model';

export class GroupModel {
  _id: string;
  name: string;
  description: string;
  audit: AuditModel;
  roles: RoleModel[];
}