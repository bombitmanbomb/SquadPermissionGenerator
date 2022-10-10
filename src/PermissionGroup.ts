import { SquadPermissions } from "./SquadPermissions"

/**
 * User Permission Group
 */
export class PermissionGroup {
  public readonly id: string
  public readonly permissions: Set<SquadPermissions>
  public readonly users: Set<string>
  constructor(id: string, permissions: (Set<SquadPermissions> | SquadPermissions[]) = [], users: (Set<string> | string[]) = []) {
    if (!(/^[a-zA-Z0-9]*$/g.test(id))) throw new Error(`"${id}" is not a valid GroupId`)
    this.id = `${id}` as const
    this.permissions = permissions instanceof Set ? permissions : new Set(permissions)
    this.users = users instanceof Set ? users : new Set(users)
  }
  /**
   * Add a User(s) to the group. Accepts String, String[], or Set<string>
   * @throws {CustomError} User already exists in the set
   */
  public addUser(users: string[]): void
  public addUser(users: Set<string>): void
  public addUser(user: string): void
  public addUser(user: string | string[] | Set<string>): void {
    if (typeof user === "string") {
      if (!(/^(?<STEAMID64>[0-9]{8,})$/.test(user))) throw new Error(`Invalid Input: ${user} must be a steam64`)
      this.users.add(user)
    } else {
      //Array & Set both use forEach
      user.forEach(newUser => this.addUser(newUser))
    }
  }
  /**
   * Add a Permission(s) to the group. Accepts String, String[], or Set<string>
   * @throws {CustomError} Permission already exists in the set
   */
  public addPermission(permissions: SquadPermissions[]): void
  public addPermission(permissions: Set<SquadPermissions>): void
  public addPermission(permission: SquadPermissions): void
  public addPermission(permission: SquadPermissions | SquadPermissions[] | Set<SquadPermissions>): void {
    if (typeof permission === "string") {
      if (this.permissions.has(permission)) throw new Error(`Duplicate Permission: "${permission}"`)
      this.permissions.add(permission)
      return
    } else {
      //Array & Set both use forEach
      permission.forEach(newPermission => this.permissions.add(newPermission))
    }
  }

	toString() {
		let string = "";
		string += `Group=${this.id}:${new Array(...this.permissions.values()).join(",")}\n`;
		this.users.forEach((user) => {
			string += `Admin=${user}:${this.id}\n`;
		});
		return string;
	}
}
