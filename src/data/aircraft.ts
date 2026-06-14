export type AircraftCategory='General Aviation'|'Regional Jet'|'Commercial Airliner'|'Cargo Aircraft';
export type Aircraft={id:string;name:string;category:AircraftCategory;massKg:number;wingAreaM2:number;maxThrustN:number;cruiseKt:number;stallKt:number;fuelKg:number;climbFpm:number;ceilingFt:number;description:string};
export const AIRCRAFT:Aircraft[]=[
{id:'c172',name:'Cessna 172',category:'General Aviation',massKg:1110,wingAreaM2:16.2,maxThrustN:1800,cruiseKt:122,stallKt:48,fuelKg:212,climbFpm:730,ceilingFt:14000,description:'Forgiving trainer with analog and glass training profiles.'},
{id:'sr22',name:'Cirrus SR22',category:'General Aviation',massKg:1633,wingAreaM2:13.5,maxThrustN:2500,cruiseKt:183,stallKt:60,fuelKg:348,climbFpm:1270,ceilingFt:17500,description:'High-performance piston single with fast cruise.'},
{id:'da40',name:'Diamond DA40',category:'General Aviation',massKg:1200,wingAreaM2:13.6,maxThrustN:1700,cruiseKt:147,stallKt:49,fuelKg:150,climbFpm:1120,ceilingFt:16400,description:'Efficient trainer with crisp handling.'},
{id:'e175',name:'Embraer E175',category:'Regional Jet',massKg:38790,wingAreaM2:72.7,maxThrustN:126000,cruiseKt:447,stallKt:112,fuelKg:9420,climbFpm:2400,ceilingFt:41000,description:'Regional airline jet for short IFR sectors.'},
{id:'crj900',name:'Bombardier CRJ900',category:'Regional Jet',massKg:38330,wingAreaM2:70.6,maxThrustN:129000,cruiseKt:447,stallKt:118,fuelKg:8880,climbFpm:2500,ceilingFt:41000,description:'Regional jet with high approach workload.'},
{id:'a320neo',name:'Airbus A320neo',category:'Commercial Airliner',massKg:79000,wingAreaM2:122.6,maxThrustN:240000,cruiseKt:450,stallKt:136,fuelKg:24210,climbFpm:3000,ceilingFt:39000,description:'Modern narrow-body with ECAM-style monitoring.'},
{id:'a350',name:'Airbus A350-900',category:'Commercial Airliner',massKg:280000,wingAreaM2:443,maxThrustN:748000,cruiseKt:488,stallKt:155,fuelKg:110000,climbFpm:2600,ceilingFt:43100,description:'Long-haul wide-body with fly-by-wire behavior.'},
{id:'a380',name:'Airbus A380-800',category:'Commercial Airliner',massKg:575000,wingAreaM2:845,maxThrustN:1240000,cruiseKt:488,stallKt:150,fuelKg:254760,climbFpm:2200,ceilingFt:43100,description:'Superjumbo with huge inertia and runway needs.'},
{id:'b737max8',name:'Boeing 737 MAX 8',category:'Commercial Airliner',massKg:82190,wingAreaM2:127,maxThrustN:260000,cruiseKt:453,stallKt:135,fuelKg:20890,climbFpm:3000,ceilingFt:41000,description:'Airline workhorse with FMC route operations.'},
{id:'b789',name:'Boeing 787-9',category:'Commercial Airliner',massKg:254000,wingAreaM2:377,maxThrustN:640000,cruiseKt:488,stallKt:145,fuelKg:101000,climbFpm:2600,ceilingFt:43100,description:'Efficient long-haul twinjet.'},
{id:'b773er',name:'Boeing 777-300ER',category:'Commercial Airliner',massKg:351500,wingAreaM2:436.8,maxThrustN:1026000,cruiseKt:488,stallKt:150,fuelKg:145500,climbFpm:2500,ceilingFt:43100,description:'Heavy long-range twin with powerful engines.'},
{id:'b748f',name:'Boeing 747-8F',category:'Cargo Aircraft',massKg:447700,wingAreaM2:554,maxThrustN:1184000,cruiseKt:493,stallKt:160,fuelKg:180000,climbFpm:2200,ceilingFt:43100,description:'Large cargo aircraft with heavy takeoff roll.'},
{id:'beluga',name:'Airbus Beluga',category:'Cargo Aircraft',massKg:155000,wingAreaM2:260,maxThrustN:280000,cruiseKt:430,stallKt:145,fuelKg:47000,climbFpm:1800,ceilingFt:35000,description:'Oversize cargo aircraft with unique handling.'}
];
export const defaultAircraft=AIRCRAFT.find(a=>a.id==='b737max8')!;
