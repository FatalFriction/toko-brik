# About
Web application Sebuah toko klontong ingin masuk ke abad 21, mereka ingin menjual barang mereka online.

# Prerequisites
    -Semua payload untuk request dan response adalah JSON.
    -skema data.
    -data sekitar 100 produk yang butuh di manage, gunakan teknik paginasi.

    -Halaman-halaman yang ditetapkan:
    -List semua produk
    -Detil produk
    -Tambah produk
    -Login/Register

# Built with
1. [Frontend]:
    -[Next.js](https://nextjs.org/): A server-rendered React framework for performance and flexibility.
    -[React.js](https://reactjs.org/): The core JavaScript library for building interactive user interfaces.
    -[Shadcn](https://ui.shadcn.com/): Beautiful designed components framework library. Accessible. Customizable Open Source.
    -[TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework for rapid styling.

2. [Backend]:
    -[Next.js](https://nextjs.org/): A server-rendered React framework for performance and flexibility.
    -[Nodejs](https://nodejs.org/en): server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services
    -[Docker](https://www.docker.com/): a software platform that allows you to build, test, and deploy applications quickly.

3. [Database]:
    -[Prisma](https://www.prisma.io/): A database ORM and migration tool for Prisma databases.
    -[PrismaClient](https://www.prisma.io/docs/orm/prisma-client): TypeScript-based Prisma client for interacting with Prisma databases.
    -[PrismaAdapter](https://authjs.dev/reference/adapter/prisma): specifically tailored for integrating Prisma with authentication libraries, such as NextAuth.js.
    -[PostgreSQL](https://www.postgresql.org/): often referred to as Postgres, is a powerful, open-source relational database management system (RDBMS) known for its reliability, robust feature set, and extensibility.

# Technology
1. [Authentication]:
    -[NextAuth.js] (https://next-auth.js.org/): Authentication and authorization provider for Next.js apps, supporting various social providers and email/password authentication.
    -[Bcrypt](https://www.npmjs.com/package/bcrypt): Password hashing library for secure password storage.
    -[JWT Tokens](https://jwt.io/): JSON Web Tokens used for session management and user authentication.

2. [FormHandling]:
    -[ReactHookForm(RHF)] (https://react-hook-form.com/): Hooks-based form handling library for managing form state and validation.

3. [Validator]:
    -[Zod](https://zod.dev/): Validation library for ensuring data correctness.

4. [Notable]:
    -[TypeScript](https://www.typescriptlang.org/): Superset of JavaScript adding static typing for more robust code.
    -[Sonner](https://ui.shadcn.com/docs/components/sonner): A small JSON server library, possibly used for development or API prototyping.
    -[dotenv](https://www.npmjs.com/package/dotenv): Environment variable management library for storing sensitive information.
    -[Tanstack/Table](https://tanstack.com/table/latest): A library for building flexible and customizable tables in React applications.
    -[FakerJs](https://fakerjs.dev/): open-source library used to generate realistic fake data for testing and development purposes.

# .env.development
    POSTGRES_PRISMA_URL="postgresql://root:pawned@localhost:6500/brik_dev"
    POSTRES_URL_NON_POOLING=""


    NEXTAUTH_URL="http://localhost:3000"

    ##Generated using openssl rand -base64 32
    NEXTAUTH_SECRET="rX6uAAoLUgwThX98tTyioBeL8OxgpfP4iNxJr0f3Mt4="

# Before you Start Make sures you have access to pnpm & docker

--Installation--
## Pnpm Installation Guide

Using npm
----------
We provide two packages of pnpm CLI, pnpm and @pnpm/exe.

pnpm is a ordinary version of pnpm, which needs Node.js to run.
@pnpm/exe is packaged with Node.js into an executable, so it may be used on a system with no Node.js installed.

    npm install -g pnpm

or

    npm install -g @pnpm/exe

reference doc for details : https://pnpm.io/installation

## Docker Installation Guide

visit following reference: https://www.docker.com/

--Usage--
## Getting Started
    First, Run Visual Studio Code
    then, run `docker compose up` on your terminal

# Database Migrate
    run `pnpm db:migrate` to migrate all schema

# Database Seed
    run `pnpm db:seed` to seed the database

# Database GUI
    run `pnpm db:studio` to access prisma studio gui

# Database Wipe --WARNING USE IT AT YOUR OWN RISK--
    run `pnpm db:wipe` to reset all data

--Project--
# to run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing Flow
    1. once the project running you will have to authenticate yourself 
        note: first time run you will have to register yourself before you can sign in
    2. to get access simply sign yourself using email and password
    3. once you get into home page you will have access to all products
    4. in order to find products, i provided a search products method: type and find
        note: another options i provided is ability to sort based on products name & price simply pres the arror icon on the table header
    5. click add product button to add product
        5.1 input all required information 
        5.2 makesure on dimensions and price form you have all value set without 0 as prefix i.e `012` or `020`
        5.3 to upload an image simply choose file and select
            note: -SKU must contain 4 character
                  -Price field must at least 1 digit
                  -maximum of value for the rest of value are 100
        5.4 to register the product just click add product button
        5.5 if you find yourself wanting to reset all value just click outside of the dialog / click `x` icon on top right corner
    6. once you finish adding your product, system will give you notification
        note: please reload once you register your product to update the product from the database
    7. i have added Columns feature where you can toggle visibility of certain data columns i.e hiding/      
       showing name column
    8. to look for details click details button to pop the details information of products
        8.1 for mobile user please swipe the table until you find the details button alternatively you can utilise column button to hide all columns except for details and name
    9. to sign out find the sign out button on top right corner

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.