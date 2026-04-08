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

export function calculateRemainingItems(facilities: FacilityDocument[], currentLevels: CurrentLevels): Record<string, number> {
  const totals: Record<string, number> = {};

  for (const facility of facilities) {
    const currentLevel = currentLevels[facility.id] ?? 0;

    for (const [key, levelData] of Object.entries(facility)) {
      if (!key.startsWith("level")) continue;

      const levelNumber = Number(key.replace("level", ""));
      if (levelNumber <= currentLevel) continue;
      if (!levelData || typeof levelData !== "object" || !("items" in levelData)) continue;

      for (const [itemName, quantity] of Object.entries(levelData.items)) {
        totals[itemName] = (totals[itemName] ?? 0) + quantity;
      }
    }
  }

  return totals;
}