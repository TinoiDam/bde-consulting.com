'use client';

import { useState } from 'react';

import ExpandableText from '@/components/ExpandableText';

const slides = [
  { label: 'Matrixorganisaties', title: 'Kruisende lijnen, geen eigenaar' },
  { label: 'Gereguleerde markten', title: 'Van norm naar dagelijks gedrag' },
  { label: 'Wetmatigheden van digitalisering', title: 'Van oplevering naar waarde' },
];

type PersonTone = 'member' | 'claimed' | 'programme' | 'project';

const personStyle: Record<PersonTone, { fill: string; stroke: string; width: number; dash?: string }> = {
  member: { fill: '#0a1931', stroke: '#0a1931', width: 1.4 },
  claimed: { fill: '#f7e4e1', stroke: '#9b4037', width: 1.7, dash: '2.5 1.5' },
  programme: { fill: '#9b4037', stroke: '#9b4037', width: 1.4 },
  project: { fill: '#ffffff', stroke: '#0a1931', width: 1.5 },
};

function Person({ x, y, tone = 'member', scale = 1 }: { x: number; y: number; tone?: PersonTone; scale?: number }) {
  const { fill, stroke, width, dash } = personStyle[tone];

  return (
    <g fill={fill} stroke={stroke} strokeWidth={width} strokeDasharray={dash}>
      <circle cx={x} cy={y} r={3.5 * scale} />
      <path d={`M${x - 6 * scale} ${y + 11 * scale}C${x - 5 * scale} ${y + 4 * scale} ${x + 5 * scale} ${y + 4 * scale} ${x + 6 * scale} ${y + 11 * scale}Z`} />
    </g>
  );
}

// Columns are the line directors; the BAU row below each one is the fixed team reporting to them.
const departments = [
  { role: 'CFO', roleShort: 'CFO', name: 'Finance', short: 'Fin' },
  { role: 'CCO', roleShort: 'CCO', name: 'Compliance', short: 'Compl' },
  { role: 'COO', roleShort: 'COO', name: 'Operations', short: 'Ops' },
  { role: 'DIRECTOR', roleShort: 'DIR', name: 'Klantcontact', short: 'Klant' },
  { role: 'CDO', roleShort: 'CDO', name: 'Data', short: 'Data' },
  { role: 'CIO', roleShort: 'CIO', name: 'IT', short: 'IT' },
];

type Demand = { col: number; people: number };
type Project = { manager: string; managerShort: string; label: string; from: number; to: number; demand: Demand[]; inScope: boolean };

// Bars run in parallel; a bar spans every department it touches, but only asks for people where `demand` says so.
const projects: Project[] = [
  { manager: 'PM Digitalisering', managerShort: 'PM Digitaal', label: 'Project 1', from: 0, to: 5, inScope: true, demand: [{ col: 0, people: 1 }, { col: 3, people: 1 }, { col: 4, people: 1 }, { col: 5, people: 1 }] },
  { manager: 'PM AI', managerShort: 'PM AI', label: 'Project 2', from: 2, to: 5, inScope: true, demand: [{ col: 2, people: 1 }, { col: 4, people: 2 }, { col: 5, people: 1 }] },
  { manager: 'PM Procesoptimalisatie', managerShort: 'PM Proces', label: 'Project 3', from: 1, to: 5, inScope: true, demand: [{ col: 1, people: 1 }, { col: 2, people: 1 }, { col: 3, people: 1 }, { col: 5, people: 1 }] },
  { manager: 'PM Compliance Update', managerShort: 'PM Compl. Upd.', label: 'Project X · extern', from: 1, to: 5, inScope: false, demand: [{ col: 1, people: 2 }, { col: 5, people: 1 }] },
];

// Fixed team size per director; not drawn, but it decides which crossings are stuck.
const bauCapacity = [2, 2, 3, 3, 2, 3];

