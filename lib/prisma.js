import { PrismaClient } from "@prisma/client";

let prisma;
// Checking if the app is running
// if its runnning it will then create a new instance of prisma client that can interat with the database
if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()

}
// else if not running it will check if there is a existing client and set to global so it can share that instance across different parts of the codebase
else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}

export default prisma;