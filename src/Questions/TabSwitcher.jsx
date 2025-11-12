import React, { useState } from "react";

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  // TODO: Set up state to track the active tab

  const [activeTab, setActiveTab] = useState("home");


  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {/* TODO: Render buttons for each tab */}
        {/* Use data-testid={`tab-button-${tab.id}`} for each button */}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            data-testid={`tab-button-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
