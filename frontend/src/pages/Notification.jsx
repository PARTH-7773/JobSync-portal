import { Bell } from "lucide-react";
import React from "react";
import Hearder from "../components/Hearder";

function Notification() {
  return (
    <>
    <Hearder/>
      <div
        className="container"
        style={{ maxWidth: "600px", marginTop: "50px" }}
      >
        <h2 className="flex gap-1.5 text-lg font-bold items-center">
          <Bell style={{ color: "#f1c40f" }} strokeWidth={2.5} />
          Notifications
        </h2>

        <div
          style={{
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            overflow: "hidden",
            marginTop: "20px",
          }}
        >
          {/* <?php if ($result->num_rows > 0): ?> */}
          {/* <?php while($row = $result->fetch_assoc()): ?> */}
          <div
            style={{
              padding: "20px",
              borderBottom: "1px solid #eee",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            {/* <?php echo $row['is_read'] ? '' : 'background: #fdfbf7;'; ?>" */}
            <div style={{ fontSize: "1.5rem", color: "#667eea" }}>
              <i
                className="fas fa-info-circle"
                style={{
                  display: "flex",
                  alignItems: "enter",
                  justifyContent: "center",
                }}
              ></i>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 500, color: "#333" }}>
                {/* <?php echo htmlspecialchars($row['message']); ?> */}
              </p>
              <small style={{ color: "#999" }}>
                {/* <?php echo date('M d, h:i A', strtotime($row['created_at'])); ?> */}
              </small>
            </div>
            {/* <?php if ($row['link']): ?> */}
            <a
              href="<?php echo htmlspecialchars($row['link']); ?>"
              className="btn-small"
              style={{ fontSize: "0.8rem" }}
            >
              View
            </a>
            {/* <?php endif; ?> */}
          </div>
          {/* <?php endwhile; ?> */}
          {/* <?php else: ?> */}
          <div className='font-bold' style={{ padding: "30px", textAlign: "center", color: "#999" }}>
            No notifications yet.
          </div>
          {/* <?php endif; ?> */}
        </div>
      </div>
    </>
  );
}

export default Notification;
