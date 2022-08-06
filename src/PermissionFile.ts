import { PermissionGroup } from './PermissionGroup';
import { SquadPermissions } from './SquadPermissions';
export class PermissionFile {
  public groups: Map<string, PermissionGroup>;
  constructor() {
    this.groups = new Map;
  }
  /**
   * Create a new permission group
   * @param {string} id /^[a-zA-Z0-9]*$/gi
   */
  public createGroup(id: string, permissions?: Parameters<this["addPermission"]>["1"] | null, users?: Parameters<this["addUser"]>["1"] | null) {
    if (!this.groups.has(id)) {
      const group = new PermissionGroup(id)
      this.groups.set(id, group);
    } else throw new Error(`group "${id}" already exists`)
    if (permissions != null) this.addPermission(id, permissions)
    if (users != null) this.addUser(id, users)
  }
  /**
   * Add a User or group of Users to a permission group
   */
  public addUser(group: string, user: string | string[] | Set<string>) {
    this.groups.get(group)?.addUser(user as string)
  }
  /**
   * Add a permission or group of permissions to a permission group
   */
  public addPermission(group: string, permission: SquadPermissions | SquadPermissions[] | Set<SquadPermissions>) {
    this.groups.get(group)?.addPermission(permission as SquadPermissions)
  }

  public toString(): string {
    let permissionFile = ""
    this.groups.forEach(group => permissionFile += (group.toString() + "\n"))
    return permissionFile
  }
}
