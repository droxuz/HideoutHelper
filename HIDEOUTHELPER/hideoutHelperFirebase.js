// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, doc, setDoc} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js';
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