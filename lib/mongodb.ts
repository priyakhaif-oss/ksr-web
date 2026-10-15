import {MongoClient,Db} from "mongodb";
const uri=process.env.MONGODB_URI;
if(!uri) throw new Error("Missing MONGODB_URI environment variable.");
declare global {var _mongoClientPromise:Promise<MongoClient>|undefined}
let client:MongoClient;let clientPromise:Promise<MongoClient>;
if(process.env.NODE_ENV==="development"){if(!global._mongoClientPromise){client=new MongoClient(uri);global._mongoClientPromise=client.connect()}clientPromise=global._mongoClientPromise}
else{client=new MongoClient(uri);clientPromise=client.connect()}
export default clientPromise;
export async function getDb():Promise<Db>{return (await clientPromise).db(process.env.MONGODB_DB||"ksr_diary_foods")}
