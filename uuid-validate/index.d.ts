declare module UUIDValidate {
  interface Validate {
    (uuid: string, version?: number): boolean;
  }
}

declare module "uuid-validate" {
  var validate: UUIDValidate.Validate;
  export = validate;
}