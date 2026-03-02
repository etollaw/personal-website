"use client";

import { motion } from "framer-motion";
import MediaPlaceholder from "@/components/MediaPlaceholder";

const sectionAnim = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5 },
};

const tools = [
  {
    name: "R",
    description: "Statistical modeling, visualization (ggplot2), and data wrangling (dplyr, tidyr)",
  },
  {
    name: "QGIS",
    description: "Geographic information systems for spatial analysis, mapping, and geospatial data visualization",
  },
  {
    name: "Data Cleaning",
    description: "Data preprocessing, handling missing values, normalization, and feature engineering",
  },
  {
    name: "Statistical Methods",
    description: "Regression, hypothesis testing, exploratory data analysis, and model validation",
  },
];

export default function DataAnalysisDetail() {
  return (
    <>
      {/* ── Approach ── */}
      <motion.section {...sectionAnim}>
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Approach
        </h2>
        <div className="space-y-4">
          <p className="text-muted leading-relaxed">
            This work involved applying statistical and spatial analysis techniques to
            real-world datasets spanning environmental, social, and geographic domains.
            The emphasis was on analytical rigor: asking the right questions, cleaning
            data carefully, and letting the data tell its story through thoughtful
            visualization.
          </p>
          <p className="text-muted leading-relaxed">
            A distinctive component was the use of QGIS for spatial analysis — working
            with geographic data to identify spatial patterns to complement traditional
            statistical analysis. This combination reflects an ability to work across
            quantitative methods and spatial reasoning.
          </p>
        </div>
      </motion.section>

      {/* ── Tools & Skills ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Tools & Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <h3 className="text-sm font-semibold mb-1">{tool.name}</h3>
              <p className="text-sm text-muted leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Sample Visualizations ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Sample Visualizations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MediaPlaceholder
            type="figure"
            label="Statistical Visualization"
            description="R/ggplot2 analysis output"
          />
          <MediaPlaceholder
            type="diagram"
            label="Spatial Analysis Map"
            description="QGIS geographic visualization"
          />
        </div>
      </motion.section>

      {/* ── Notebooks ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Notebooks & Code
        </h2>
        <MediaPlaceholder
          type="image"
          label="Analysis Notebooks"
          description="R notebooks and scripts — link coming soon"
        />
      </motion.section>
    </>
  );
}
