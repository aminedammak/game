import React from "react";

function CreatePersonnage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
        <div className="modal">
          <div className="modal-content">
            <h2>Create Personnage</h2>
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="classe">Class:</label>
                <select id="classe" name="classe" required>
                  <option value="">Select a class</option>
                  <option value="Guerrier">Guerrier</option>
                  <option value="Chasseur">Chasseur</option>
                  <option value="Mage">Mage</option>
                  <option value="Prêtre">Prêtre</option>
                </select>
              </div>
              <div>
                <h3>Mastery Points:</h3>
                <div>
                  <label htmlFor="agility">Agility:</label>
                  <input
                    type="number"
                    id="agility"
                    name="agility"
                    min="0"
                    max={5}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="strength">Strength:</label>
                  <input
                    type="number"
                    id="strength"
                    name="strength"
                    min="0"
                    max={5}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="intelligence">Intelligence:</label>
                  <input
                    type="number"
                    id="intelligence"
                    name="intelligence"
                    min="0"
                    max={5}
                    required
                  />
                </div>
              </div>
              <button type="submit">Create</button>
            </form>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePersonnage;
