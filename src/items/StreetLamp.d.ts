import { ItemType, SkillType, RecipeLevel, TerrainType } from "Enums";
declare let ExportedObjects: {
    items: {
        name: string;
        description: string;
        attack: number;
        durability: number;
        repairable: boolean;
        flammable: boolean;
        disassemble: boolean;
        recipe: {
            skill: SkillType;
            level: RecipeLevel;
            reputation: number;
            components: {
                type: ItemType;
                requiredAmount: number;
                consumedAmount: number;
                disassembleAmount: number;
                ignoreWeight: boolean;
            }[];
        };
    }[];
    doodads: {
        name: string;
        description: string;
        imagePath: string;
        isRepairable: boolean;
        isTall: boolean;
        particles: {
            b: number;
            g: number;
            r: number;
        };
        pickUp: ItemType[];
        pickUpCanHurtHands: boolean;
        providesLight: number;
        spawnOnTerrain: TerrainType[];
    }[];
};
export default ExportedObjects;