// A column is stuck when its project claims exceed the director's team: those members answer to several bosses at once.
const columnShort = bauCapacity.map((capacity, col) =>
  projects.reduce((sum, project) => sum + project.demand.filter((d) => d.col === col).reduce((n, d) => n + d.people, 0), 0) > capacity,
);

type MatrixLayout = {
  viewBox: string;
  compact?: boolean;
  x0: number;
  colW: number;
  leadX: number;
  headerY: number;
  roleFont: number;
  deptFont: number;
  programmeY: number;
  firstBarY: number;
  barH: number;
  pitch: number;
  scopeGap: number;
  nameFont: number;
  lead: number;
  person: number;
  personGap: number;
  scopePad: number;
  radius: number;
  gridBottom: number;
  legendFont: number;
  legend: { tone: PersonTone; text: string; x: number; y: number }[];
};

function MatrixSvg({ layout, className, id }: { layout: MatrixLayout; className: string; id: string }) {
  const { x0, colW, barH, pitch, compact } = layout;
  const x1 = x0 + colW * departments.length;
  const gridTop = layout.headerY + layout.deptFont + 9;
  const center = (col: number) => x0 + colW * col + colW / 2;
  const rows = projects.map((project, i) => ({
    project,
    y: layout.firstBarY + i * pitch + (project.inScope ? 0 : layout.scopeGap),
    l: x0 + colW * project.from,
    r: x0 + colW * (project.to + 1),
  }));
  const scopeRows = rows.filter((row) => row.project.inScope);
  const scopeTop = layout.programmeY - layout.nameFont * 2;
  const scopeBottom = scopeRows[scopeRows.length - 1].y + barH + layout.scopePad;
  const textX = layout.leadX + 11 * layout.lead;

  const lead = (y: number, tone: PersonTone, name: string, sub: string, color: string) => (
    <g>
      <Person x={layout.leadX} y={y - 3.75 * layout.lead} tone={tone} scale={layout.lead} />
      <text x={textX} y={y - 1} fill={color} fontFamily="var(--font-sans)" fontSize={layout.nameFont} fontWeight="600">{name}</text>
      <text x={textX} y={y + layout.nameFont} fill="#475569" fontFamily="var(--font-sans)" fontSize={layout.nameFont * 0.88}>{sub}</text>
    </g>
  );

  return (
    <svg viewBox={layout.viewBox} role="img" aria-labelledby={`${id}-title ${id}-description`} className={className}>
      <title id={`${id}-title`}>Matrix van lijndirecteuren en projectmanagers</title>
      <desc id={`${id}-description`}>
        Zes lijndirecteuren vormen de kolommen: CFO, CCO, COO, Director Klantcontact, CDO en CIO. Horizontaal lopen vier projecten, elk met een projectmanager: Digitalisering, AI en Procesoptimalisatie vallen onder één programmamanager; Compliance Update is een extern project. Bij de CFO, COO en Director Klantcontact past de projectinzet naast het lijnwerk. Bij de CCO, CDO en CIO claimen de projecten samen meer mensen dan hun team naast het lopende werk kan missen: die medewerkers zitten klem tussen hun directeur en meerdere projectmanagers.
      </desc>

      <g fill="#0a1931" fillOpacity="0.06">
        {departments.map((dept, col) => (col % 2 === 1 ? <rect key={dept.name} x={x0 + colW * col} y={gridTop} width={colW} height={layout.gridBottom - gridTop} /> : null))}
      </g>
      <g fontFamily="var(--font-sans)" textAnchor="middle">
        {departments.map((dept, col) => (
          <g key={dept.name}>
            <text x={center(col)} y={layout.headerY} fill={columnShort[col] ? '#9b4037' : '#0a1931'} fontSize={layout.roleFont} fontWeight="700" letterSpacing="0.8">{compact ? dept.roleShort : dept.role}</text>
            <text x={center(col)} y={layout.headerY + layout.deptFont + 3} fill="#475569" fontSize={layout.deptFont}>{compact ? dept.short : dept.name}</text>
          </g>
        ))}
      </g>
      {lead(layout.programmeY, 'programme', compact ? 'Programma-mgr' : 'Programmamanager', compact ? 'Project 1–3' : 'stuurt Project 1–3', '#9b4037')}

      {rows.map(({ project, y, l, r }) => (
        <g key={project.label}>
          {lead(y + barH / 2, 'project', compact ? project.managerShort : project.manager, compact ? project.label.replace(' · extern', ' · ext.') : project.label, '#0a1931')}
          <rect x={l} y={y} width={r - l} height={barH} rx={layout.radius / 2} fill="#ffffff" stroke="#8193a8" strokeWidth="1" />
          {project.demand.flatMap(({ col, people }) =>
            Array.from({ length: people }, (_, k) => (
              <Person key={`${col}-${k}`} x={center(col) + (k - (people - 1) / 2) * layout.personGap} y={y + barH / 2 - 3.75 * layout.person} tone={columnShort[col] ? 'claimed' : 'member'} scale={layout.person} />
            )),
          )}
        </g>
      ))}

      <rect x={layout.leadX - 8 * layout.lead - layout.scopePad} y={scopeTop} width={x1 + layout.scopePad - (layout.leadX - 8 * layout.lead - layout.scopePad)} height={scopeBottom - scopeTop} rx={layout.radius * 2.5} fill="none" stroke="#9b4037" strokeWidth="2" />

      <g fill="#334155" fontFamily="var(--font-sans)" fontSize={layout.legendFont}>
        {layout.legend.map(({ tone, text, x, y }) => (
          <g key={text}>
            <Person x={x} y={y - layout.legendFont * 0.45} tone={tone} scale={layout.legendFont / 14} />
            <text x={x + layout.legendFont * 1.2} y={y}>{text}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

const desktopLayout: MatrixLayout = {
  viewBox: '30 18 725 336',
  x0: 200,
  colW: 90,
  leadX: 56,
  headerY: 40,
  roleFont: 12,
  deptFont: 9.5,
  programmeY: 82,
  firstBarY: 106,
  barH: 30,
  pitch: 44,
  scopeGap: 28,
  nameFont: 10,
  lead: 1,
  person: 0.95,
  personGap: 19,
  scopePad: 8,
  radius: 4,
  gridBottom: 316,
  legendFont: 10,
  legend: [
    { tone: 'programme', text: 'Programmamanager', x: 60, y: 344 },
    { tone: 'project', text: 'Projectmanager', x: 200, y: 344 },
    { tone: 'member', text: 'Inzet past naast het lijnwerk', x: 325, y: 344 },
    { tone: 'claimed', text: 'Klem tussen lijn en project', x: 520, y: 344 },
  ],
};

const mobileLayout: MatrixLayout = {
  viewBox: '0 12 360 266',
  compact: true,
  x0: 88,
  colW: 44,
  leadX: 14,
  headerY: 28,
  roleFont: 8.5,
  deptFont: 6.5,
  programmeY: 60,
  firstBarY: 76,
  barH: 20,
  pitch: 30,
  scopeGap: 20,
  nameFont: 7,
  lead: 0.66,
  person: 0.62,
  personGap: 11,
  scopePad: 5,
  radius: 3,
  gridBottom: 226,
  legendFont: 7.5,
  legend: [
    { tone: 'programme', text: 'Programmamanager', x: 20, y: 254 },
    { tone: 'project', text: 'Projectmanager', x: 190, y: 254 },
    { tone: 'member', text: 'Inzet past naast het lijnwerk', x: 20, y: 270 },
    { tone: 'claimed', text: 'Klem tussen lijn en project', x: 190, y: 270 },
  ],
};

function MatrixDiagram() {
  return (
    <>
      <MatrixSvg layout={desktopLayout} id="matrix" className="hidden h-auto w-full md:block" />
      <MatrixSvg layout={mobileLayout} id="matrix-mobile" className="h-auto w-full md:hidden" />
    </>
  );
}

function MatrixExplanation() {
  return (
    <div className="max-w-[62ch] space-y-4 border-t border-line pt-6 font-sans text-sm leading-[1.7] text-body">
      <p className="font-serif text-lg leading-snug text-ink">De realiteit van de matrix: één medewerker, vier verschillende bazen.</p>
      <p>
        Bovenstaand schema laat zien waarom grootschalige transformaties in de praktijk verlammen. Het is geen abstract capaciteitsprobleem; het is een menselijk conflict op de werkvloer.
      </p>
      <p>
        De matrix dwingt projectleden om binnen hun eigen afdeling te werken (onder hun Lijnmanager/Director), terwijl er horizontaal hard aan hen getrokken wordt door verschillende Project- en Programmamanagers:
      </p>
      <ul className="space-y-3 pl-4 [list-style:disc] marker:text-muted">
        <li>
          <span className="font-medium text-ink">De Resource-klem (Gestreepte Poppetjes):</span> Terwijl de Director Finance zijn bezetting op orde heeft, zit de CIO (IT) hopeloos klem. Dezelfde IT-specialisten zijn ingedeeld op Project 1, 2 en 3 van jouw programma, én ze worden geclaimd door Project X van een andere afdeling.
        </li>
        <li>
          <span className="font-medium text-ink">Het Mandaat-vacuüm:</span> Aan wie legt de IT-medewerker verantwoording af als de deadlines botsen? Aan zijn eigen CIO, aan jouw Programmamanager, of aan de trekker van Project X? Prioriteiten worden vaag en de operatie stagneert.
        </li>
      </ul>
      <p className="pt-2 font-serif text-base text-ink">BDE deblokkeert de kruispunten.</p>
      <p>
        Wij geloven niet in papieren governance. BDE brengt sturing vanuit de harde inhoud om de prioriteiten tussen de Projectmanagers en de Lijndirecteuren keihard op elkaar uit te lijnen. Wij ontlasten de werkvloer, scheppen rust in de overbelaste kolommen en zorgen dat de verandering daadwerkelijk landt in de dagelijkse operatie.
      </p>
    </div>
  );
}

function RegulationDiagram() {
  return (
    <>
      <svg viewBox="0 0 720 440" role="img" aria-labelledby="regulation-title regulation-description" className="hidden h-auto w-full md:block">
        <title id="regulation-title">Van wetgeving via systemen naar compliant gedrag</title>
        <desc id="regulation-description">
          Een zwarte keten verbindt harde norm, beleid, processen, systemen en technische inrichting. Rode BDE-geleiding haakt op elk niveau aan, loopt door de onderbroken keten en landt met een pijl in het vlak Dagelijks Gedrag.
        </desc>
        <text x="360" y="35" textAnchor="middle" fill="#64748b" fontFamily="var(--font-sans)" fontSize="10" letterSpacing="1.5">WETGEVING</text>
        <rect x="145" y="347" width="520" height="78" className="fill-mist" />
        <path d="M145 347H665" stroke="#c6d0dc" strokeWidth="1" />
        <path d="M360 47V78" fill="none" stroke="#0a1931" strokeWidth="1.5" />
        <path d="M236 78V371" fill="none" stroke="#9b4037" strokeWidth="2.5" />
        <text x="211" y="98" textAnchor="end" fill="#9b4037" fontFamily="var(--font-sans)" fontSize="10" fontWeight="600" letterSpacing="1">BDE</text>
        <path d="M360 78V270" fill="none" stroke="#0a1931" strokeWidth="1.8" />
        <g fill="#0a1931">
          <circle cx="360" cy="78" r="5" />
          <circle cx="360" cy="126" r="5" />
          <circle cx="360" cy="174" r="5" />
          <circle cx="360" cy="222" r="5" />
          <circle cx="360" cy="270" r="5" />
        </g>
        <g fill="none" stroke="#9b4037" strokeWidth="1.2">
          <path d="M236 78H354M236 126H354M236 174H354M236 222H354M236 270H354" />
        </g>
        <g fill="#0a1931" fontFamily="var(--font-sans)" fontSize="11" letterSpacing="1">
          <text x="385" y="82">HARDE NORM</text>
          <text x="385" y="130">BELEID</text>
          <text x="385" y="178">PROCESSEN</text>
          <text x="385" y="226">SYSTEMEN</text>
          <text x="385" y="274">TECHNISCHE INRICHTING</text>
        </g>
        <path d="M360 276V296" fill="none" stroke="#0a1931" strokeWidth="1.8" strokeDasharray="3 4" />
        <path d="M352 282L368 290M368 282L352 290" fill="none" stroke="#9b4037" strokeWidth="2" />
        <path d="M236 371V389" fill="none" stroke="#9b4037" strokeWidth="2.5" />
        <path d="M230 380L236 389L242 380" fill="none" stroke="#9b4037" strokeWidth="2" />
        <g fill="none" stroke="#0a1931" strokeLinecap="round" strokeWidth="1.6">
          <circle cx="422" cy="372" r="5" /><path d="M413 390C414 378 430 378 431 390" />
          <circle cx="447" cy="372" r="5" /><path d="M438 390C439 378 455 378 456 390" />
        </g>
        <text x="478" y="382" fill="#0a1931" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" letterSpacing="0.8">DAGELIJKS GEDRAG</text>
      </svg>
      <svg viewBox="0 0 360 520" role="img" aria-labelledby="regulation-mobile-title regulation-mobile-description" className="h-auto w-full md:hidden">
        <title id="regulation-mobile-title">Van wetgeving via systemen naar compliant gedrag</title>
        <desc id="regulation-mobile-description">
          Een zwarte keten verbindt harde norm, beleid, processen, systemen en technische inrichting. De rode BDE-geleiding haakt op elk niveau aan, loopt door de onderbroken keten en landt met een pijl in het vlak Dagelijks Gedrag.
        </desc>
        <text x="180" y="27" textAnchor="middle" fill="#64748b" fontFamily="var(--font-sans)" fontSize="9" letterSpacing="1.2">WETGEVING</text>
        <rect x="16" y="369" width="328" height="125" className="fill-mist" />
        <path d="M16 369H344" stroke="#c6d0dc" strokeWidth="1" />
        <path d="M180 39V74" fill="none" stroke="#0a1931" strokeWidth="1.5" />
        <path d="M88 76V373" fill="none" stroke="#9b4037" strokeWidth="2.3" />
        <text x="68" y="96" textAnchor="end" fill="#9b4037" fontFamily="var(--font-sans)" fontSize="9" fontWeight="600" letterSpacing="0.8">BDE</text>
        <path d="M180 76V274" fill="none" stroke="#0a1931" strokeWidth="1.8" />
        <g fill="#0a1931">
          <circle cx="180" cy="76" r="4.5" /><circle cx="180" cy="123" r="4.5" /><circle cx="180" cy="170" r="4.5" /><circle cx="180" cy="217" r="4.5" /><circle cx="180" cy="264" r="4.5" />
        </g>
        <g fill="none" stroke="#9b4037" strokeWidth="1.1"><path d="M88 76H176M88 123H176M88 170H176M88 217H176M88 264H176" /></g>
        <g fill="#0a1931" fontFamily="var(--font-sans)" fontSize="10" letterSpacing="0.3">
          <text x="200" y="80">HARDE NORM</text><text x="200" y="127">BELEID</text><text x="200" y="174">PROCESSEN</text><text x="200" y="221">SYSTEMEN</text><text x="200" y="268">TECHNISCHE INRICHTING</text>
        </g>
        <path d="M180 269V293" fill="none" stroke="#0a1931" strokeWidth="1.8" strokeDasharray="3 4" />
        <path d="M173 276L187 284M187 276L173 284" fill="none" stroke="#9b4037" strokeWidth="2" />
        <path d="M88 373V403" fill="none" stroke="#9b4037" strokeWidth="2.3" /><path d="M82 393L88 403L94 393" fill="none" stroke="#9b4037" strokeWidth="2" />
        <g fill="none" stroke="#0a1931" strokeLinecap="round" strokeWidth="1.6"><circle cx="170" cy="414" r="5" /><path d="M161 432C162 420 178 420 179 432" /><circle cx="194" cy="414" r="5" /><path d="M185 432C186 420 202 420 203 432" /></g>
        <text x="180" y="458" textAnchor="middle" fill="#0a1931" fontFamily="var(--font-sans)" fontSize="11" fontWeight="600" letterSpacing="0.7">DAGELIJKS GEDRAG</text>
      </svg>
    </>
  );
}

function DigitalizationDiagram() {
  return (
    <>
      <svg viewBox="0 0 720 440" role="img" aria-labelledby="digital-title digital-description" className="hidden h-auto w-full md:block">
        <title id="digital-title">De afstand tussen technische oplevering en gerealiseerde waarde</title>
        <desc id="digital-description">Techniek is opgeleverd voordat de organisatie de nieuwe werkwijze heeft ingebed. De verbinding naar adoptie en waarde vraagt aandacht.</desc>
        <g fill="#64748b" fontFamily="var(--font-sans)" fontSize="11" letterSpacing="1.5">
          <text x="22" y="139">TECHNIEK</text><text x="22" y="254">ORGANISATIE</text><text x="22" y="369">WAARDE</text>
        </g>
        <g fill="none" stroke="#c6d0dc" strokeWidth="1"><path d="M155 134H680M155 249H680M155 364H680" /></g>
        <path d="M190 134H610" fill="none" stroke="#0a1931" strokeWidth="2" /><circle cx="275" cy="134" r="5" fill="#0a1931" />
        <text x="275" y="111" textAnchor="middle" fill="#0a1931" fontFamily="var(--font-sans)" fontSize="10">OPGELEVERD</text>
        <path d="M190 249H355M390 249H610" fill="none" stroke="#0a1931" strokeWidth="2" /><path d="M355 249L365 239M380 259L390 249" fill="none" stroke="#9b4037" strokeWidth="2" />
        <circle cx="470" cy="249" r="5" fill="#0a1931" /><text x="470" y="226" textAnchor="middle" fill="#0a1931" fontFamily="var(--font-sans)" fontSize="10">INGEBED</text>
        <path d="M190 364H500M535 364H610" fill="none" stroke="#0a1931" strokeWidth="2" /><path d="M500 364L510 354M525 374L535 364" fill="none" stroke="#9b4037" strokeWidth="2" />
        <circle cx="580" cy="364" r="5" fill="#0a1931" /><text x="580" y="341" textAnchor="middle" fill="#0a1931" fontFamily="var(--font-sans)" fontSize="10">GEREALISEERD</text>
        <path d="M275 142V205M470 257V320" fill="none" stroke="#9b4037" strokeWidth="1.5" strokeDasharray="4 6" />
        <text x="293" y="180" fill="#9b4037" fontFamily="var(--font-sans)" fontSize="10">ADOPTIE</text><text x="489" y="295" fill="#9b4037" fontFamily="var(--font-sans)" fontSize="10">EFFECT</text>
        <path d="M190 405H610" fill="none" stroke="#64748b" strokeWidth="1" /><path d="M602 399L610 405L602 411" fill="none" stroke="#64748b" strokeWidth="1" />
        <text x="400" y="428" textAnchor="middle" fill="#64748b" fontFamily="var(--font-sans)" fontSize="10">OPLEVERING IS NIET HET EINDPUNT</text>
      </svg>
      <svg viewBox="0 0 360 460" role="img" aria-labelledby="digital-mobile-title digital-mobile-description" className="h-auto w-full md:hidden">
        <title id="digital-mobile-title">Van technische oplevering naar gerealiseerde waarde</title>
        <desc id="digital-mobile-description">Het systeem is opgeleverd voordat de organisatie het heeft ingebed. De verbindingen naar adoptie en waarde zijn niet vanzelfsprekend.</desc>
        <g fill="#64748b" fontFamily="var(--font-sans)" fontSize="11"><text x="8" y="135">TECHNIEK</text><text x="8" y="250">ORGANISATIE</text><text x="8" y="365">WAARDE</text></g>
        <g fill="none" stroke="#c6d0dc" strokeWidth="1"><path d="M92 130H350M92 245H350M92 360H350" /></g>
        <path d="M100 130H325" fill="none" stroke="#0a1931" strokeWidth="2" /><circle cx="155" cy="130" r="5" fill="#0a1931" /><text x="155" y="108" textAnchor="middle" fill="#0a1931" fontFamily="var(--font-sans)" fontSize="10">OPGELEVERD</text>
        <path d="M100 245H190M215 245H325" fill="none" stroke="#0a1931" strokeWidth="2" /><path d="M190 245L198 237M207 253L215 245" fill="none" stroke="#9b4037" strokeWidth="2" /><circle cx="250" cy="245" r="5" fill="#0a1931" />
        <text x="250" y="223" textAnchor="middle" fill="#0a1931" fontFamily="var(--font-sans)" fontSize="10">INGEBED</text>
        <path d="M100 360H245M270 360H325" fill="none" stroke="#0a1931" strokeWidth="2" /><path d="M245 360L253 352M262 368L270 360" fill="none" stroke="#9b4037" strokeWidth="2" /><circle cx="300" cy="360" r="5" fill="#0a1931" />
        <text x="300" y="338" textAnchor="middle" fill="#0a1931" fontFamily="var(--font-sans)" fontSize="9">WAARDE</text>
        <path d="M155 138V207M250 253V322" fill="none" stroke="#9b4037" strokeWidth="1.5" strokeDasharray="4 6" /><text x="165" y="179" fill="#9b4037" fontFamily="var(--font-sans)" fontSize="10">ADOPTIE</text><text x="260" y="294" fill="#9b4037" fontFamily="var(--font-sans)" fontSize="10">EFFECT</text>
        <path d="M100 410H325" fill="none" stroke="#64748b" strokeWidth="1" /><path d="M317 404L325 410L317 416" fill="none" stroke="#64748b" strokeWidth="1" /><text x="212" y="437" textAnchor="middle" fill="#64748b" fontFamily="var(--font-sans)" fontSize="10">OPLEVERING IS NIET HET EINDPUNT</text>
      </svg>
    </>
  );
}

export default function DiagnosisCanvas() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative min-w-0">
      <div className="border-y border-line bg-mist px-5 py-5 sm:px-8 sm:py-7 lg:px-7 lg:py-8">
        <div className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-line pb-4">
          <p className="eyebrow mb-0">Organisatie in kaart</p>
          <p className="font-sans text-xs tabular-nums text-muted">0{activeIndex + 1} <span aria-hidden="true">/</span> 03</p>
          <p className="col-span-2 mt-3 font-serif text-lg text-ink">{slides[activeIndex].title}</p>
        </div>
        <div className="flex min-h-[300px] items-center py-7 sm:min-h-[360px] lg:min-h-[390px]">
          <div className="w-full">
            {activeIndex === 0 ? <MatrixDiagram /> : activeIndex === 1 ? <RegulationDiagram /> : <DigitalizationDiagram />}
          </div>
        </div>
        {activeIndex === 0 && (
          <div className="pb-7">
            <ExpandableText collapsed={150} showLabel more="Lees verder" less="Minder tonen">
              <MatrixExplanation />
            </ExpandableText>
          </div>
        )}
        <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4" role="group" aria-label="Selecteer een diagnose">
          {slides.map((slide, index) => (
            <button key={slide.label} type="button" aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)} className={`border-b pb-1 text-left font-sans text-xs transition-colors ${activeIndex === index ? 'border-ink font-medium text-ink' : 'border-transparent text-muted hover:text-ink'}`}>
              {slide.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
