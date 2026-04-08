import { useState, useEffect } from 'react'
import './App.css'
import { getAllFacilities } from "./db-operations/firestoreReadOp";
import { writeAllHideoutData } from './db-operations/firestoreWriteOp';
import { calculateRemainingItems } from './services/calculateRemainingItems.ts';
import HideoutModuleCard from "./components/HideoutModuleCard.tsx";


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

type CurrentLevels = Record<string, number>;

function App() {
  type ImageModule = { default: string };
  const images = import.meta.glob<ImageModule>('./assets/photos/*.webp', { eager: true });
  const imageList = Object.values(images).map((img) => img.default);
  const [facilities, setFacilities] = useState<FacilityDocument[]>([]);
  const [currentLevels, setCurrentLevels] = useState<Record<string, number>>({});
  const [remainingItems, setRemainingItems] = useState<Record<string, number>>({});
  const [isloading, isSetLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      try{
        //Fetches data
        isSetLoading(true);
        const data = await getAllFacilities();
        setFacilities(data);
        const initialLevels: CurrentLevels = {};

        //Sets all facility levels to 0
        for (const facility of data){
          initialLevels[facility.id] = 0;
        }
        setCurrentLevels(initialLevels);
      }catch(error){
        console.log("STATUS: 500", error);
      }finally{
        isSetLoading(false);
      }
    }

    async function writeData(){
      try{
        await writeAllHideoutData();
      }catch(error){
        console.log(error);
      }
    }
    writeData();
    fetchData();
  }, []);


  function handleLevelChange(facilityId: string, level: number) {
    setCurrentLevels((prev) => ({
      ...prev,
      [facilityId]: level,
    }));
  }

  function handleCalculation(){
    const totals = calculateRemainingItems(facilities, currentLevels);
    setRemainingItems(totals);
  }
  return (
    <div className="appShell">
      <div className="headerSection">
        <h1 className="hideoutHelper">
          <strong>Hideout Helper</strong>
        </h1>
        <h4 className="helperMessage">
          Enter what hideout upgrades you have and it will automatically list
          the amount of items needed to complete the hideout to the max level.
        </h4>
      </div>

      {isloading ? (
        <p>Loading hideout data...</p>
      ) : (
        <>
          <div className="moduleGrid">
            {facilities.map((facility) => (
              <HideoutModuleCard
                key={facility.id}
                facility={facility}
                selectedLevel={currentLevels[facility.id] ?? 0}
                onLevelChange={handleLevelChange}
              />
            ))}
          </div>

          <div className="actionsSection">
            <button onClick={handleCalculation}>Calculate Remaining Items</button>
          </div>

          <div className="resultsSection">
            <h2>Remaining Items</h2>

            {Object.keys(remainingItems).length === 0 ? (
              <p>No calculation yet.</p>
            ) : (
              <ul>
                {Object.entries(remainingItems)
                  .sort((a, b) => b[1] - a[1])
                  .map(([itemName, quantity]) => (
                    <li key={itemName}>
                      {itemName}: {quantity}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default App
