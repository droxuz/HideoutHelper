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
  imageSrc?: string;
  selectedLevel: number;
  onLevelChange: (facilityId: string, level: number) => void;
};

function HideoutModuleCard({
  facility,
  imageSrc,
  selectedLevel,
  onLevelChange,
}: HideoutModuleCardProps) {
  const availableLevels = Object.keys(facility)
    .filter((key) => key.startsWith("level"))
    .map((key) => Number(key.replace("level", "")))
    .sort((a, b) => a - b);

  const maxLevel =
    availableLevels.length > 0 ? availableLevels[availableLevels.length - 1] : 0;

  function decrementLevel() {
    onLevelChange(facility.id, Math.max(0, selectedLevel - 1));
  }

  function incrementLevel() {
    onLevelChange(facility.id, Math.min(maxLevel, selectedLevel + 1));
  }

  return (
    <div className="hideoutModuleCard">
      {imageSrc ? (
        <div className="imageWrapper">
          <img src={imageSrc} alt={facility.id} className="hideoutModuleImage" />
        </div>
      ) : (
        <div className="hideoutModuleImagePlaceholder">No Image</div>
      )}

      <h3>{facility.id}</h3>

      <p className="levelLabel">Current Level</p>

      <div className="levelControl">
        <button type="button" onClick={decrementLevel} disabled={selectedLevel === 0} className="levelButton negative">
          -
        </button>

        <span className="levelValue">
          {selectedLevel === 0 ? "Not Built" : `Level ${selectedLevel}`}
        </span>

        <button type="button" onClick={incrementLevel} disabled={selectedLevel === maxLevel} className="levelButton positive">
          +
        </button>
      </div>

      <p>Max Level: {maxLevel}</p>
    </div>
  );
}

export default HideoutModuleCard;