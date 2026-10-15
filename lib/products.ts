export type Product={id:string;name:string;description:string;price:number;unit:string;image:string;stock:number;featured?:boolean};
export const starterProducts:Product[]=[
{id:"buffalo-milk",name:"Buffalo Milk",description:"Rich, creamy and naturally satisfying.",price:70,unit:"1 litre",image:process.env.NEXT_PUBLIC_BUFFALO_MILK_IMAGE||"",stock:20,featured:true},
{id:"cow-milk",name:"Cow Milk",description:"Fresh everyday goodness for your family.",price:60,unit:"1 litre",image:process.env.NEXT_PUBLIC_COW_MILK_IMAGE||"",stock:25,featured:true},
{id:"premium-buffalo-milk",name:"Premium Buffalo Milk",description:"Extra creamy milk for a premium experience.",price:90,unit:"1 litre",image:process.env.NEXT_PUBLIC_PREMIUM_BUFFALO_MILK_IMAGE||"",stock:10,featured:true}];
export const fallbackImage=(id:string)=>id==="cow-milk"?"/images/cow-milk.svg":id==="premium-buffalo-milk"?"/images/premium-milk.svg":"/images/buffalo-milk.svg";
