import { useState, useEffect } from "react";
import "./App.css";
import { getAllFacilities } from "./db-operations/firestoreReadOp";
import { calculateRemainingItems } from "./services/calculateRemainingItems";
import { writeAllHideoutData } from "./db-operations/firestoreWriteOp";
import HideoutModuleCard from "./components/HideoutModuleCard";

type FacilityRequirement = {
  facility: string;
  level: number;
};

type FacilityLevelData = {
  items: Record<string, number>;
  requirements: FacilityRequirement[];
};

type FacilityData = {
  level1?: FacilityLevelData;
  level2?: FacilityLevelData;
  level3?: FacilityLevelData;
  level4?: FacilityLevelData;
  level5?: FacilityLevelData;
  level6?: FacilityLevelData;
};

type FacilityDocument = {
  id: string;
} & FacilityData;

type CurrentLevels = Record<string, number>;
type ImageModule = { default: string };

function App() {
  const images = import.meta.glob<ImageModule>("./assets/photos/*.webp", {
    eager: true,
  });

  const imageMap: Record<string, string> = Object.fromEntries(
    Object.entries(images).map(([path, mod]) => {
      const fileName = path.split("/").pop()?.replace(".webp", "") ?? "";
      return [fileName, mod.default];
    })
  );

  const [facilities, setFacilities] = useState<FacilityDocument[]>([]);
  const [currentLevels, setCurrentLevels] = useState<CurrentLevels>({});
  const [remainingItems, setRemainingItems] = useState<Record<string, number>>(
    {}
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getAllFacilities();
        setFacilities(data);

        const initialLevels: CurrentLevels = {};
        for (const facility of data) {
          initialLevels[facility.id] = 0;
        }
        setCurrentLevels(initialLevels);
      } catch (error) {
        console.log("STATUS: 500", error);
      } finally {
        setIsLoading(false);
      }
    }
    async function writeData() {
      try {
        writeAllHideoutData();
      }catch(error){
        console.log("Error", error);
      }
    }
    //writeData();
    fetchData();
  }, []);

  function handleLevelChange(facilityId: string, level: number) {
    setCurrentLevels((prev) => ({
      ...prev,
      [facilityId]: level,
    }));
  }

  function handleCalculation() {
    const totals = calculateRemainingItems(facilities, currentLevels);
    setRemainingItems(totals);
  }

  function formatFacilityName(name: string): string {
    return name
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
      .replace(/([a-z])([A-Z])/g, "$1 $2");
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

      {isLoading ? (
        <p>Loading hideout data...</p>
      ) : (
        <>
          <div className="moduleGrid">
            {facilities.map((facility) => (
              <HideoutModuleCard
                key={facility.id}
                facility={facility}
                imageSrc={imageMap[facility.id]}
                selectedLevel={currentLevels[facility.id] ?? 0}
                onLevelChange={handleLevelChange}
              />
            ))}
          </div>

          <div className="actionsSection">
            <button className="actionButton" onClick={handleCalculation}>Calculate Remaining Items</button>
          </div>

          <div className="resultsSection">
              <div className="resultsHeader">
                <div>
                  <h2>Remaining Items</h2>
                  <p className="resultsSubtext">
                    {Object.keys(remainingItems).length} item types remaining
                  </p>
                </div>
              </div>

              {Object.keys(remainingItems).length === 0 ? (
                <div className="emptyState">
                  <p>No remaining items yet.</p>
                  <span>Select your hideout levels and calculate.</span>
                </div>
              ) : (
                <div className="resultsGrid">
                  {Object.entries(remainingItems)
                    .sort((a, b) => b[1] - a[1])
                    .map(([itemName, quantity]) => (
                      <div className="resultItemCard" key={itemName}>
                        <span className="resultItemName">
                          {formatFacilityName(itemName)}
                        </span>
                        <span className="resultItemQty">{quantity}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>
        </>
      )}
    </div>
  );
}

export default App;