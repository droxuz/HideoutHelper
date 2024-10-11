// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, doc, setDoc, writeBatch} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional\
const firebaseConfig = {
    apiKey: "AIzaSyDL7AlOqEol3u1LHmn7RS4i7fduyy2lmGI",
    authDomain: "hideouthelper-7c1a6.firebaseapp.com",
    projectId: "hideouthelper-7c1a6",
    storageBucket: "hideouthelper-7c1a6.appspot.com",
    messagingSenderId: "1011025758280",
    appId: "1:1011025758280:web:4ecc9b03da3dc2f81b707d",
    measurementId: "G-LV7BW8NQLQ"
  }; 

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


const ref_air_filtering_unit = doc(db, 'Collection/AirFilteringUnit');
const ref_bitcoin_farm1 = doc(db,'Collection/BitcoinFarm1');
const ref_bitcoin_farm2 = doc(db,'Collection/BitcoinFarm2');
const ref_bitcoin_farm3 = doc(db,'Collection/BitcoinFarm3');
const ref_booze_generator = doc(db,'Collection/BoozeGenerator');
const ref_heating1 = doc(db,'Collection/Heating1');
const ref_heating2 = doc(db,'Collection/Heating2');
const ref_heating3 = doc(db,'Collection/Heating3');
const ref_defective_wall1 = doc(db,'Collection/DefectiveWall1');
const ref_defective_wall2 = doc(db,'Collection/DefectiveWall2');
const ref_defective_wall3 = doc(db,'Collection/DefectiveWall3');
const ref_defective_wall4 = doc(db,'Collection/DefectiveWall4');
const ref_defective_wall5 = doc(db,'Collection/DefectiveWall5');
const ref_defective_wall6 = doc(db,'Collection/DefectiveWall6');
const ref_generator1 = doc(db,'Collection/Generator1');
const ref_generator2 = doc(db,'Collection/Generator2');
const ref_generator3 = doc(db,'Collection/Generator3');
const ref_gym = doc(db,'Collection/Gym');
const ref_hall_of_fame1 = doc(db,'Collection/HallofFame1');
const ref_hall_of_fame2 = doc(db,'Collection/HallofFame2');
const ref_hall_of_fame3 = doc(db,'Collection/HallofFame3');
const ref_illumination1 = doc(db,"Collection/Illumination1");
const ref_illumination2 = doc(db,"Collection/Illumination2");
const ref_illumination3 = doc(db,"Collection/Illumination3");
const ref_intelligencecenter1 = doc(db,"Collection/IntelligenceCenter1");
const ref_intelligencecenter2 = doc(db,"Collection/IntelligenceCenter2");
const ref_intelligencecenter3 = doc(db,"Collection/IntelligenceCenter3");
const ref_lavatory1 = doc(db,'Collection/Lavatory1');
const ref_lavatory2 = doc(db,'Collection/Lavatory2');
const ref_lavatory3 = doc(db,'Collection/Lavatory3');
const ref_library1 = doc(db,'Collection/Library1');
const ref_medstation1 = doc(db,'Collection/Medstation1');
const ref_medstation2 = doc(db,'Collection/Medstation2');
const ref_medstation3 = doc(db,'Collection/Medstation3');


