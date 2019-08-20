export interface Locationdata {
    userId: number;
    firstName: string;
    lastName: string;
    locations: 
    {
        locationId: number;
        name: string;
        longitude: number;
        latitude:number;
        userId:number;
    };    
}
