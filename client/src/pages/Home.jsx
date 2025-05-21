import React from "react";
import AddProjectModal from "../components/AddProjectModal";

function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
        <Projects />
        <hr />
        <Clients />
      </div>
    </>
  );
}

export default Home;
