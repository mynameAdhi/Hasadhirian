<script setup>
defineProps({
  kind: { type: String, required: true },
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="project-cover">
    <span v-if="label" class="project-cover__tag">{{ label }}</span>

    <svg
      v-if="kind === 'broadcast'"
      class="project-cover__svg"
      viewBox="0 0 480 320"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="240" cy="160" r="70" class="cover-ring" />
      <circle cx="240" cy="160" r="104" class="cover-ring cover-ring--dashed" />
      <path d="M240 56V90M240 230v34M136 160h44M300 160h44" class="cover-line" />
      <path d="M170 160l42-22M268 138l42 22M170 160l42 22M268 182l42-22" class="cover-line" />
      <rect x="180" y="130" width="120" height="60" rx="2" class="cover-panel" />
      <text x="240" y="154" text-anchor="middle" class="cover-code">GATEWAY</text>
      <text x="240" y="172" text-anchor="middle" class="cover-micro cover-accent">BAILEYS / REST</text>
      <circle cx="136" cy="160" r="7" class="cover-node" />
      <circle cx="344" cy="160" r="7" class="cover-node cover-node--accent" />
      <circle cx="240" cy="56" r="5" class="cover-node" />
      <circle cx="240" cy="264" r="5" class="cover-node" />
      <path d="M366 142c8 12 8 24 0 36M380 132c13 18 13 38 0 56" class="cover-accent-line" />
      <text x="32" y="34" class="cover-label">BROADCAST</text>
      <text x="448" y="292" text-anchor="end" class="cover-label">SESSION 01</text>
      <path d="M32 280h44M32 290h26" class="cover-line" />
    </svg>

    <svg
      v-else-if="kind === 'weights'"
      class="project-cover__svg"
      viewBox="0 0 480 320"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <text x="32" y="34" class="cover-label">DECISION MATRIX</text>
      <text x="56" y="86" class="cover-micro">C1</text>
      <text x="96" y="86" class="cover-micro">C2</text>
      <text x="136" y="86" class="cover-micro">C3</text>
      <text x="176" y="86" class="cover-micro">C4</text>
      <text x="44" y="112" text-anchor="end" class="cover-micro">R1</text>
      <text x="44" y="146" text-anchor="end" class="cover-micro">R2</text>
      <text x="44" y="180" text-anchor="end" class="cover-micro">R3</text>
      <text x="44" y="214" text-anchor="end" class="cover-micro">R4</text>

      <g class="cover-line">
        <rect x="56" y="94" width="40" height="32" />
        <rect x="96" y="94" width="40" height="32" />
        <rect x="136" y="94" width="40" height="32" />
        <rect x="56" y="126" width="40" height="32" />
        <rect x="96" y="126" width="40" height="32" />
        <rect x="136" y="126" width="40" height="32" />
        <rect x="56" y="158" width="40" height="32" />
        <rect x="96" y="158" width="40" height="32" />
        <rect x="136" y="158" width="40" height="32" />
        <rect x="56" y="190" width="40" height="32" />
        <rect x="96" y="190" width="40" height="32" />
        <rect x="136" y="190" width="40" height="32" />
      </g>

      <rect x="176" y="94" width="40" height="128" class="cover-panel-accent" />
      <circle cx="196" cy="110" r="3" class="cover-node--accent" />
      <circle cx="196" cy="142" r="3" class="cover-node--accent" />
      <circle cx="196" cy="174" r="3" class="cover-node--accent" />
      <circle cx="196" cy="206" r="3" class="cover-node--accent" />

      <path d="M232 158h32" class="cover-line cover-line--dashed" />
      <path d="M264 152l8 6-8 6" class="cover-accent-line" />

      <text x="288" y="86" class="cover-micro">RANK</text>
      <text x="288" y="112" class="cover-code">01</text>
      <rect x="312" y="101" width="120" height="14" class="cover-panel-accent" />
      <text x="288" y="152" class="cover-code">02</text>
      <rect x="312" y="141" width="92" height="14" class="cover-panel" />
      <text x="288" y="192" class="cover-code">03</text>
      <rect x="312" y="181" width="64" height="14" class="cover-panel" />
      <text x="288" y="232" class="cover-code">04</text>
      <rect x="312" y="221" width="40" height="14" class="cover-panel" />

      <text x="448" y="292" text-anchor="end" class="cover-label">WEIGHTED PRODUCT</text>
    </svg>

    <svg
      v-else-if="kind === 'route'"
      class="project-cover__svg"
      viewBox="0 0 480 320"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <text x="32" y="34" class="cover-label">EXPORT ROUTE</text>
      <path
        d="M68 248C146 242 120 126 218 134S330 222 410 92"
        class="cover-line cover-line--dashed cover-route"
      />
      <rect x="48" y="228" width="40" height="40" class="cover-panel" />
      <rect x="60" y="240" width="16" height="16" class="cover-node--accent" />
      <text x="68" y="290" text-anchor="middle" class="cover-micro">ORIGIN</text>

      <rect x="390" y="72" width="40" height="40" class="cover-panel-accent" />
      <path d="M400 92h20M410 82v20" class="cover-accent-line" />
      <text x="410" y="134" text-anchor="middle" class="cover-micro">PORT</text>

      <circle cx="218" cy="134" r="6" class="cover-node" />
      <path d="M218 118v-18M218 150v18" class="cover-line" />
      <text x="230" y="112" class="cover-micro">TRANSIT</text>

      <path d="M56 56h72M56 66h44" class="cover-line" />
      <text x="448" y="292" text-anchor="end" class="cover-label">B2B CATALOG</text>
      <text x="32" y="52" class="cover-micro">LAT 6.2S / LONG 106.8E</text>
    </svg>

    <svg
      v-else
      class="project-cover__svg"
      viewBox="0 0 480 320"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <text x="32" y="34" class="cover-label">MODULES</text>
      <rect x="56" y="76" width="180" height="112" class="cover-panel" />
      <rect x="72" y="94" width="76" height="10" class="cover-node--accent" />
      <rect x="72" y="116" width="132" height="6" class="cover-bar" />
      <rect x="72" y="130" width="112" height="6" class="cover-bar" />
      <rect x="72" y="154" width="56" height="18" class="cover-panel-accent" />

      <rect x="260" y="76" width="164" height="48" class="cover-panel" />
      <text x="276" y="104" class="cover-micro">API</text>
      <circle cx="404" cy="100" r="5" class="cover-node--accent" />

      <rect x="260" y="140" width="164" height="48" class="cover-panel" />
      <text x="276" y="168" class="cover-micro">DEPLOY</text>
      <path d="M400 158l8 5-8 5" class="cover-accent-line" />

      <path d="M236 132h24M342 124v16" class="cover-line" />
      <path d="M342 188v22H56v22" class="cover-line" />

      <rect x="56" y="232" width="368" height="34" class="cover-panel" />
      <rect x="72" y="245" width="52" height="8" class="cover-bar" />
      <rect x="140" y="245" width="36" height="8" class="cover-bar" />
      <rect x="192" y="245" width="44" height="8" class="cover-bar" />
      <circle cx="400" cy="249" r="5" class="cover-node--accent" />

      <text x="448" y="292" text-anchor="end" class="cover-label">GITHUB / VERCEL</text>
    </svg>
  </div>
</template>

<style scoped>
.project-cover {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: var(--text);
}

.project-cover__tag {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
  padding: 4px 7px;
  border: 1px solid var(--line);
  border-radius: 2px;
  background: var(--surface-2);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 9px;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project-cover__svg {
  width: 100%;
  height: 100%;
  max-width: 560px;
}

.cover-label {
  fill: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
}

.cover-micro {
  fill: var(--muted);
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.08em;
}

.cover-code {
  fill: var(--text);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
}

.cover-accent {
  fill: var(--accent);
}

.cover-line {
  fill: none;
  stroke: var(--line);
  stroke-width: 1;
}

.cover-bar {
  fill: var(--line);
}

.cover-line--dashed {
  stroke-dasharray: 5 5;
}

.cover-line-strong {
  stroke: var(--text);
  stroke-width: 1;
  opacity: 0.5;
}

.cover-accent-line {
  fill: none;
  stroke: var(--accent);
  stroke-width: 1.5;
}

.cover-ring {
  fill: none;
  stroke: var(--line);
  stroke-width: 1;
}

.cover-ring--dashed {
  stroke-dasharray: 4 6;
}

.cover-panel {
  fill: var(--surface);
  stroke: var(--line);
  stroke-width: 1;
}

.cover-panel-accent {
  fill: var(--surface);
  stroke: var(--accent);
  stroke-width: 1;
}

.cover-node {
  fill: var(--surface);
  stroke: var(--text);
  stroke-width: 1.2;
}

.cover-node--accent {
  fill: var(--accent);
  stroke: var(--accent);
}

.cover-route {
  stroke-width: 1.5;
}
</style>
