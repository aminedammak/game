//src\entities\personnage.ts
export type Classe = "Guerrier" | "Chasseur" | "Mage" | "Prêtre";

export interface MasteryPoints {
  agility: number;
  strenth: number;
  intelligence: number;
}

export interface Personnage {
  name: string;
  classe: Classe;
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

const calculateEndurance = (classe: Classe, level: number) => {
  const REF = categories[classe];
  return (level * REF + 2 * level * REF - 2) / 2;
};

export function createPersonnage(
  name: string,
  classe: Classe,
  masteryPoints: MasteryPoints
): Personnage {
  const level = 1;

  const endurance = calculateEndurance(classe, level);

  return {
    name,
    classe,
    masteryPoints,
    level: 1,
    endurance,
  };
}

export function editLevel(
  persons: Personnage[],
  level: number,
  personId: number
): Personnage[] {
  //Logic to update the level of person that have personId in the list

  //return a list of updated persons

  return [];
}
