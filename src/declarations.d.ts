declare module "*.png";
declare namespace __WebpackModuleApi {
  interface RequireContext {
    keys: () => string[];
    <T>(id: string): T;
  }
}
