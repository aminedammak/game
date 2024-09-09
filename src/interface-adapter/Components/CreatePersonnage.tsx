import React from "react";
import { Classe, MasteryPoints } from "../../entities/personnage";

function CreatePersonnage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [classe, setClasse] = React.useState<Classe>("Guerrier");
  const [masteryPoints, setMasteryPoints] = React.useState<MasteryPoints>({
    agility: 0,
    strenth: 0,
    intelligence: 0,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Create Personnage</button>
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
            <h2>Create Personnage</h2>
            <form>
              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="name"
                  style={{ display: "block", marginBottom: "5px" }}
                >
                  Name:
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
                  Class:
                </label>
                <select
                  id="classe"
                  name="classe"
                  value={classe}
                  onChange={(e) => setClasse(e.target.value as Classe)}
                  required
                  style={{ width: "100%", padding: "5px" }}
                >
                  <option value="">Select a class</option>
                  <option value="Guerrier">Guerrier</option>
                  <option value="Chasseur">Chasseur</option>
                  <option value="Mage">Mage</option>
                  <option value="Prêtre">Prêtre</option>
                </select>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <h3>Mastery Points:</h3>
                <div style={{ marginBottom: "5px" }}>
                  <label
                    htmlFor="agility"
                    style={{ display: "inline-block", width: "100px" }}
                  >
                    Agility:
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
                    Strength:
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
              </div>
              <button
                type="submit"
                style={{ marginRight: "10px", padding: "5px 10px" }}
              >
                Create
              </button>
              <button onClick={closeModal} style={{ padding: "5px 10px" }}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePersonnage;
