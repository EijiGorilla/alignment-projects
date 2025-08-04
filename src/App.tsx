import React, { createContext, useState } from "react";
import "./App.css";
import "./index.css";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { CalciteShell } from "@esri/calcite-components-react";
import MapDisplay from "./components/MapDisplay";
import { categoryNames, projectNames } from "./UniqueValues";
import AsOfDatePanel from "./components/AsOfDatePanel";

type MyDropdownContextType = {
  categorynames: any;
  updateCategory: any;
  projectnames: any;
  updateProject: any;
};

const initialState = {
  categorynames: undefined,
  updateCategory: undefined,
  projectnames: undefined,
  updateProject: undefined,
};

export const MyContext = createContext<MyDropdownContextType>({
  ...initialState,
});

function App() {
  const [categorynames, setCategorynames] = useState<any>(categoryNames[0]);
  const [projectnames, setProjectnames] = useState<any>(projectNames[0]);

  const updateCategory = (newCategory: any) => {
    setCategorynames(newCategory);
  };

  const updateProject = (newProject: any) => {
    setProjectnames(newProject);
  };

  return (
    <div>
      <CalciteShell>
        <MyContext
          value={{
            categorynames,
            updateCategory,
            projectnames,
            updateProject,
          }}
        >
          <MapDisplay />
          <AsOfDatePanel />
        </MyContext>
      </CalciteShell>
    </div>
  );
}

export default App;
