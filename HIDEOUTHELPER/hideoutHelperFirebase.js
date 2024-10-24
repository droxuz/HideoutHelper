// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, doc, setDoc, writeBatch, getDoc} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js';
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
//defining references for database
const ref_air_filtering_unit = doc(db, 'Collection/AirFilteringUnit');
const ref_booze_generator = doc(db,'Collection/BoozeGenerator');
const ref_gym = doc(db,'Collection/Gym');
const ref_library1 = doc(db,'Collection/Library1');
const ref_scavcase = doc(db,'Collection/Scavcase');
const ref_solarpower = doc(db,'Collection/Solarpower');

//Functions to write data to database
async function write_Heating(){
    const batch = writeBatch(db);
    const ref_heating1 = doc(db,'Collection/Heating1');
    const ref_heating2 = doc(db,'Collection/Heating2');
    const ref_heating3 = doc(db,'Collection/Heating3');
    batch.set(ref_heating1,{
        roubles: '25000',
        classic_matches: '2'
    });
    batch.set(ref_heating2,{
        dry_fuel: '3',
        roubles: '50000',
        hunting_matches: '2',
        crickent_lighter: '3'
    });
    batch.set(ref_heating3,{
        radiator_helix: '8',
        bundle_of_wires: '8',
        phase_control_relay: '4',
        military_corrugated_hose: '2'
    });
    try{
        await batch.commit(db);
        console.log('Wrote heating data');
    }catch{
        console.log('Failed to write heating data');
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
async function write_BitcoinFarm(){
    const batch = writeBatch(db);
    const ref_bitcoin_farm1 = doc(db,'Collection/BitcoinFarm1');
    const ref_bitcoin_farm2 = doc(db,'Collection/BitcoinFarm2');
    const ref_bitcoin_farm3 = doc(db,'Collection/BitcoinFarm3');  
    batch.set(ref_bitcoin_farm1,{
        tshaped_plug: '5',
        vpx_flash_storage_module: '1',
        power_cord: '10',
        power_supply_unit: '10',
        cpu_fan: '15'
    });
    batch.set(ref_bitcoin_farm2,{
        cpu_fan: '15',
        power_supply_unit: '10',
        printed_circuit_board: '15',
        phase_control_relay: '5',
        military_power_filter: '2'
    });
    batch.set(ref_bitcoin_farm3,{
        cpu_fan: '25',
        silicon_tube: '15',
        electric_motor: '10',
        pressure_gauge: '10',
        six_sten_140_m_military_battery: '1'
    });
    try{
        batch.commit(db);
        console.log('Wrote bitcoin farm data');
    }catch{
        console.log('Failed to write bitcoin data');
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
async function write_DefectiveWall() {
    const batch = writeBatch(db);
    const ref_defective_wall1 = doc(db,'Collection/DefectiveWall1');
    const ref_defective_wall2 = doc(db,'Collection/DefectiveWall2');
    const ref_defective_wall3 = doc(db,'Collection/DefectiveWall3');
    const ref_defective_wall4 = doc(db,'Collection/DefectiveWall4');
    const ref_defective_wall5 = doc(db,'Collection/DefectiveWall5');
    const ref_defective_wall6 = doc(db,'Collection/DefectiveWall6');
    batch.set(ref_defective_wall1,{
        fleece: ''
    });
    batch.set(ref_defective_wall2,{
        fleece:'1'
    });
    batch.set(ref_defective_wall3,{
        fleece:'1'
    });
    batch.set(ref_defective_wall4,{
        fleece: '1' ,
        fierce_blow_sledgehammer: '1'
    });
    batch.set(ref_defective_wall5,{
        fleece: '1',
        metal_cutting_scissors: '1',
        toolset: '1'
    });
    batch.set(ref_defective_wall6,{
        corrugated_hose:'2',
        duct_tape: '1',
        toolset: '1',
        pliers_elite: '1',
        metal_spare_part: '5',
        xenomorph_sealing_foam: '1',
        bundle_of_wires: '2',
        light_bulb: '2'
    });

    try{
        batch.commit(db);
        console.log('Wrote defective wall data');
    }catch{
        console.log('Failed to write defective wall data');
    }
}
async function write_Generator(){
    const batch = writeBatch(db);
    const ref_generator1 = doc(db,'Collection/Generator1');
    const ref_generator2 = doc(db,'Collection/Generator2');
    const ref_generator3 = doc(db,'Collection/Generator3');
    batch.set(ref_generator1,{
        spark_plug: '1',
        roubles: '100000'
    });
    batch.set(ref_generator2,{
        bulbex_cable_cutter: '1',
        phase_control_relay: '5',
        electric_motor: '1',
        bundle_of_wires: '15'
    });
    batch.set(ref_generator3,{
        power_supply_unit: '5',
        phase_control_relay: '6',
        electric_motor: '3',
        spark_plug: '10',
        metal_spare_part: '7'
    });
    try{
        batch.commit(db);
        console.log('Wrote Generator Data');
    }catch{
        console.log('Failed to write Generator Data');
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
async function write_HallOfFame(){
    const batch = writeBatch(db);
    const ref_hall_of_fame1 = doc(db,'Collection/HallofFame1');
    const ref_hall_of_fame2 = doc(db,'Collection/HallofFame2');
    const ref_hall_of_fame3 = doc(db,'Collection/HallofFame3');
    batch.set(ref_hall_of_fame1,{
        insulating_tape: '2',
        pack_of_nails: '5',
        light_bulb: '5',
        cat_figurine: '1',
        fleece: '5',
        round_pliers: '1'
    });
    batch.set(ref_hall_of_fame2,{
        tech_manual: '1',
        pliers_elite: '1',
        toolset: '1',
        golden_rooster_figurine: '1',
        energy_saving_lamps: '10',
        pack_of_screws: '6',
        duct_tape: '3',
        xenomorph_sealing_foam: '2',
        tube_of_poxeram_cold_welding: '2'
    });
    batch.set(ref_hall_of_fame3,{
        set_files_master: '1',
        electric_drill: '1',
        bronze_lion_figurine: '1',
        energy_saving_lamps: '15',
        kektape_duct_tape: '3',
        tshaped_plug: '3',
        metal_spare_part: '15',
        power_cord: '5'
    });
    try{
        batch.commit(db);
        console.log('Wrote Hall of Fame data');
    }catch{
        console.log('Failed to write Hall of Fame data');
    }
}
async function write_Illumination(){
    const batch = writeBatch(db);
    const ref_illumination1 = doc(db,"Collection/Illumination1");
    const ref_illumination2 = doc(db,"Collection/Illumination2");
    const ref_illumination3 = doc(db,"Collection/Illumination3");
    batch.set(ref_illumination1,{
        roubles: '10000',
        crickent_lighter: '1'
    });
    batch.set(ref_illumination2,{
        light_bulb: '14',
        bundle_of_wires: '10'
    });
    batch.set(ref_illumination3,{
        roubles: '50000',
        capacitors: '7',
        energy_saving_lamps: '12',
        bundle_of_wires: '6'
    });
    try{
        batch.commit(db);
        console.log('Wrote Illumination data');
    }catch{
        console.log('Failed to write Illumination data');
    }
}
async function write_IntelligenceCenter(){
    const batch = writeBatch(db);
    const ref_intelligencecenter1 = doc(db,"Collection/IntelligenceCenter1");
    const ref_intelligencecenter2 = doc(db,"Collection/IntelligenceCenter2");
    const ref_intelligencecenter3 = doc(db,"Collection/IntelligenceCenter3");
    batch.set(ref_intelligencecenter1,{
        factory_plan_map: '1',
        intelligence_folder: '1',
        topographic_survey_map: '1'
    });
    batch.set(ref_intelligencecenter2,{
        intelligence_folder: '3',
        secure_flash_drive: '3',
        power_cord: '7',
        damaged_hard_drive: '4'
    });
    batch.set(ref_intelligencecenter3,{
        military_corrugated_hose: '5',
        military_cofdm_wireless_signal_transmitter: '2',
        far_forward_gps_signal_amplifier: '1',
        vpx_flash_storage_module: '2',
        military_flash_drive: '5',
        secure_magnetic_tape_cassette: '2'
    });
    try{
        batch.commit(db);
        console.log('Wrote Intelligence Center data');
    }catch{
        console.log('Failed to write Intelligence Center');
    }
}
async function write_Lavatory(){
    const batch = writeBatch(db);
    const ref_lavatory1 = doc(db,'Collection/Lavatory1');
    const ref_lavatory2 = doc(db,'Collection/Lavatory2');
    const ref_lavatory3 = doc(db,'Collection/Lavatory3');
    batch.set(ref_lavatory1,{
        roubles: '2000',
        toilet_paper: '1',
        toothpaste: '1',
        soap: '1',
        awl: '1'
    });
    batch.set(ref_lavatory2,{
        kektape_duct_tape: '1',
        corrugated_hose: '3',
        pack_of_screws:'5',
        electric_drill:'1',
        sewing_kit: '2'
    });
    batch.set(ref_lavatory3,{
        xenomorph_sealing_foam: '3',
        corrugated_hose: '6',
        pressure_gauge:'2',
        toolset:'1'
    });
    try{
        batch.commit(db);
        console.log('Wrote Lavatory Data');
    }catch{
        console.log('Failed to write Lavatory data');
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
async function write_Medstation(){
    const batch =writeBatch(db);
    const ref_medstation1 = doc(db,'Collection/Medstation1');
    const ref_medstation2 = doc(db,'Collection/Medstation2');
    const ref_medstation3 = doc(db,'Collection/Medstation3');
    batch.set(ref_medstation1,{
        roubles:'50000',
        disposable_syringe: '1',
        pile_of_meds: '1',
        aseptic_bandage: '2',
        bottle_of_ololo_multivitamins: '1'
    });
    batch.set(ref_medstation2,{
        bottle_of_saline_solution: '3',
        mdeical_bloodset: '2',
        esmarch_tourniquet: '5',
        medical_tools: '3',
        roubles: '150000'
    });
    batch.set(ref_medstation3,{
        opthalmoscope: '1',
        roubles: '500000',
        bottle_of_saline_solution: '4',
        ledx_skin_transilluminator: '1'
    });
    try{
        batch.commit(db);
        console.log('Wrote Medstation Data');
    }catch{
        console.log('Failed to write lavatory data');
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
async function write_RestSpace(){
    const batch = writeBatch(db);
    const ref_restspace1 = doc(db,'Collection/Restspace1');
    const ref_restspace2 = doc(db,'Collection/Restspace2');
    const ref_restspace3 = doc(db,'Collection/Restspace3');
    batch.set(ref_restspace1,{
        roubles:'10000',
        duct_tape:'1',
        classic_matches:'1'
    });
    batch.set(ref_restspace2,{
        energy_saving_lamps:'3',
        roubles:'35000',
        dvd_drive: '1',
        magnet: '1'
    });
    batch.set(ref_restspace3,{
        greenbat_lithium_battery:'5',
        power_cord:'4',
        capacitors:'5',
        bundle_of_wires:'7'
    })
    try{
        await batch.commit();
        console.log('Wrote restspace data');
    }catch{
        console.log('Failed to write restspace data', error)
    }
}
async function write_ScavCase(){
    const Scavcase={
        golden_rooster_figurine: '1',
        lucky_scav_junkbox: '1',
        bottle_of_fierce_hatchling: '3',
        roler_submariner_gold_wrist_watch: '4',
        golden_neck_chain: '8',
        gold_skull_ring: '6',
        bronze_lion_figurine: '3'
    }
    try{
        await setDoc(ref_scavcase,Scavcase);
        console.log('User data written successfully');
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}
async function write_Security(){
    const batch = writeBatch(db);
    const ref_Security1 = doc(db,'Collection/Security1');
    const ref_Security2 = doc(db,'Collection/Security2');
    const ref_Security3 = doc(db,'Collection/Security3');
    batch.set(ref_Security1,{
        roubles: '20000',
        construction_measuring_tape:'1'
    });
    batch.set(ref_Security2,{
        wd40_100ml:'1',
        roubles:'45000',
        pliers_elite:'1',
        tp200_tnt_brick: '1'
    });
    batch.set(ref_Security3,{
        nixxor_lens: '8',
        working_lcd:'2',
        bundle_of_wires:'4',
        ssd_drive:'1'
    })
    try{
        await batch.commit(db);
        console.log("Wrote security data");
    }catch{
        console.log("Failed to write security data");
    }
}
async function write_ShootingRange(){
    const batch = writeBatch(db);
    const ref_shootingrange1 = doc(db,'Collection/Shootingrange1');
    const ref_shootingrange2 = doc(db,'Collection/Shootingrange2');
    const ref_shootingrange3 = doc(db,'Collection/Shootingrange3');
    batch.set(ref_shootingrange1,{
        roubles: '20000',
        metal_spare_part:'1',
        bolts:'1',
        screw_nuts:'1'
    });
    batch.set(ref_shootingrange2,{
        electric_motor:'6',
        construction_measuring_tape:'1',
        tube_of_poxeram_cold_welding:'1',
        toolset:'1',
        pack_of_screws:'3',
        electric_drill:'1',
        metal_spare_part:'5',
        wifi_camera:'3',
        bundle_of_wires:'3',
        energy_saving_lamps:'6'
    });
    batch.set(ref_shootingrange3,{
        set_files_master:'1',
        printed_circuit_board:'3',
        bundle_of_wires:'5',
        metal_spare_part:'5',
        capacitors: '5',
        phase_control_relay:'3',
        power_cord: '5',
        leatherman_multitool:'1',
        tech_manual:'1'
    });
    try{
        await batch.commit(db);
        console.log('Wrote shooting range data')
    }catch{
        console.log('Failed to write shooting range data')
    }
}
async function write_SolarPower(){
    const Solarpower = {
        phased_array_element:'4',
        advanced_current_converter:'1',
        euros: '25000',
        working_lcd:'3',
        military_cable:'10',
        military_power_filter:'10'
    }
    try{
        await setDoc(ref_solarpower,Solarpower);
        console.log('Wrote solar power data');
    }catch{
        console.log('Failed to write solar power data')
    }
}
async function write_Stash(){
    const batch = writeBatch(db);
    const ref_stash1 = doc(db,'Collection/Stash1');
    const ref_stash2 = doc(db,'Collection/Stash2');
    const ref_stash3 = doc(db,'Collection/Stash3');
    const ref_stash4 = doc(db,'Collection/Stash4');
    batch.set(ref_stash1,{

    });
    batch.set(ref_stash2,{
        wd40_100ml:'4',
        hand_drill:'1',
        pack_of_nails:'5',
        pack_of_screws:'10',
        roubles:'2500000'
    });    
    batch.set(ref_stash3,{
        electric_drill:'2',
        pack_of_screws:'15',
        pack_of_screws:'7',
        roubles:'8500000'
    });
    batch.set(ref_stash4,{
        euros: '200000',
        screw_nuts: '10',
        bolts:'10',
        shustrilo_sealing_foam: '5',
        ratchet_wrench: '2'
    })
    try{
        await batch.commit(db);
        console.log('Wrote stash data');
    }catch{
        console.log('Failed to write stash data');
    }

}
async function write_Vents(){
    const batch = writeBatch(db);
    const ref_vents1 = doc(db,'Collection/Vents1');
    const ref_vents2 = doc(db,'Collection/Vents2');
    const ref_vents3 = doc(db,'Collection/Vents3');
    batch.set(ref_vents1,{
        roubles: '25000'
    });
    batch.set(ref_vents2,{
        metal_spare_part:'2',
        cpu_fan:'3',
        car_battery:'1',
        electric_motor:'1'
    });
    batch.set(ref_vents3,{
        printed_circuit_board:'5',
        electric_motor:'4',
        metal_spare_part:'5',
        bundle_of_wires:'14',
        car_battery:'4'
    });
    try{
        batch.commit(db);
        console.log('Wrote vents data');
    }catch{
        console.log('Failed to write vents data');
    }
}
async function write_WaterCollecter(){
    const batch = writeBatch(db);
    const ref_watercollector1 = doc(db,'Collection/Watercollector1');
    const ref_watercollector2 = doc(db,'Collection/Watercollector2');
    const ref_watercollector3 = doc(db,'Collection/Watercollector3');
    batch.set(ref_watercollector1,{
        duct_tape:'3',
        screw_nuts:'5',
        bolts:'5',
        corrugated_hose:'4'
    });
    batch.set(ref_watercollector2,{
        toolset:'2',
        corrugated_hose:'6',
        electric_motor:'2',
        kektape_duct_tape:'2'
    });
    batch.set(ref_watercollector3,{
        ratchet_wrench:'1',
        roubles:'20000',
        pliers_elite:'2',
        shustrilo_sealing_foam:'5'
    });
    try{
        await batch.commit(db);
        console.log('Wrote water collector data');
    }catch{
        console.log('Failed to write water collector data');
    }
}
async function write_WeaponRack(){
    const batch = writeBatch(db);
    const ref_WeaponRack1 = doc(db,'Collection/Weaponrack1');
    const ref_WeaponRack2 = doc(db,'Collection/Weaponrack2');
    const ref_WeaponRack3 = doc(db,'Collection/Weaponrack3');
    batch.set(ref_WeaponRack1,{
        hand_drill:'1',
        metal_cutting_scissors:'1',
        energy_saving_lamps:'5',
        xenomorph_sealing_foam:'3',
        bolts:'15',
        insulating_tape:'5',
        pack_of_nails: '5'
    });
    batch.set(ref_WeaponRack2,{
        metal_spare_part:'5',
        pack_of_screws:'10',
        electric_drill:'1',
        bundle_of_wires:'10',
        set_files_master:'1',
        tube_of_poxeram_cold_welding:'3',
        energy_saving_lamps:'10',
        duct_tape:'5',
        weapon_parts:'5'
    });
    batch.set(ref_WeaponRack3,{
        electric_drill:'1',
        energy_saving_lamps:'15',
        metal_spare_part:'10',
        kektape_duct_tape:'5',
        bundle_of_wires:'15',
        shustrilo_sealing_foam:'3',
        tech_manual:'1',
        fire_klean_gun_lube:'1'
    });
    try{
        await batch.commit(db);
        console.log('Wrote weapon rack data');
    }catch{
        console.log('Failed to weapon rack data');
    }
}
async function write_WorkBench(){
    const batch = writeBatch(db);
    const ref_workbench1 = doc(db,'Collection/Workbench1');
    const ref_workbench2 = doc(db,'Collection/Workbench2');
    const ref_workbench3 = doc(db,'Collection/Workbench3');
    batch.set(ref_workbench1,{
        screw_nuts:'2',
        bolts:'2',
        leatherman_multitool:'1'
    });
    batch.set(ref_workbench2,{
        bolts:'6',
        toolset:'3',
        set_files_master:'1',
        electric_drill:'2',
        weapon_parts:'3'
    });
    batch.set(ref_workbench3,{
        roubles:'395000',
        pliers_elite:'2',
        fire_klean_gun_lube:'1',
        can_of_thermite:'2'
    });
    try{
        await batch.commit(db);
        console.log('Wrote workbench data');
    }catch{
        console.log('Failed to write workbench data');
    }
}
//Querying the database to add to list
async function query_hideout(selectedAirFilteringUnit, selectedBitcoinFarm, selectedBoozeGenerator, selectedDefectiveWall, selectedGenerator, selectedGym, selectedHallOfFame, selectedHeating, selectedIllumination, selectedIntelligenceCenter, selectedLavatory, selectedLibrary, selectedMedstation, selectedNutritionUnit, selectedRestSpace, selectedScavCase, selectedSecurity, selectedShootingRange, selectedSolarPower, selectedStash, selectedVents, selectedWaterCollector, selectedWeaponRack, selectedWorkBench) {
    const airFilteringToQuery ={
        'airFilteringNotInstalled': ['AirFilteringUnit'],
        'airFilteringInstalled': ['']
    };

    const bitcoinFarmToQuery = {
        'bitcoinNotInstalled': ['BitcoinFarm1','BitcoinFarm2','BitcoinFarm3'],
        'bitcoinFarm1': ['BitcoinFarm2','BitcoinFarm3'],
        'bitcoinFarm2': ['BitcoinFarm3'],
        'bitcoinFarm3': ['']
    };
    
    const boozeGeneratorToQuery ={
        'boozeGeneratorNotInstalled': ['BoozeGenerator'],
        'boozeGeneratorInstalled':['']
    }

    const defectiveWallToQuery ={
        'defectiveWallNotInstalled': ['DefectiveWall1','DefectiveWall2','DefectiveWall3','DefectiveWall4','DefectiveWall5','DefectiveWall6'],
        'defectiveWall1':['DefectiveWall2','DefectiveWall3','DefectiveWall4','DefectiveWall5','DefectiveWall6'],
        'defectiveWall2':['DefectiveWall3','DefectiveWall4','DefectiveWall5','DefectiveWall6'],
        'defectiveWall3':['DefectiveWall4','DefectiveWall5','DefectiveWall6'],
        'defectiveWall4':['DefectiveWall5','DefectiveWall6'],
        'defectiveWall5':['DefectiveWall6'],
        'defectiveWall6':['']
    };
    const generatorToQuery = {
        'generatorNotInstalled': ['Generator1','Generator2','Generator3'],
        'generator1': ['Generator2','Generator3'],
        'generator2': ['Generator3'],
        'generator3': ['']
    };

    const gymToQuery = {
    'gymNotInstalled': ['Gym'],
        'gymOn': ['']
    };

    const hallOfFameToQuery = {
        'hallOfFameNotInstalled': ['HallofFame1','HallofFame2','HallofFame3'],
        'hallOfFame1': ['HallofFame2','HallofFame3'],
        'hallOfFame2': ['HallofFame3'],
        'hallOfFame3': ['']
    };

    const heatingToQuery ={
        'heatingNotInstalled': ['Heating1','Heating2','Heating3'],
        'heating1':['Heating2','Heating3'],
        'heating2':['Heating3'],
        'heating3':['']
    };

    const illuminationToQuery ={
        'illuminationNotInstalled': ['Illumination1','Illumination2','Illumination3'],
        'illumination1': ['Illumination2','Illumination3'],
        'illumination2': ['Illumination3'],
        'illumination3': ['']
    };

    const intelligenceCenterToQuery = {
        'intelligenceCenterNotInstalled': ['IntelligenceCenter1','IntelligenceCenter2','IntelligenceCenter3'],
        'intelligenceCenter1': ['IntelligenceCenter2','IntelligenceCenter3'],
        'intelligenceCenter2': ['IntelligenceCenter3'],
        'intelligenceCenter3': ['']
    };

    const lavatoryToQuery = {
        'lavatoryNotInstalled': ['Lavatory1','Lavatory2','Lavatory3'],
        'lavatory1': ['Lavatory2','Lavatory3'],
        'lavatory2': ['Lavatory3'],
        'lavatory3': ['']
    };
    
    const libraryToQuery ={
        'libraryNotInstalled': ['Library1'],
        'libraryInstalled': ['']
    };

    const medstationToQuery = {
        'medStationNotInstalled': ['Medstation1','Medstation2','Medstation3'],
        'medStation1': ['Medstation2','Medstation3'],
        'medStation2': ['Medstation3'],
        'medStation3': ['']
    };

    const nutritionUnitToQuery = {
        'nutritionUnitNotInstalled': ['NutritionUnit1','NutritionUnit2','NutritionUnit3'],
        'nutritionUnit1': ['NutritionUnit2','NutritionUnit3'],
        'nutritionUnit2': ['NutritionUnit3'],
        'nutritionUnit3': ['']
    };

    const restSpaceToQuery = {
        'restSpaceNotInstalled': ['Restspace1','Restspace2','Restspace3'],
        'restSpace1': ['Restspace2','Restspace3'],
        'restSpace2': ['Restspace3'],
        'restSpace3': ['']
    };
    
    const scavCaseToQuery ={
        'scavCaseNotInstalled': ['Scavcase'],
        'scavCaseInstalled': ['']
    };

    const securityToQuery = {
        'securityNotInstalled': ['Security1','Security2','Security3'],
        'security1': ['Security2','Security3'],
        'security2': ['Security3'],
        'security3': ['']
    };

    const shootingRangeToQuery ={
        'shootingRangeNotInstalled': ['Shootingrange1','Shootingrange2','Shootingrange3'],
        'shootingRange1': ['Shootingrange2','Shootingrange3'],
        'shootingRange2': ['Shootingrange3'],
        'shootingRange3': ['']
    };

    const solarPowerToQuery = {
        'solarPowerNotInstalled': ['Solarpower'],
        'solarPowerInstalled': ['']
    };

    const stashToQuery ={
        'stash1': ['Stash2','Stash3','Stash4'],
        'stash2': ['Stash3','Stash4'],
        'stash3': ['Stash4'],
        'stash4': ['']
    };

    const ventsToQuery ={
        'ventNotInstalled': ['Vents1','Vents2','Vents3'],
        'vents1': ['Vents2','Vents3'],
        'vents2': ['Vents3'],
        'vents3': ['']
    };

    const waterCollectorToQuery ={
        'waterCollectorNotInstalled': ['Watercollector1','Watercollector2','Watercollector3'],
        'waterCollector1': ['Watercollector2','Watercollector3'],
        'waterCollector2': ['Watercollector3'],
        'waterCollector3': ['']
    };

    const weaponRackToQuery = {
        'weaponRackNotInstalled': ['Weaponrack1','Weaponrack2','Weaponrack3'],
        'weaponRack1': ['Weaponrack2','Weaponrack3'],
        'weaponRack2': ['Weaponrack3'],
        'weaponRack3': ['']
    };

    const workBenchToQuery = {
        'workBenchNotInstalled': ['Workbench1','Workbench2','Workbench3'],
        'workBench1': ['Workbench2','Workbench3'],
        'workBench2': ['Workbench3'],
        'workBench3': ['']
    };
    // Getting a list of all queries
    const facilitiesToQuery = [
        ...(airFilteringToQuery[selectedAirFilteringUnit] || []), ...(bitcoinFarmToQuery[selectedBitcoinFarm] || []), (boozeGeneratorToQuery[selectedBoozeGenerator] || []),(defectiveWallToQuery[selectedDefectiveWall] || []), (generatorToQuery[selectedGenerator] || []), (gymToQuery[selectedGym] || []), (hallOfFameToQuery[selectedHallOfFame] || []),
        (heatingToQuery[selectedHeating] || []), (illuminationToQuery[selectedIllumination] || []), (intelligenceCenterToQuery[selectedIntelligenceCenter] || []), (lavatoryToQuery[selectedLavatory] || []), (libraryToQuery[selectedLibrary] || []), (medstationToQuery[selectedMedstation] || []),(nutritionUnitToQuery[selectedNutritionUnit] || []), (restSpaceToQuery[selectedRestSpace] || []), (scavCaseToQuery[selectedScavCase] || []), (securityToQuery[selectedSecurity] || []), (shootingRangeToQuery[selectedShootingRange] || []), (solarPowerToQuery[selectedSolarPower] || []), (stashToQuery[selectedStash] || []), (ventsToQuery[selectedVents] || []), (waterCollectorToQuery[selectedWaterCollector] || []),(weaponRackToQuery[selectedWeaponRack] || []), (workBenchToQuery[selectedWorkBench] || [])
    ].filter(facility=> facility);
    //console.log('Facilities to query:', facilitiesToQuery);
    
    const results = await Promise.all(
        facilitiesToQuery.flatMap(async (facilityArrayOrString) => {
            // Check if the element is an array or a string
            const facilities = Array.isArray(facilityArrayOrString) ? facilityArrayOrString : [facilityArrayOrString];
    
            return facilities.map(async (facility) => {
                const docRef = doc(db, 'Collection', facility); // Pass each facility as a string
                const docSnap = await getDoc(docRef);
    
                    console.log(`Querying ${facility}:`, docSnap.exists() ? docSnap.data() : 'No document found');
    
                return docSnap.exists() ? docSnap.data() : null; // Return null if document doesn't exist
            });
        })
    );

    // Process the results
    console.log(results);
    const combinedItems = {};
    results.forEach(facility => {
        if (facility) {
            for (let [item, count] of Object.entries(facility)) {
                // Convert the string count to a number, if applicable
                const numericCount = parseInt(count, 10) || 0; // Default to 0 if parsing fails
                combinedItems[item] = (combinedItems[item]||0) + numericCount;
            }
        }
    });

    console.log('Combined items:', combinedItems); // Log combined items for debugging

    // Update the modal with the summed items
    const itemsUl = document.getElementById("itemUl");
    itemsUl.innerHTML = ''; // Clear previous items
    for (let [item, count] of Object.entries(combinedItems)) {
        let li = document.createElement('li');
        li.className = 'item';
        li.textContent = `${item}: ${count}`;
        itemsUl.appendChild(li);
    }

    // If no items were found, add a message
    if (Object.keys(combinedItems).length === 0) {
        let li = document.createElement('li');
        li.className = 'item';
        li.textContent = 'No items required.';
        itemsUl.appendChild(li);
    }
}
document.addEventListener("DOMContentLoaded", function() { 
    // Get modal element
    var modal = document.getElementById("myModal");

    // Get open modal button
    var openModalBtn = document.getElementById("openModalBtn");

    // Get close button
    var closeBtn = document.getElementsByClassName("close")[0];

    // Listen for open click
    openModalBtn.addEventListener("click", function() {
        const selectedAirFilteringUnit = document.getElementById("airFilteringUnitID").value;
        const selectedBitcoinFarm = document.getElementById("bitcoinFarmID").value;
        const selectedBoozeGenerator = document.getElementById('boozeGeneratorID').value;
        const selectedDefectiveWall = document.getElementById('defectiveWallID').value;
        const selectedGenerator = document.getElementById('generatorID').value;
        const selectedGym = document.getElementById('gymID').value;
        const selectedHallOfFame = document.getElementById('hallOfFameID').value;
        const selectedHeating = document.getElementById('heatingID').value;
        const selectedIllumination = document.getElementById('illuminationID').value;
        const selectedIntelligenceCenter = document.getElementById('intelligenceCenterID').value;
        const selectedLavatory = document.getElementById('lavatoryID').value;
        const selectedLibrary = document.getElementById('libraryID').value;
        const selectedMedstation = document.getElementById('medstationID').value;
        const selectedNutritionUnit = document.getElementById('nutritionUnitID').value;
        const selectedRestSpace = document.getElementById('restSpaceID').value;
        const selectedScavCase = document.getElementById('scavCaseID').value;
        const selectedSecurity = document.getElementById('securityID').value;
        const selectedShootingRange = document.getElementById('shootingRangeID').value;
        const selectedSolarPower = document.getElementById('solarPowerID').value;
        const selectedStash = document.getElementById('stashID').value;
        const selectedVents = document.getElementById('ventsID').value;
        const selectedWaterCollector = document.getElementById('waterCollectorID').value;
        const selectedWeaponRack = document.getElementById('weaponRackID').value;
        const selectedWorkBench = document.getElementById('workBenchID').value;
        
        /*
        console.log('Selected', selectedAirFilteringUnit);
        console.log('Selected', selectedBitcoinFarm);
        console.log('Selected', selectedBoozeGenerator);
        console.log('Selected', selectedDefectiveWall);
        console.log('Selected', selectedGenerator);
        console.log('Selected', selectedGym);
        console.log('Selected', selectedHallOfFame);
        console.log('Selected', selectedHeating);
        console.log('Selected', selectedIllumination);
        console.log('Selected', selectedIntelligenceCenter);
        console.log('Selected', selectedLavatory);
        console.log('Selected', selectedLibrary);
        console.log('Selected', selectedMedstation);
        console.log('Selected', selectedNutritionUnit);
        console.log('Selected', selectedRestSpace);
        console.log('Selected', selectedScavCase);
        console.log('Selected', selectedSecurity);
        console.log('Selected', selectedShootingRange);
        console.log('Selected', selectedSolarPower);
        console.log('Selected', selectedStash);
        console.log('Selected', selectedVents);
        console.log('Selected', selectedWaterCollector);
        console.log('Selected', selectedWeaponRack);
        console.log('Selected', selectedWorkBench);
        */
        query_hideout(selectedAirFilteringUnit, selectedBitcoinFarm, selectedBoozeGenerator, selectedDefectiveWall, selectedGenerator, selectedGym, selectedHallOfFame, selectedHeating, selectedIllumination, selectedIntelligenceCenter, selectedLavatory, selectedLibrary, selectedMedstation, selectedNutritionUnit, selectedRestSpace, selectedScavCase, selectedSecurity, selectedShootingRange, selectedSolarPower, selectedStash, selectedVents, selectedWaterCollector, selectedWeaponRack, selectedWorkBench);

        modal.style.display = "block";
        

    });

    // Listen for close click
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Listen for outside click
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
write_AirFilteringUnit();
write_BitcoinFarm();
write_BoozeGenerator();
write_DefectiveWall();
write_Generator();
write_Gym();
write_HallOfFame();
write_Heating();
write_Illumination();
write_IntelligenceCenter();
write_Lavatory();
write_Library();
write_Medstation();
write_Nutritionunit();
write_RestSpace();
write_ScavCase();
write_Security();
write_ShootingRange();
write_SolarPower();
write_Stash();
write_Vents();
write_WaterCollecter()
write_WeaponRack();
write_WorkBench();