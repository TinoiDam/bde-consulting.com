import fs from 'node:fs';
import path from 'node:path';

// Badges live in public/assets/certs/; until a file exists the name is shown as a text tag.
export const certifications = [
  { name: 'PRINCE2 7', file: 'prince2.png' },
  { name: 'IREB CPRE', file: 'cpre.png' },
  { name: 'Lean Six Sigma Black Belt', file: 'sixsigma.png' },
  { name: 'Professional Scrum Master (PSM I)', file: 'scrum.png' },
  { name: 'Microsoft Power BI Data Analyst (PL-300)', file: 'microsoft-pl300.png' },
  { name: 'Lean Portfolio Management', file: 'lean-portfolio.png' },
  { name: 'Data Scientist in Python', file: 'python-data.png' },
  { name: 'AI voor gevorderden', file: 'ai-advanced.png' },
  { name: 'Archimate', file: 'archimate.png' },
].map((c) => ({
  ...c,
  src: fs.existsSync(path.join(process.cwd(), 'public', 'assets', 'certs', c.file)) ? `/assets/certs/${c.file}` : null,
}));
