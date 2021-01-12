declare module "@psibean/prisma-provider" {
  import { Collection } from "discord.js";
  import { Provider, ProviderOptions } from "discord-akairo";

  export class PrismaProvider extends Provider {
    public constructor(delegate: any, options?: ProviderOptions);

    public dataColumn?: string;
    public idColumn: string;
    public items: Collection<string, any>;
    public delegate: any;

    public clear(id: string): Promise<void>;
    public delete(id: string, key: string): Promise<boolean>;
    public get(id: string, key: string, defaultValue: any): any;
    public init(): Promise<void>;
    public set(id: string, key: string, value: any, defaultData?: object): Promise<boolean>;
  }
}