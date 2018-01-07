import { EquipType, ItemType, SkillType, RecipeLevel, TerrainType } from "Enums";

let StreetLampItem = {
	name: "Street Lamp",
	description: "A metal lamp post that produces light forever from no source, somehow.",
	attack: 1,
	durability: 20,
	repairable: true,
	flammable: false,
	disassemble: true,
	recipe: {
		skill: SkillType.Blacksmithing,
		level: RecipeLevel.Simple,
		reputation: -50,
		components: [
			{
				type: ItemType.Branch,
				requiredAmount: 1,
				consumedAmount: 1,
				disassembleAmount: 1,
				ignoreWeight: false
			}
		]
	}
};

let StreetLampDoodad = {
	name: "Street Lamp",
	description: "A metal lamp post that produces light forever from no source, somehow.",
	imagePath: "path/to/assets",
	isRepairable: true,
	isTall: true,
	particles: {
		b: 50,
		g: 50,
		r: 50
	},
	pickUp: [
		ItemType.Branch
	],
	pickUpCanHurtHands: true,
	providesLight: 5,
	spawnOnTerrain: [
		TerrainType.Dirt
	]
};

let ExportedObjects = {
	items: [
		StreetLampItem
	],
	doodads: [
		StreetLampDoodad
	]
};
export default ExportedObjects