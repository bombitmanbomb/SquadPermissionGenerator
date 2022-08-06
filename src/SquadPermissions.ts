export enum SquadPermissions {
  /**Map commands*/
  ChangeMap = "changemap",
  /**This group can see the admin chat + teamkills*/
  CanSeeAdminChat = "canseeadminchat",
  /**This group can switch teams regardless of team sizes*/
  Balance = "balance",
  /**Match commands*/
  Pause = "pause",
  /**Access to some cheat commands*/
  Cheat = "cheat",
  /**Set server private*/
  Private = "private",
  /**Admin chat*/
  Chat = "chat",
  /**kick commands*/
  Kick = "kick",
  /**ban commands*/
  Ban = "ban",
  /**Set server configuration*/
  Config = "config",
  /**Cannot be kicked or banned*/
  Immune = "immune",
  /**Manage server / kill server*/
  ManageServer = "manageserver",
  /**Spectate players*/
  CameraMan = "cameraman",
  /**Debug commands like Vehicle Spawner*/
  FeatureTest = "featuretest",
  /**Allows forced team changes*/
  ForceTeamChange = "forceteamchange",
  /**Reserved slot access*/
  Reserve = "reserve",
  /**Record demo's (currently broken)*/
  Demos = "demos",
  /**Debug commands*/
  Debug = "debug",
  /**Change teams without penalty*/
  TeamChange = "teamchange"
}
