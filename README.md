# PrismaProvider

I'm using [Prisma](https://github.com/prisma/prisma) with [discord.js](https://github.com/discordjs/discord.js) and [discord-akairo](https://github.com/discord-akairo), since discord-akairo does not yet natively support a Prisma provider, I made this one! Nothing special, all I did was copy the SequelizeProvider and update it to use a Prisma delegate instead.

Feel free to use this and make changes, happy to accept pull requests if I've messed something up or overlooked / misunderstood something.

## Installation
Ensure you have the [Prisma Client](https://github.com/prisma/prisma) installed and configured, as well as [discord.js](https://github.com/discordjs/discord.js) and [discord-akairo](https://github.com/discord-akairo) already installed.

```
npm install @psibean/prisma-provider
```

## Usage

```
import { PrismaProvider } from '@psibean/prisma-provider';
```
```
const { PrismaProvider } = require('@psibean/prisma-provider');
```
```
const prisma = new PrismaClient();
const provider = new 
            PrismaProvider(
              prisma.myEntity, 
              { idColumn: "id", 
                dataColumn: "jsonColumnName" 
            });
```
Where prisma.myEntity should return a `MyEntityDelegate`.

One other difference between this provider and the other providers is set, which can take a defaultData value for when it has to create a new record:

```
provider.set(id, key, value, defaultData = { "one": true, "two": "someValue" });
```

If there is no record for the provided id, then a new record will be created that looks like:
```
{ "one": true, "two": "someValue", [key]: value } 
```

If the provided key matches one of the keys in the defaultData the passed value will overwrite the default.

It otherwise works the same as the other providers, the only difference is instead of taking the actual model / entity, it takes the delegate instead.