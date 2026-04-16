import { getDocs, doc, writeBatch} from "firebase/firestore";
import { db } from '../lib/firebase';

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

export const hideoutData = {
    AirFilteringUnit: {
        level1: {
            items: {
                Dollars: 25000,
                GasMaskAirFilter: 5,
                MilitaryPowerFilter: 5,
                MilitaryCorrugatedTube: 10,
            },
            requirements: [
                { facility: "Generator", level: 3 },
                { facility: "Vents", level: 3 },
            ],
        },
    },

    BitcoinFarm: {
        level1: {
            items: {
                TShapedPlug: 10,
                VPXFlashStorageModule: 2,
                PowerCord: 15,
                PowerSupplyUnit: 10,
                CPUFan: 15,
            },
            requirements: [
                { facility: "IntelligenceCenter", level: 2 },
            ],
        },
        level2: {
            items: {
                CPUFan: 15,
                PowerSupplyUnit: 10,
                PrintedCircuitBoard: 15,
                PhaseControlRelay: 10,
                MilitaryPowerFilter: 5,
            },
            requirements: [
                { facility: "Generator", level: 3 },
            ],
        },
        level3: {
            items: {
                CPUFan: 25,
                SiliconeTube: 15,
                ElectricMotor: 10,
                PressureGauge: 10,
                MilitaryBattery: 2,
            },
            requirements: [
                { facility: "SolarPower", level: 1 },
                { facility: "WaterCollector", level: 3 },
            ],
        },
    },

    BoozeGenerator: {
        level1: {
            items: {
                MetalSpareParts: 5,
                PressureGauge: 2,
                RadiatorHelix: 5,
                SiliconeTube: 10,
                PipeGripWrench: 1,
                AnalogThermometer: 2,
                CorrugatedHose: 10,
            },
            requirements: [
                { facility: "WaterCollector", level: 3 },
                { facility: "NutritionUnit", level: 3 },
            ],
        },
    },
    CultistCircle:{
        level1: {
            items:{
                PAIDAntiRoachSpray: 1,
                LightBulb: 5,
                CanOfWhiteSalt: 3,
                SurvLSurvivorLighter: 1,
                ConstructionMeasuringTape: 1,
                WIFICamera: 1,
            },
            requirements:[
                {facility: 'Security', level: 1},
            ]
        },
    },
    Generator: {
        level1: {
            items: {
                Roubles: 100000,
                SparkPlug: 1,
            },
            requirements: [
                { facility: "Security", level: 1 },
            ],
        },
        level2: {
            items: {
                BulbexCableCutter: 1,
                PhaseControlRelay: 10,
                ElectricMotor: 1,
                BundleOfWires: 15,
            },
            requirements: [
                { facility: "Security", level: 2 },
                { facility: "Vents", level: 2 },
            ],
        },
        level3: {
            items: {
                PowerSupplyUnit: 5,
                PhaseControlRelay: 12,
                ElectricMotor: 3,
                SparkPlug: 16,
                MetalSpareParts: 10,
            },
            requirements: [
                { facility: "Security", level: 3 },
                { facility: "Vents", level: 3 },
            ],
        },
    },

    IntelligenceCenter: {
        level1: {
            items: {
                PowerCord: 1,
                IntelligenceFolder: 1,
                TopographicSurveyMaps: 1,
                FactoryPlanMap: 1,
                WorkingLCD: 1,
            },
            requirements: [
                { facility: "Security", level: 2 },
                { facility: "Vents", level: 1 },
                { facility: "Generator", level: 1 },
                { facility: "Workbench", level: 1 },
            ],
        },
        level2: {
            items: {
                IntelligenceFolder: 3,
                SecureFlashDrive: 3,
                PowerCord: 7,
                DamagedHardDrive: 8,
            },
            requirements: [
                { facility: "Security", level: 3 },
                { facility: "Medstation", level: 3 },
                { facility: "NutritionUnit", level: 3 },
            ],
        },
        level3: {
            items: {
                MilitaryCable: 8,
                SignalTransmitter: 2,
                GPSAmplifier: 1,
                VPXFlashStorageModule: 2,
                MilitaryFlashDrive: 8,
                SecureMagneticTape: 2,
            },
            requirements: [
                { facility: "Workbench", level: 3 },
                { facility: "Generator", level: 3 },
            ],
        },
    },

    Vents: {
        level1: {
            items: {
                Roubles: 25000,
            },
            requirements: [],
        },
        level2: {
            items: {
                MetalSpareParts: 5,
                CPUFan: 5,
                CarBattery: 1,
                ElectricMotor: 1,
            },
            requirements: [],
        },
        level3: {
            items: {
                PrintedCircuitBoard: 5,
                ElectricMotor: 4,
                MetalSpareParts: 10,
                BundleOfWires: 14,
                CarBattery: 4,
            },
            requirements: [
                { facility: "Generator", level: 2 },
            ],
        },
    },

    Workbench: {
        level1: {
            items: {
                ScrewNuts: 2,
                Bolts: 2,
                LeathermanMultitool: 1,
            },
            requirements: [],
        },
        level2: {
            items: {
                Bolts: 10,
                Toolset: 3,
                SetOfFilesMaster: 1,
                ElectricDrill: 2,
                WeaponParts: 3,
            },
            requirements: [
                { facility: "Illumination", level: 2 },
            ],
        },
        level3: {
            items: {
                Roubles: 395000,
                Thermite: 5,
                PliersElite: 2,
                FireKlean: 1,
            },
            requirements: [
                { facility: "Generator", level: 2 },
                { facility: "Stash", level: 2 },
            ],
        },
    },

    NutritionUnit: {
        level1: {
            items: {
                Roubles: 25000,
                Salt: 1,
                PowerCord: 1,
                PhaseControlRelay: 2,
            },
            requirements: [
                { facility: "Generator", level: 1 },
            ],
        },
        level2: {
            items: {
                AlkaliCleaner: 2,
                Wrench: 4,
                CorrugatedHose: 4,
                PhaseControlRelay: 3,
            },
            requirements: [
                { facility: "Lavatory", level: 2 },
            ],
        },
        level3: {
            items: {
                Roubles: 125000,
                CoffeeBeans: 5,
                SodiumBicarbonate: 5,
                ChimneyCleaner: 2,
            },
            requirements: [
                { facility: "Generator", level: 2 },
                { facility: "Lavatory", level: 3 },
                { facility: "Stash", level: 2 },
            ],
        },
    },
    Stash: {
        level2: {
            items: {
                Roubles: 2500000,
                WD40: 4,
                HandDrill: 1,
                PackOfNails: 5,
                PackOfScrews: 10,
            },
            requirements: [
                { facility: "Vents", level: 1 },
            ],
        },
        level3: {
            items: {
                Roubles: 8500000,
                ElectricDrill: 2,
                PackOfScrews: 15,
                PackOfNails: 7,
            },
            requirements: [
                { facility: "Vents", level: 2 },
                { facility: "Heating", level: 2 },
            ],
        },
        level4: {
            items: {
                Euros: 200000,
                ScrewNuts: 10,
                Bolts: 10,
                ShustriloSealingFoam: 8,
                RatchetWrench: 2,
            },
            requirements: [
                { facility: "Generator", level: 3 },
                { facility: "Workbench", level: 3 },
                { facility: "Heating", level: 3 },
                { facility: "IntelligenceCenter", level: 2 },
            ],
        },
    },

    WaterCollector: {
        level1: {
            items: {
                DuctTape: 3,
                ScrewNuts: 5,
                Bolts: 5,
                CorrugatedHose: 4,
            },
            requirements: [
                { facility: "Security", level: 1 },
            ],
        },
        level2: {
            items: {
                Toolset: 2,
                CorrugatedHose: 6,
                ElectricMotor: 2,
                KEKTape: 5,
            },
            requirements: [
                { facility: "Workbench", level: 2 },
            ],
        },
        level3: {
            items: {
                Roubles: 20000,
                RatchetWrench: 1,
                PliersElite: 2,
                ShustriloSealingFoam: 10,
            },
            requirements: [
                { facility: "Generator", level: 3 },
                { facility: "Heating", level: 3 },
            ],
        },
    },

    WeaponRack: {
        level1: {
            items: {
                PackOfNails: 5,
                EnergySavingLamp: 5,
                InsulatingTape: 5,
                HandDrill: 1,
                Bolts: 15,
                MetalCuttingScissors: 1,
                XenomorphSealingFoam: 5,
            },
            requirements: [
                { facility: "Illumination", level: 3 },
                { facility: "Stash", level: 2 },
            ],
        },
        level2: {
            items: {
                MetalSpareParts: 10,
                PackOfScrews: 10,
                ElectricDrill: 1,
                BundleOfWires: 10,
                SetOfFilesMaster: 1,
                PoxeramColdWelding: 3,
                EnergySavingLamp: 10,
                DuctTape: 10,
                WeaponParts: 5,
            },
            requirements: [
                { facility: "ShootingRange", level: 2 },
                { facility: "Workbench", level: 2 },
                { facility: "Stash", level: 3 },
            ],
        },
        level3: {
            items: {
                ElectricDrill: 1,
                EnergySavingLamp: 15,
                MetalSpareParts: 10,
                KEKTape: 5,
                BundleOfWires: 15,
                ShustriloSealingFoam: 5,
                TechManual: 1,
                FireKlean: 1,
            },
            requirements: [
                { facility: "ShootingRange", level: 3 },
                { facility: "Workbench", level: 3 },
            ],
        },
    },

    Heating: {
        level1: {
            items: {
                Roubles: 25000,
                Matches: 2,
            },
            requirements: [],
        },
        level2: {
            items: {
                Roubles: 50000,
                DryFuel: 5,
                Matches: 2,
                CrickentLighter: 5,
            },
            requirements: [
                { facility: "Vents", level: 1 },
            ],
        },
        level3: {
            items: {
                MilitaryCorrugatedTube: 2,
                RadiatorHelix: 10,
                BundleOfWires: 10,
                PhaseControlRelay: 4,
            },
            requirements: [
                { facility: "Generator", level: 2 },
                { facility: "Workbench", level: 2 },
            ],
        },
    },

    Gym: {
        level1: {
            items: {
                InsulatingTape: 5,
                MetalCuttingScissors: 1,
                WD40: 1,
                Toolset: 1,
                ScrewNuts: 5,
                ElectricDrill: 1,
                Bolts: 5,
            },
            requirements: [
                { facility: "DefectiveWall", level: 6 },
                { facility: "Illumination", level: 2 },
                { facility: "Vents", level: 2 },
            ],
        },
    },

    Illumination: {
        level1: {
            items: {
                Roubles: 10000,
                CrickentLighter: 1,
            },
            requirements: [],
        },
        level2: {
            items: {
                LightBulb: 14,
                BundleOfWires: 10,
            },
            requirements: [
                { facility: "Generator", level: 1 },
            ],
        },
        level3: {
            items: {
                Roubles: 50000,
                EnergySavingLamp: 12,
                Capacitors: 7,
                BundleOfWires: 12,
            },
            requirements: [
                { facility: "Generator", level: 2 },
                { facility: "Workbench", level: 1 },
            ],
        },
    },

    Lavatory: {
        level1: {
            items: {
                Roubles: 2000,
                ToiletPaper: 1,
                Toothpaste: 1,
                Soap: 1,
                Awl: 1,
            },
            requirements: [],
        },
        level2: {
            items: {
                KEKTape: 3,
                CorrugatedHose: 6,
                PackOfScrews: 6,
                ElectricDrill: 1,
                SewingKit: 2,
            },
            requirements: [
                { facility: "WaterCollector", level: 1 },
                { facility: "Vents", level: 1 },
            ],
        },
        level3: {
            items: {
                XenomorphSealingFoam: 6,
                CorrugatedHose: 10,
                PressureGauge: 2,
                Toolset: 1,
            },
            requirements: [
                { facility: "Vents", level: 2 },
                { facility: "WaterCollector", level: 2 },
            ],
        },
    },

    RestSpace: {
        level1: {
            items: {
                Roubles: 10000,
                Matches: 3,
                DuctTape: 1,
            },
            requirements: [
                { facility: "Vents", level: 1 },
            ],
        },
        level2: {
            items: {
                Roubles: 75000,
                Magnet: 1,
                DVDDrive: 1,
                EnergySavingLamp: 5,
            },
            requirements: [
                { facility: "Generator", level: 1 },
            ],
        },
        level3: {
            items: {
                GreenBatBattery: 4,
                BundleOfWires: 10,
                Capacitors: 5,
                PowerCord: 5,
            },
            requirements: [],
        },
    },

    ScavCase: {
        level1: {
            items: {
                GoldenRooster: 1,
                LuckyScavJunkBox: 1,
                Moonshine: 3,
                GoldWatch: 4,
                GoldNeckChain: 8,
                GoldSkullRing: 6,
                BronzeLion: 3,
            },
            requirements: [
                { facility: "IntelligenceCenter", level: 2 },
            ],
        },
    },

    Security: {
        level1: {
            items: {
                Roubles: 20000,
                MeasuringTape: 1,
            },
            requirements: [],
        },
        level2: {
            items: {
                Roubles: 45000,
                WD40: 2,
                PliersElite: 1,
                TNTBrick: 2,
            },
            requirements: [
                { facility: "Illumination", level: 1 },
            ],
        },
        level3: {
            items: {
                NIXXORLens: 8,
                WorkingLCD: 2,
                BundleOfWires: 10,
                SSD: 1,
            },
            requirements: [
                { facility: "Illumination", level: 3 },
            ],
        },
    },

    ShootingRange: {
        level1: {
            items: {
                Roubles: 20000,
                MetalSpareParts: 1,
                Bolts: 1,
                ScrewNuts: 1,
            },
            requirements: [
                { facility: "Illumination", level: 1 },
            ],
        },
        level2: {
            items: {
                ElectricMotor: 3,
                MeasuringTape: 1,
                PoxeramColdWelding: 3,
                Toolset: 1,
                ElectricDrill: 1,
                MetalSpareParts: 8,
                WI_FICamera: 3,
                BundleOfWires: 6,
                EnergySavingLamp: 6,
            },
            requirements: [
                { facility: "Illumination", level: 3 },
                { facility: "Workbench", level: 2 },
            ],
        },
        level3: {
            items: {
                SetOfFilesMaster: 1,
                PrintedCircuitBoard: 5,
                BundleOfWires: 10,
                MetalSpareParts: 5,
                Capacitors: 5,
                PhaseControlRelay: 5,
                PowerCord: 5,
                LeathermanMultitool: 1,
                TechManual: 1,
            },
            requirements: [],
        },
    },

    GearRack: {
        level1: {
            items: {
                Roubles: 300000,
                ElectricDrill: 1,
                SewingKit: 1,
                Awl: 1,
                LeathermanMultitool: 1,
                Bolts: 15,
                FleeceFabric: 10,
                EnergySavingLamp: 8,
            },
            requirements: [
                { facility: "DefectiveWall", level: 6 },
                { facility: "Illumination", level: 2 },
            ],
        },
        level2: {
            items: {
                Roubles: 800000,
                ElectricDrill: 1,
                DuctTape: 5,
                ShustriloSealingFoam: 5,
                PackOfNails: 8,
                EnergySavingLamp: 12,
                AramidFiberFabric: 10,
                Wrench: 1,
            },
            requirements: [
                { facility: "HallOfFame", level: 1 },
            ],
        },
        level3: {
            items: {
                Roubles: 1200000,
                BodyArmorRepairKit: 1,
                CorduraPolyamideFabric: 10,
                MetalSpareParts: 15,
                KEKTape: 10,
                EnergySavingLamp: 15,
                SetOfFilesMaster: 1,
                RatchetWrench: 1,
            },
            requirements: [
                { facility: "HallOfFame", level: 2 },
            ],
        },
    },

    HallOfFame: {
        level1: {
            items: {
                InsulatingTape: 5,
                PackOfNails: 5,
                LightBulb: 5,
                CatFigurine: 1,
                FleeceFabric: 5,
                RoundPliers: 1,
            },
            requirements: [],
        },
        level2: {
            items: {
                TechManual: 1,
                PliersElite: 1,
                Toolset: 1,
                GoldenRooster: 1,
                EnergySavingLamp: 10,
                PackOfScrews: 6,
                DuctTape: 3,
                XenomorphSealingFoam: 5,
                PoxeramColdWelding: 2,
            },
            requirements: [],
        },
        level3: {
            items: {
                SetOfFilesMaster: 1,
                ElectricDrill: 1,
                BronzeLion: 1,
                EnergySavingLamp: 15,
                KEKTape: 3,
                TShapedPlug: 6,
                MetalSpareParts: 15,
                PowerCord: 5,
            },
            requirements: [],
        },
    },

    Library: {
        level1: {
            items: {
                Roubles: 400000,
                BakeEzyCookBook: 1,
                SlimDiary: 5,
                Diary: 5,
                TechManual: 8,
                Chainlet: 2,
                HorseFigurine: 1,
            },
            requirements: [
                { facility: "RestSpace", level: 3 },
            ],
        },
    },

    Medstation: {
        level1: {
            items: {
                Roubles: 50000,
                DisposableSyringe: 1,
                PileOfMeds: 1,
                AsepticBandage: 2,
                OLOLOMultivitamins: 1,
            },
            requirements: [],
        },
        level2: {
            items: {
                Roubles: 150000,
                BottleOfSalineSolution: 6,
                MedicalTools: 3,
                MedicalBloodset: 2,
                EsmarchTourniquet: 10,
            },
            requirements: [
                { facility: "Generator", level: 1 },
            ],
        },
        level3: {
            items: {
                Roubles: 500000,
                Ophthalmoscope: 1,
                BottleOfSalineSolution: 10,
                LEDXSkinTransilluminator: 1,
            },
            requirements: [
                { facility: "Generator", level: 2 },
                { facility: "Lavatory", level: 2 },
            ],
        },
    },

    SolarPower: {
        level1: {
            items: {
                Euros: 25000,
                PhasedArrayElement: 6,
                AdvancedCurrentConverter: 1,
                WorkingLCD: 3,
                MilitaryCable: 10,
                MilitaryPowerFilter: 10,
            },
            requirements: [
                { facility: "Generator", level: 3 },
                { facility: "Workbench", level: 3 },
            ],
        },
    },

};

export async function writeAllHideoutData(){
    const batch = writeBatch(db);

    for (const [facilityName, facilityData] of Object.entries(hideoutData)) {
        const facilityRef = doc(db, "facilities", facilityName);
        batch.set(facilityRef, facilityData);
    }

    await batch.commit();
    console.log("Hideout data written successfully.");


}