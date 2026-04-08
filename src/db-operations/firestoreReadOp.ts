import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

type FacilityRequirement = {
    facility: string,
    level: number;
}

type FacilityLevelData = {
    items: Record<string,number>,
    requirements: FacilityRequirement[];
}

type FacilityData = {
    level1?:FacilityLevelData;
    level2?:FacilityLevelData;
    level3?:FacilityLevelData;
    level4?:FacilityLevelData;
    level5?:FacilityLevelData;
    level6?:FacilityLevelData;
}

type FacilityDocument = {
    id: string;
} & FacilityData;


export async function getAllFacilities(): Promise<FacilityDocument[]>{
    const data = await getDocs(collection(db,"facilities"));
    return data.docs.map((dataSnap) => ({
        id:dataSnap.id,
        ...(dataSnap.data() as FacilityData),
    }));
} 