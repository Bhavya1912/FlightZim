export type WeatherPreset={id:string;name:string;windDir:number;windKt:number;turbulence:number;visibility:number;precipitation:'none'|'rain'|'snow'|'storm';icing:boolean;description:string};
export const WEATHER:WeatherPreset[]=[
{id:'vfr',name:'Clear VFR',windDir:270,windKt:12,turbulence:.05,visibility:60,precipitation:'none',icing:false,description:'High visibility and light winds.'},
{id:'crosswind',name:'Strong Crosswind',windDir:320,windKt:28,turbulence:.18,visibility:35,precipitation:'none',icing:false,description:'Demanding takeoff and landing with gusts.'},
{id:'storm',name:'Thunderstorm',windDir:190,windKt:35,turbulence:.38,visibility:12,precipitation:'storm',icing:false,description:'Convective turbulence, lightning, heavy rain.'},
{id:'fog',name:'Fog + ILS',windDir:80,windKt:6,turbulence:.04,visibility:2,precipitation:'none',icing:false,description:'Low visibility instrument approach practice.'},
{id:'snow',name:'Snow + Icing',windDir:30,windKt:18,turbulence:.16,visibility:8,precipitation:'snow',icing:true,description:'Winter operations with icing risk.'}
];
export const MISSIONS=[
{type:'Passenger Flight',goal:'Fly KJFK to KBOS while optimizing comfort, fuel, schedule, ATC compliance, and landing rate.'},
{type:'Cargo Flight',goal:'Deliver priority freight with strict fuel and time targets.'},
{type:'Medical Evacuation',goal:'Fly a smooth priority route and avoid high G loads.'},
{type:'Firefighting',goal:'Perform low-level terrain-aware water drops.'},
{type:'Search and Rescue',goal:'Fly search grids, conserve fuel, and mark targets.'},
{type:'VIP Transport',goal:'Maximize passenger comfort and punctuality.'}
];
export const AIRLINES=['United','Delta','American','British Airways','Lufthansa','Emirates','Qatar','Air India','IndiGo'];
export const ROUTE={origin:'KJFK',destination:'KBOS',sid:'MERIT',star:'ROBUC',approach:'ILS 04R',waypoints:['JFK','MERIT','HFD','ROBUC','BOS']};
