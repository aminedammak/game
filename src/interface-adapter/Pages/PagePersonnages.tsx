import React, { useEffect, useState } from "react";
import PersonnageList from "../Components/PersonnageList";
import CreatePersonnage from "../Components/CreatePersonnage";
import { Classe, MasteryPoints, Personnage } from "../../entities/personnage";
import { getAllPersonnages } from "../../frameworks-drivers/repositories/LocalStoragePersonnageRepository";
import {
  creationResult,
  useCreatePersonnage,
} from "../../use-cases/useCreatePersonnage";
import MessageSuccess from "../Components/MessageSuccess";

function Personnages() {
  const [personnages, setPersonnages] = useState<Personnage[]>([]);
  const createPerson = useCreatePersonnage();

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [classe, setClasse] = React.useState<Classe>("Guerrier");
  const [masteryPoints, setMasteryPoints] = React.useState<MasteryPoints>({
    agility: 0,
    strenth: 0,
    intelligence: 0,
  });
  const [creationResult, setCreationResult] = useState<
    creationResult | undefined
  >();

  const [isSuccessVisible, setIsSuccessVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccessVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isSuccessVisible]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const loadPersonnages = () => {
      const loadedPersonnages = getAllPersonnages();
      setPersonnages(loadedPersonnages);
    };

    loadPersonnages();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = createPerson(name, classe, masteryPoints);
    setCreationResult(result);

    if (result.status === "success") {
      // Reset form fields
      setName("");
      setClasse("Guerrier");
      setMasteryPoints({
        agility: 0,
        strenth: 0,
        intelligence: 0,
      });
      // Close the modal
      closeModal();
      const loadedPersonnages = getAllPersonnages();
      setPersonnages(loadedPersonnages);
      setIsSuccessVisible(true);
    }
  };

  return (
    <div style={{ paddingTop: "70px" }}>
      {isSuccessVisible &&
        creationResult &&
        creationResult.status === "success" && (
          <MessageSuccess text={creationResult.message} />
        )}
      <PersonnageList personnages={personnages} />
      <CreatePersonnage
        handleSubmit={handleSubmit}
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        name={name}
        setName={setName}
        classe={classe}
        setClasse={setClasse}
        masteryPoints={masteryPoints}
        setMasteryPoints={setMasteryPoints}
        creationResult={creationResult}
      />
    </div>
  );
}

export default Personnages;
