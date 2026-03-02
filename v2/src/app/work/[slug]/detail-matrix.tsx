"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  FlaskConical,
  TerminalSquare,
  TestTube,
  Layers,
  Copy,
  AlertTriangle,
  Cpu,
} from "lucide-react";

const sectionAnim = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5 },
};

const operations = [
  { name: "Multiplication", fn: "mo.multiply(A, B)", desc: "Product of two matrices with dimension validation" },
  { name: "Determinant", fn: "mo.det(A)", desc: "Scalar determinant of a square matrix" },
  { name: "Inverse", fn: "mo.inverse(A)", desc: "Matrix inverse with singularity detection" },
  { name: "Transpose", fn: "mo.transpose(A)", desc: "Rows ↔ columns swap for any m×n matrix" },
  { name: "Eigenvalues", fn: "mo.eig(A)", desc: "Eigenvalues (λ) and eigenvectors, including complex results" },
  { name: "Solve Ax = b", fn: "mo.solve(A, b)", desc: "Solves a linear system, checks solvability" },
  { name: "LU Decomposition", fn: "mo.lu(A)", desc: "P, L, U factorization with partial pivoting (SciPy)" },
  { name: "Rank", fn: "mo.rank(A)", desc: "Number of linearly independent rows/columns" },
  { name: "Trace", fn: "mo.trace(A)", desc: "Sum of diagonal elements of a square matrix" },
];

const architectureLayers = [
  {
    icon: TerminalSquare,
    label: "Python Package",
    detail: "Importable library — import matrix_operations as mo — with full type hints and NumPy-style docstrings.",
  },
  {
    icon: FlaskConical,
    label: "Flask API",
    detail: "POST /api/compute endpoint parses string input, validates, computes, and returns JSON with descriptions.",
  },
  {
    icon: Calculator,
    label: "Web Calculator",
    detail: "Single-page vanilla JS frontend with live dimension badges, matrix bracket rendering, and pre-loaded examples.",
  },
  {
    icon: Cpu,
    label: "Vercel Serverless",
    detail: "WSGI adapter (api/index.py) enables one-click Vercel deployment. GitHub Actions CI runs tests and lint on every push.",
  },
];

const exceptions = [
  { name: "MatrixError", desc: "Base exception for all matrix operation errors" },
  { name: "DimensionError", desc: "Incompatible dimensions — non-square matrix or inner dimension mismatch" },
  { name: "SingularMatrixError", desc: "Operation requires non-singular matrix but det ≈ 0" },
  { name: "InvalidInputError", desc: "Input cannot be parsed as a valid numeric matrix" },
];

const uiFeatures = [
  "Live dimension badges update as you type (e.g. 3×3)",
  "7 pre-loaded examples: 2×2 multiply, 3×3 determinant, inverse, eigenvalues, solve, LU, singular matrix",
  "CSS-styled matrix brackets mimicking LaTeX notation",
  "Eigenvalue results with subscript lambda notation (λ₁, λ₂ …) and eigenvector matrix",
  "LU results rendered as separate labeled P, L, U matrices",
  "Complex number formatting (re + im·i)",
  "One-click copy result to clipboard",
  "Spinner animation during computation, red-bordered error display",
];

export default function MatrixCalculatorDetail() {
  return (
    <>
      {/* ── Architecture ── */}
      <motion.section {...sectionAnim}>
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Architecture
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {architectureLayers.map((layer) => (
            <div
              key={layer.label}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                  <layer.icon size={16} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold">{layer.label}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{layer.detail}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Operations Table ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          9 Supported Operations
        </h2>
        <div className="space-y-2">
          {operations.map((op, i) => (
            <div
              key={op.name}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 rounded-xl border border-border bg-surface"
            >
              <div className="flex items-center gap-2 shrink-0 min-w-[180px]">
                <span className="w-5 h-5 rounded-full bg-accent-light text-accent text-[10px] font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm font-semibold">{op.name}</span>
              </div>
              <code className="text-xs font-mono text-accent bg-accent-light/50 px-2 py-0.5 rounded shrink-0">
                {op.fn}
              </code>
              <span className="text-sm text-muted leading-relaxed">{op.desc}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Error Handling ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Custom Exception Hierarchy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {exceptions.map((ex) => (
            <div
              key={ex.name}
              className="p-4 rounded-2xl border border-border bg-surface"
            >
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={14} className="text-amber-400" />
                <code className="text-sm font-mono font-semibold text-foreground">
                  {ex.name}
                </code>
              </div>
              <p className="text-sm text-muted leading-relaxed">{ex.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Web Calculator UX ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Calculator UI Features
        </h2>
        <div className="space-y-2">
          {uiFeatures.map((item, i) => (
            <div
              key={i}
              className="flex gap-2.5 p-3 rounded-xl border border-border bg-surface text-sm text-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Testing & CI ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Testing & Quality
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
              <TestTube size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">34 pytest Unit Tests</h3>
              <p className="text-xs text-muted">9 test classes · correctness · edge cases · error handling</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            {[
              { label: "Correctness", desc: "Result validation against NumPy for all 9 operations" },
              { label: "Edge Cases", desc: "Singular matrices, empty input, non-square dimensions" },
              { label: "CI Pipeline", desc: "GitHub Actions runs pytest + ruff lint on every push" },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-xl bg-background border border-border">
                <p className="text-xs font-semibold text-accent mb-1">{item.label}</p>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Usage Example ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Quick Start
        </h2>
        <div className="p-5 rounded-2xl border border-border bg-surface font-mono text-sm leading-relaxed">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={14} className="text-accent" />
            <span className="text-xs font-medium text-muted font-sans uppercase tracking-wider">Python Library</span>
          </div>
          <pre className="text-muted overflow-x-auto whitespace-pre">
{`import matrix_operations as mo

A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]

product  = mo.multiply(A, B)   # [[19, 22], [43, 50]]
det_val  = mo.det(A)           # -2.0
inv_A    = mo.inverse(A)       # [[-2, 1], [1.5, -0.5]]
vals, vecs = mo.eig(A)         # eigenvalues + eigenvectors
P, L, U  = mo.lu(A)           # LU decomposition`}
          </pre>
        </div>
        <div className="p-5 rounded-2xl border border-border bg-surface font-mono text-sm leading-relaxed mt-4">
          <div className="flex items-center gap-2 mb-3">
            <Copy size={14} className="text-accent" />
            <span className="text-xs font-medium text-muted font-sans uppercase tracking-wider">API Request</span>
          </div>
          <pre className="text-muted overflow-x-auto whitespace-pre">
{`POST /api/compute
{
  "operation": "multiply",
  "matrix_a": "1 2; 3 4",
  "matrix_b": "5 6; 7 8"
}

→ { "success": true, "result": [[19,22],[43,50]] }`}
          </pre>
        </div>
      </motion.section>
    </>
  );
}
