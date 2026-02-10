// styles/buttonStyles.ts

// Podstawowe style dla wszystkich przycisków
const baseButton = `
flex
rounded-lg
transition-all
duration-200
ease-out
active:scale-[0.98]
disabled:opacity-50
disabled:cursor-not-allowed
disabled:active:scale-100
`;

// PRIMARY
export const primaryButton = `
${baseButton}
bg-brand-primary
text-white
hover:bg-brand-primary/80
active:bg-brand-primary/70
`;

// SUCCESS
export const successButton = `
${baseButton}
bg-ui-success
text-ui-input
hover:bg-ui-success/80
active:bg-ui-success/70
`;

// DANGER
export const dangerButton = `
${baseButton}
bg-ui-danger
text-white
hover:bg-ui-danger/80
active:bg-ui-danger/70
`;

// WARNING
export const warningButton= `
${baseButton}
bg-ui-warning
text-ui-input
hover:bg-ui-warning/80
active:bg-ui-warning/70
`;

// SECONDARY (dodatkowy)
export const secondaryButton = `
${baseButton}
bg-ui-surface
text-ui-text
border
border-ui-border
hover:bg-ui-ghost-hover
active:bg-ui-border
`;

// GHOST (dodatkowy)
export const ghostButton = `
${baseButton} 
text-ui-text
hover:bg-ui-ghost-hover
active:bg-ui-border
`;

// OUTLINE (dodatkowy)
export const outlineButton = `
${baseButton}
bg-transparent
text-brand-primary
border
border-brand-primary
hover:bg-brand-primary/10
active:bg-brand-primary/20
`;


// <div className="flex-1 flex items-center justify-center">
// <button className={`${primaryButton} ${xs} ${custom} gap-3`}>
// <SquarePlay /> Start
// </button>
// </div>