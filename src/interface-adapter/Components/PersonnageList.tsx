import { useState, useEffect } from "react";
import { Personnage } from "../../entities/personnage";
import { getAllPersonnages } from "../../frameworks-drivers/repositories/LocalStoragePersonnageRepository";

interface PersonnageListProps {
  personnages: Personnage[];
}

function PersonnageList({ personnages }: PersonnageListProps) {
  return (
    <div>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
          backgroundColor: "#3F9F40",
          padding: "14px",
          boxShadow: "0 0 22px rgba(0, 0, 0, 0.12)",
          borderRadius: "4px",
        }}
      >
        Liste des Personnages
      </h2>
      {personnages.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>
          Aucun personnage n'a été créé.
        </p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
              <th style={{ padding: "12px", textAlign: "left" }}>Nom</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Classe</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Niveau</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Endurance</th>
              <th style={{ padding: "12px", textAlign: "left" }}>
                Points de maîtrise
              </th>
            </tr>
          </thead>
          <tbody>
            {personnages.map((personnage, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white",
                }}
              >
                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  {personnage.name}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  {personnage.classe}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  {personnage.level}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  {personnage.endurance}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  <span style={{ color: "#1e90ff" }}>
                    Agilité: {personnage.masteryPoints.agility}
                  </span>
                  ,{" "}
                  <span style={{ color: "#ff4500" }}>
                    Force: {personnage.masteryPoints.strenth}
                  </span>
                  ,{" "}
                  <span style={{ color: "#9932cc" }}>
                    Intelligence: {personnage.masteryPoints.intelligence}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PersonnageList;
