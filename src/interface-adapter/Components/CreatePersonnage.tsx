import React from "react";
import { Classe, MasteryPoints } from "../../entities/personnage";
import Message from "./Message";
import { creationResult } from "../../use-cases/useCreatePersonnage";

interface CreatePersonnageProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  classe: Classe;
  setClasse: React.Dispatch<React.SetStateAction<Classe>>;
  masteryPoints: MasteryPoints;
  setMasteryPoints: React.Dispatch<React.SetStateAction<MasteryPoints>>;
  creationResult?: creationResult;
}

function CreatePersonnage({
  handleSubmit,
  openModal,
  closeModal,
  isModalOpen,
  name,
  setName,
  classe,
  setClasse,
  masteryPoints,
  setMasteryPoints,
  creationResult,
}: CreatePersonnageProps) {
  return (
    <div>
      <button
        onClick={openModal}
        style={{
          marginRight: "10px",
          marginTop: "20px",
          padding: "12px",
          backgroundColor: "#FF8C00", // Changed to a dark orange color
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          fontSize: "16px",
        }}
      >
        Créer un personnage
      </button>
      {isModalOpen && (
        <div
          className="modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "5px",
              maxWidth: "500px",
              width: "90%",
              maxHeight: "90%",
              overflowY: "auto",
            }}
          >
            <h2>Créer un personnage</h2>
            {creationResult && creationResult.status === "failure" && (
              <Message text={creationResult.message} type="failure" />
            )}
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="name"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Nom:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{ width: "100%", padding: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="classe"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Classe:
                </label>
                <select
                  id="classe"
                  name="classe"
                  value={classe}
                  onChange={(e) => setClasse(e.target.value as Classe)}
                  required
                  style={{ width: "100%", padding: "5px" }}
                >
                  <option value="">Sélectionner une classe</option>
                  <option value="Guerrier">Guerrier</option>
                  <option value="Chasseur">Chasseur</option>
                  <option value="Mage">Mage</option>
                  <option value="Prêtre">Prêtre</option>
                </select>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <h3>Points de maîtrise</h3>
                <div style={{ marginBottom: "5px" }}>
                  <label
                    htmlFor="agility"
                    style={{ display: "inline-block", width: "100px" }}
                  >
                    Agilité:
                  </label>
                  <input
                    type="number"
                    id="agility"
                    name="agility"
                    value={masteryPoints.agility}
                    onChange={(e) =>
                      setMasteryPoints((prev) => ({
                        ...prev,
                        agility: parseInt(e.target.value),
                      }))
                    }
                    min="0"
                    max={5}
                    required
                    style={{ width: "50px" }}
                  />
                </div>
                <div style={{ marginBottom: "5px" }}>
                  <label
                    htmlFor="strength"
                    style={{ display: "inline-block", width: "100px" }}
                  >
                    Force:
                  </label>
                  <input
                    type="number"
                    id="strength"
                    name="strength"
                    value={masteryPoints.strenth}
                    onChange={(e) =>
                      setMasteryPoints((prev) => ({
                        ...prev,
                        strenth: parseInt(e.target.value),
                      }))
                    }
                    min="0"
                    max={5}
                    required
                    style={{ width: "50px" }}
                  />
                </div>
                <div style={{ marginBottom: "5px" }}>
                  <label
                    htmlFor="intelligence"
                    style={{ display: "inline-block", width: "100px" }}
                  >
                    Intelligence:
                  </label>
                  <input
                    type="number"
                    id="intelligence"
                    name="intelligence"
                    value={masteryPoints.intelligence}
                    onChange={(e) =>
                      setMasteryPoints((prev) => ({
                        ...prev,
                        intelligence: parseInt(e.target.value),
                      }))
                    }
                    min="0"
                    max={5}
                    required
                    style={{ width: "50px" }}
                  />
                </div>
                <p style={{ fontSize: "12px" }}>Le total doit être égal à 5</p>
              </div>
              <button
                type="submit"
                style={{ marginRight: "10px", padding: "5px 10px" }}
                disabled={
                  !name ||
                  !classe ||
                  masteryPoints.agility +
                    masteryPoints.strenth +
                    masteryPoints.intelligence !==
                    5
                }
              >
                Créer
              </button>
              <button onClick={closeModal} style={{ padding: "5px 10px" }}>
                Fermer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePersonnage;
