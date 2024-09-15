import { Personnage } from "../../entities/personnage";

interface PersonnageListProps {
  personnages: Personnage[];
}

function PersonnageList({ personnages }: PersonnageListProps) {
  return (
    <div>
      <h2
        style={{
          color: "#666",
          textAlign: "center",
          marginBottom: "20px",
          padding: "14px",
          display: "inline-block",
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
            <tr style={{ backgroundColor: "rgb(99 103 91)", color: "white" }}>
              <th style={{ padding: "12px" }}>Index</th>
              <th style={{ padding: "12px" }}>Nom</th>
              <th style={{ padding: "12px" }}>Classe</th>
              <th style={{ padding: "12px" }}>Niveau</th>
              <th style={{ padding: "12px" }}>Endurance</th>
              <th style={{ padding: "12px" }}>Points de maîtrise</th>
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
                  {index + 1}
                </td>
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
