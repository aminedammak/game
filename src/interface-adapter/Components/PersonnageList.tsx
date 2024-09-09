import { useState, useEffect } from "react";
import { Personnage } from "../../entities/personnage";
import { getAllPersonnages } from "../../frameworks-drivers/repositories/LocalStoragePersonnageRepository";

function PersonnageList() {
  const [personnages, setPersonnages] = useState<Personnage[]>([]);

  useEffect(() => {
    const loadPersonnages = () => {
      const loadedPersonnages = getAllPersonnages();
      setPersonnages(loadedPersonnages);
    };

    loadPersonnages();
  }, []);

  return (
    <div>
      <h2>Liste des Personnages</h2>
      {personnages.length === 0 ? (
        <p>Aucun personnage n'a été créé.</p>
      ) : (
        <ul>
          {personnages.map((personnage, index) => (
            <li key={index}>
              <h3>{personnage.name}</h3>
              <p>Classe: {personnage.classe}</p>
              <p>Niveau: {personnage.level}</p>
              <p>Endurance: {personnage.endurance}</p>
              <h4>Points de maîtrise:</h4>
              <ul>
                <li>Agilité: {personnage.masteryPoints.agility}</li>
                <li>Force: {personnage.masteryPoints.strenth}</li>
                <li>Intelligence: {personnage.masteryPoints.intelligence}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PersonnageList;