async function write_Heating1(){
    const Heating1 = {
        roubles: '25000',
        classic_matches: '2'
    };
    try {
        // Write the data to Firestore
        await setDoc(ref_heating1, Heating1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Heating2(){
    const Heating2 = {
        dry_fuel: '3',
        roubles: '50000',
        hunting_matches: '2',
        crickent_lighter: '3'
    };
    try {
        // Write the data to Firestore
        await setDoc(ref_heating2, Heating2);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Heating3(){
    const Heating3 = {
        radiator_helix: '8',
        bundle_of_wires: '8',
        phase_control_relay: '4',
        military_corrugated_hose: '2'
    };
    try {
        // Write the data to Firestore
        await setDoc(ref_heating3, Heating3);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_AirFilteringUnit() {
    const Air_filtering_unit1 = {
        gas_mask_air_filter: '5',
        dollars: '25000',
        military_power_filter: '5',
        military_corrugated_hose: '3',
    };
    
    try {
        // Write the data to Firestore
        await setDoc(ref_air_filtering_unit , Air_filtering_unit1);
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_BitcoinFarm1(){
    const Bitcoin_Farm1 = {
        tshaped_plug: '5',
        vpx_flash_storage_module: '1',
        power_cord: '10',
        power_supply_unit: '10',
        cpu_fan: '15'
    };
    
    try {
        // Write the data to Firestore
        await setDoc(ref_bitcoin_farm1, Bitcoin_Farm1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_BitcoinFarm2(){
    const Bitcoin_Farm2 = {
        cpu_fan: '15',
        power_supply_unit: '10',
        printed_circuit_board: '15',
        phase_control_relay: '5',
        military_power_filter: '2'
    };
    
    try {
        // Write the data to Firestore
        await setDoc(ref_bitcoin_farm2, Bitcoin_Farm2);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_BitcoinFarm3(){
    const Bitcoin_Farm3 = {
        cpu_fan: '25',
        silicon_tube: '15',
        electric_motor: '10',
        pressure_gauge: '10',
        six_sten_140_m_military_battery: '1'
    };
    
    try {
        // Write the data to Firestore
        await setDoc(ref_bitcoin_farm3, Bitcoin_Farm3);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_BoozeGenerator(){
    const Booze_Generator = {
        metal_spare_part: '2',
        pressure_gauge: '2',
        radiator_helix: '3',
        silicon_tube: '4',
        pipe_grip_wrench: '1',
        analog_thermometer: '2',
        corrugated_hose: '5'
    };
    
    try {
        // Write the data to Firestore
        await setDoc(ref_booze_generator, Booze_Generator);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_DefectiveWall1(){
    const Defective_Wall1 = {
        fleece: null
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_defective_wall1, Defective_Wall1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_DefectiveWall2(){
    const Defective_Wall2 = {
        fleece: '1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_defective_wall2, Defective_Wall2);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_DefectiveWall3(){
    const Defective_Wall3 = {
        fleece: '1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_defective_wall3, Defective_Wall3);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_DefectiveWall4(){
    const Defective_Wall4 = {
        fleece: '1' ,
        fierce_blow_sledgehammer: '1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_defective_wall4, Defective_Wall4);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_DefectiveWall5(){
    const Defective_Wall5 = {
        fleece: '1',
        metal_cutting_scissors: '1',
        toolset: '1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_defective_wall5, Defective_Wall5);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_DefectiveWall6(){
    const Defective_Wall6 = {
        corrugated_hose:'2',
        duct_tape: '1',
        toolset: '1',
        pliers_elite: '1',
        metal_spare_part: '5',
        xenomorph_sealing_foam: '1',
        bundle_of_wires: '2',
        light_bulb: '2'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_defective_wall6, Defective_Wall6);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Generator1(){
    const Generator1 = {
        spark_plug: '1',
        roubles: '100000'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_generator1, Generator1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_Generator2(){
    const Generator2 = {
        bulbex_cable_cutter: '1',
        phase_control_relay: '5',
        electric_motor: '1',
        bundle_of_wires: '15'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_generator2, Generator2);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_Generator3(){
    const Generator3 = {
        power_supply_unit: '5',
        phase_control_relay: '6',
        electric_motor: '3',
        spark_plug: '10',
        metal_spare_part: '7'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_generator3, Generator3);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

async function write_Gym(){
    const Gym = {
        toolset: '1',
        electric_motor: '1',
        metal_cutting_scissors: '1',
        screw_nuts: '3',
        bolts: '3',
        wd40_100ml: '1',
        insulating_tape: '1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_gym, Gym);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_HallOfFame1(){
    const Halloffame1 = {
        insulating_tape: '2',
        pack_of_nails: '5',
        light_bulb: '5',
        cat_figurine: '1',
        fleece: '5',
        round_pliers: '1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_hall_of_fame1, Halloffame1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_HallOfFame2(){
    const Halloffame2 = {
        tech_manual: '1',
        pliers_elite: '1',
        toolset: '1',
        golden_rooster_figurine: '1',
        energy_saving_lamps: '10',
        pack_of_screws: '6',
        duct_tape: '3',
        xenomorph_sealing_foam: '2',
        tube_of_poxeram_cold_welding: '2'    
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_hall_of_fame2, Halloffame2);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_HallOfFame3(){
    const Halloffame3 = {
        set_files_master: '1',
        electric_drill: '1',
        bronze_lion_figurine: '1',
        energy_saving_lamps: '15',
        kektape_duct_tape: '3',
        tshaped_plug: '3',
        metal_spare_part: '15',
        power_cord: '5'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_hall_of_fame3, Halloffame3);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Illumination1(){
    const Illumination1 = {
        roubles: '10000',
        crickent_lighter: '1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_illumination1, Illumination1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Illumination2(){
    const Illumination2 = {
        light_bulb: '14',
        bundle_of_wires: '10'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_illumination2, Illumination2);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Illumination3(){
    const Illumination3 = {
        roubles: '50000',
        capacitors: '7',
        energy_saving_lamps: '12',
        bundle_of_wires: '6'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_illumination3, Illumination3);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_IntelligenceCenter1(){
    const IntelligenceCenter1= {
        factory_plan_map: '1',
        intelligence_folder: '1',
        topographic_survey_map: '1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_intelligencecenter1, IntelligenceCenter1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_IntelligenceCenter2(){
    const IntelligenceCenter2= {
        intelligence_folder: '3',
        secure_flash_drive: '3',
        power_cord: '7',
        damaged_hard_drive: '4'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_intelligencecenter2, IntelligenceCenter2);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_IntelligenceCenter3(){
    const IntelligenceCenter3= {
        military_corrugated_hose: '5',
        military_cofdm_wireless_signal_transmitter: '2',
        far_forward_gps_signal_amplifier: '1',
        vpx_flash_storage_module: '2',
        military_flash_drive: '5',
        secure_magnetic_tape_cassette: '2'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_intelligencecenter3, IntelligenceCenter3);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Lavatory1(){
    const Lavatory1= {
        roubles: '2000',
        toilet_paper: '1',
        toothpaste: '1',
        soap: '1',
        awl: '1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_lavatory1, Lavatory1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Lavatory2(){
    const Lavatory2= {
        kektape_duct_tape: '1',
        corrugated_hose: '3',
        pack_of_screws:'5',
        electric_drill:'1',
        sewing_kit: '2'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_lavatory2, Lavatory2);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Lavatory3(){
    const Lavatory3= {
        xenomorph_sealing_foam: '3',
        corrugated_hose: '6',
        pressure_gauge:'2',
        toolset:'1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_intelligencecenter3, Lavatory3);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Library(){
    const Library1= {
        bakeezy_cook_book:'1',
        slim_diary: '2',
        tech_manual: '5',
        chainlet:'2',
        horse_figurine: '1',
        roubles: '400000'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_library1, Library1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Medstation1(){
    const Medstation1= {
        roubles:'50000',
        disposable_syringe: '1',
        pile_of_meds: '1',
        aseptic_bandage: '2',
        bottle_of_ololo_multivitamins: '1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_medstation1, Medstation1);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Medstation2(){
    const Medstation2= {
        bottle_of_saline_solution: '3',
        mdeical_bloodset: '2',
        esmarch_tourniquet: '5',
        medical_tools: '3',
        roubles: '150000'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_medstation3, Medstation2);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Medstation3(){
    const Medstation3= {
        opthalmoscope: '1',
        roubles: '500000',
        bottle_of_saline_solution: '4',
        ledx_skin_transilluminator: '1'
    }
    try {
        // Write the data to Firestore
        await setDoc(ref_medstation3, Medstation3);  
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Nutritionunit(){
    const batch = writeBatch(db);
    const ref_nutritionunit1 = doc(db,'Collection/NutritionUnit1');
    const ref_nutritionunit2 = doc(db,'Collection/NutritionUnit2');
    const ref_nutritionunit3 = doc(db,'Collection/NutritionUnit3');
    batch.set(ref_nutritionunit1, {
        can_of_white_salt:'1',
        power_cord: '1',
        phase_control_relay: '2',
        roubles:'25000'
    });
    batch.set(ref_nutritionunit2,{
        wrench:'4',
        corrugated_hose:'2',
        alkaline_cleaner_for_heat_exchanger: '2',
        phase_control_relay: '1'
    });
    batch.set(ref_nutritionunit3,{
        roubles:'125000',
        can_of_majaica_coffee_beans: '3',
        pack_of_sodium_bicarbonate:'3',
        smoked_chimney_drain_cleaner:'2'
    });
    try {
        await batch.commit();
        console.log("Batch write to medstation1, medstation2, and medstation3 successful!");
      } catch (error) {
        console.error("Error in batch write: ", error); // Log any errors
      }
    
}

write_AirFilteringUnit();
write_BitcoinFarm1();
write_BitcoinFarm2();
write_BitcoinFarm3();
write_BoozeGenerator();
write_DefectiveWall1();
write_DefectiveWall2();
write_DefectiveWall3();
write_DefectiveWall4();
write_DefectiveWall5();
write_DefectiveWall6();
write_Generator1();
write_Generator2();
write_Generator3();
write_Gym();
write_HallOfFame1();
write_HallOfFame2();
write_HallOfFame3();
write_Heating1();
write_Heating2();
write_Heating3();
write_Illumination1();
write_Illumination2();
write_Illumination3();
write_IntelligenceCenter1();
write_IntelligenceCenter2();
write_IntelligenceCenter3();
write_Lavatory1();
write_Lavatory2();
write_Lavatory3();
write_Library();
write_Medstation1();
write_Medstation2();
write_Medstation3();
write_Nutritionunit();

