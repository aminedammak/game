import { Personnage } from "../../entities/personnage";

export const getAllPersonnages = (): Personnage[] => {
    return JSON.parse(localStorage.getItem('personnages') || '[]');
  };

  export const savePersonnage = (personnage: Personnage): void => {
    const personnages = getAllPersonnages();
    personnages.push(personnage);
    localStorage.setItem('personnages', JSON.stringify(personnages));
  };