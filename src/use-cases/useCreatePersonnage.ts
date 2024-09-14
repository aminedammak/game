import {
  Classe,
  createPersonnage,
  MasteryPoints,
} from "../entities/personnage";
import {
  getAllPersonnages,
  savePersonnage,
} from "../frameworks-drivers/repositories/LocalStoragePersonnageRepository";

export interface creationResult {
  status: "success" | "failure";
  message: string;
}

export const useCreatePersonnage = () => {
  return (
    name: string,
    classe: Classe,
    masteryPoints: MasteryPoints
  ): creationResult => {
    const personnages = getAllPersonnages();

    // check if the name does not already exists in the list of personnages, otherwise show a warning message
    const personnageExists = personnages.some(
      (personnage) => personnage.name === name
    );

    if (personnageExists) {
      return {
        status: "failure",
        message:
          "Vous ne pouvez pas utiliser plusieurs fois le même nom de personnage",
      };
    }

    // check that the list is less than 10, otherwise show a warning message
    if (personnages.length >= 10) {
      return {
        status: "failure",
        message: "Vous avez atteint la limite de 10 personnages par joueur",
      };
    }

    // if the above checks passes, proceed for the creation of personnage
    const newPersonnage = createPersonnage(name, classe, masteryPoints);
    savePersonnage(newPersonnage);
    return { status: "success", message: "Nouveau personnage enregistré" };
  };
};
