//src\entities\personnage.ts
export type Category = "Guerrier" | "Chasseur" | "Mage" | "Prêtre";

export interface MasteryPoints {
    agility: number;
    strenth: number;
    intelligence: number
}

export interface Personnage {
    name: string;
    category: Category;
    masteryPoints: MasteryPoints;
    level: number;
    endurance: number;
}

const categories = {
    Guerrier: 7,
    Chasseur: 5,
    Mage: 4,
    Prêtre: 4,
  };

const calculateEndurance = (category: Category, level: number) => {
    const REF = categories[category];
    return (level * REF + 2 * level * REF - 2) / 2;
}


export function createPersonnage(name: string, category: Category, masteryPoints: MasteryPoints): Personnage {

    const level = 1; 

    const endurance = calculateEndurance(category, level);

    return {
        name,
        category,
        masteryPoints,
        level:1,
        endurance
    };
}

export function editLevel(persons: Personnage[], level: number, personId: number): Personnage[] {
    
    //Logic to update the level of person that have personId in the list

    //return a list of updated persons

    return []
}