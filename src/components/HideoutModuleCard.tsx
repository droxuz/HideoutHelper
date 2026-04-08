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

type HideoutModuleCardProps = {
  facility: FacilityDocument;
  selectedLevel: number;
  onLevelChange: (facilityId: string, level: number) => void;
};

function HideoutModuleCard({
  facility,
  selectedLevel,
  onLevelChange,
}: HideoutModuleCardProps) {
  const availableLevels = Object.keys(facility)
    .filter((key) => key.startsWith("level"))
    .map((key) => Number(key.replace("level", "")))
    .sort((a, b) => a - b);

  const maxLevel =
    availableLevels.length > 0 ? availableLevels[availableLevels.length - 1] : 0;

  return (
    <div className="hideoutModuleCard">
      <h3>{facility.id}</h3>

      <label htmlFor={facility.id}>Current Level</label>
      <select
        id={facility.id}
        value={selectedLevel}
        onChange={(e) => onLevelChange(facility.id, Number(e.target.value))}
      >
        <option value={0}>Not Built</option>
        {Array.from({ length: maxLevel }, (_, index) => index + 1).map(
          (level) => (
            <option key={level} value={level}>
              Level {level}
            </option>
          )
        )}
      </select>

      <p>Max Level: {maxLevel}</p>
    </div>
  );
}

export default HideoutModuleCard;