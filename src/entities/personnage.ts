//src\entities\personnage.ts
type Category = "Guerrier" | "Chasseur" | "Mage" | "Prêtre";

export interface MasteryPoints {
    agility: number;
    strenth: number;
    intelligence: number
}

export interface Person {
    name: string;
    category: Category;
    masteryPoints: MasteryPoints;
    level: number;
    endurance: number;
}

export function createPerson(name: string, category: Category, masteryPoints: MasteryPoints, level: number, endurance: number): Person {
    return {
        name,
        category,
        masteryPoints,
        level,
        endurance
    };
}

