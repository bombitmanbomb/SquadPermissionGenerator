import { PermissionGroup } from '../src/PermissionGroup';
import { SquadPermissions } from '../src/SquadPermissions';

//* Constants
const group_id = "Adminstrator";
const user_id1 = "76561198084108249";
const user_id2 = "76561198084108245";
const invalid_user_id = "abcdefg"
describe("New Group",()=>{
  test("Valid Data",()=>{
    expect(()=>new PermissionGroup(group_id)).not.toThrow()
  })
  test("Invalid Data", ()=>{
    expect(()=>new PermissionGroup("Yankee Candle")).toThrow()
  })
})
//* Tests
describe("Add User", ()=>{
  test("add user string", ()=>{
    const perms = new PermissionGroup(group_id)
    perms.addUser(user_id1)
    expect(perms.users.has(user_id1)).toBeTruthy();
  })
  test("add invalid user string", ()=>{
    const perms = new PermissionGroup(group_id)
    expect(()=>perms.addUser(invalid_user_id)).toThrow()
  })
  test("add user twice", ()=>{
    const user_id = "76561198084108249"
    const perms = new PermissionGroup(group_id)
    perms.addUser(user_id1)
    expect(perms.users.has(user_id1)).toBeTruthy();
    expect(()=>perms.addUser(user_id1)).toThrow()
  })
  test("add two users", ()=>{
    const perms = new PermissionGroup(group_id)
    perms.addUser(user_id1)
    expect(perms.users.has(user_id1)).toBeTruthy();
    perms.addUser(user_id2)
    expect(perms.users.has(user_id2)).toBeTruthy();
  })
  test("add Multiple users",()=>{
    const perms = new PermissionGroup(group_id);
    perms.addUser([user_id1, user_id2])
    expect(perms.users.has(user_id1)).toBeTruthy();
    expect(perms.users.has(user_id2)).toBeTruthy();
  })
})

describe("Add Permission", ()=>{
  test("add Permission", ()=>{
    const perms = new PermissionGroup(group_id)
    perms.addPermission(SquadPermissions.Balance)
    expect(perms.permissions.has(SquadPermissions.Balance)).toBeTruthy();
  })
  test("add Permission twice", ()=>{
    const user_id = "76561198084108249"
    const perms = new PermissionGroup(group_id)
    perms.addPermission(SquadPermissions.Balance)
    expect(perms.permissions.has(SquadPermissions.Balance)).toBeTruthy();
    expect(()=>perms.addPermission(SquadPermissions.Balance)).toThrow()
  })
  test("add two Permissions", ()=>{
    const perms = new PermissionGroup(group_id)
    perms.addPermission(SquadPermissions.Balance)
    expect(perms.permissions.has(SquadPermissions.Balance)).toBeTruthy();
    perms.addPermission(SquadPermissions.Ban)
    expect(perms.permissions.has(SquadPermissions.Ban)).toBeTruthy();
  })
  test("add Multiple permissions",()=>{
    const perms = new PermissionGroup(group_id);
    perms.addPermission([SquadPermissions.Balance, SquadPermissions.Ban])
    expect(perms.permissions.has(SquadPermissions.Balance)).toBeTruthy();
    expect(perms.permissions.has(SquadPermissions.Ban)).toBeTruthy();
  })
})
