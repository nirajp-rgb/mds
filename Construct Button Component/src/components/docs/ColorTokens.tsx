export function ColorTokens() {
  const colorGroups = [
    {
      name: "Gray Scale",
      colors: [
        { token: "--mds-color-gray-100", name: "Gray 100", hex: "#ffffff" },
        { token: "--mds-color-gray-200", name: "Gray 200", hex: "#f4f6f6" },
        { token: "--mds-color-gray-300", name: "Gray 300", hex: "#dfe4e5" },
        { token: "--mds-color-gray-400", name: "Gray 400", hex: "#b0b6b8" },
        { token: "--mds-color-gray-500", name: "Gray 500", hex: "#7b898c" },
        { token: "--mds-color-gray-600", name: "Gray 600", hex: "#475659" },
        { token: "--mds-color-gray-700", name: "Gray 700", hex: "#2c3c3f" },
        { token: "--mds-color-gray-800", name: "Gray 800", hex: "#162528" },
        { token: "--mds-color-gray-900", name: "Gray 900", hex: "#0b1619" },
      ],
    },
    {
      name: "Brand Colors",
      colors: [
        { token: "--mds-color-brand-noon-yellow-400", name: "Noon Yellow", hex: "#ffdf00" },
        { token: "--mds-color-brand-clear-blue-400", name: "Clear Blue", hex: "#0288d1" },
        { token: "--mds-color-brand-clear-blue-700", name: "Clear Blue Dark", hex: "#014c74" },
        { token: "--mds-color-brand-clear-blue-100", name: "Clear Blue Light", hex: "#ebf8ff" },
        { token: "--mds-color-brand-midnight-blue", name: "Midnight Blue", hex: "#092d35" },
        { token: "--mds-color-brand-snowy-day", name: "Snowy Day", hex: "#e9e5de" },
      ],
    },
    {
      name: "Semantic Colors - Surface",
      colors: [
        { token: "--mds-color-surface-primary_1", name: "Primary", hex: "#ffffff" },
        { token: "--mds-color-surface-secondary_1", name: "Secondary", hex: "#f4f6f6" },
        { token: "--mds-color-surface-tertiary_1", name: "Tertiary", hex: "#dfe4e5" },
        { token: "--mds-color-surface-action-primary_1", name: "Action Primary", hex: "#ffdf00" },
        { token: "--mds-color-surface-action-secondary_1", name: "Action Secondary", hex: "#0288d1" },
      ],
    },
    {
      name: "Semantic Colors - Content",
      colors: [
        { token: "--mds-color-content-primary_1", name: "Primary", hex: "#162528" },
        { token: "--mds-color-content-secondary_1", name: "Secondary", hex: "#475659" },
        { token: "--mds-color-content-tertiary_1", name: "Tertiary", hex: "#7b898c" },
        { token: "--mds-color-content-on-contrast_1", name: "On Contrast", hex: "#ffffff" },
        { token: "--mds-color-content-action_1", name: "Action", hex: "#0288d1" },
      ],
    },
    {
      name: "Status Colors",
      colors: [
        { token: "--mds-color-green-400", name: "Success", hex: "#388e3c" },
        { token: "--mds-color-red-400", name: "Error", hex: "#ff3131" },
        { token: "--mds-color-orange-400", name: "Warning", hex: "#f59700" },
        { token: "--mds-color-blue-400", name: "Info", hex: "#0b66ef" },
      ],
    },
  ];

  return (
    <div className="max-w-4xl space-y-[var(--spacing-700)]">
      <div>
        <h1 className="mb-[var(--spacing-400)]">Color Tokens</h1>
        <p className="text-[var(--mds-color-content-secondary_1)]">
          Our color system includes primitive colors, semantic tokens, and status colors.
          All colors are defined as CSS custom properties for easy customization.
        </p>
      </div>

      {colorGroups.map((group) => (
        <div key={group.name}>
          <h2 className="mb-[var(--spacing-400)]">{group.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-400)]">
            {group.colors.map((color) => (
              <div
                key={color.token}
                className="border border-[var(--mds-color-border-default_1)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--mds-color-surface-primary_1)]"
              >
                <div
                  className="h-24 w-full"
                  style={{ backgroundColor: `var(${color.token})` }}
                />
                <div className="p-[var(--spacing-400)]">
                  <h4 className="mb-[var(--spacing-100)]">{color.name}</h4>
                  <p className="mb-[var(--spacing-200)] text-[var(--mds-color-content-tertiary_1)]">
                    {color.hex.toUpperCase()}
                  </p>
                  <code className="text-[var(--text-xs)] bg-[var(--mds-color-surface-secondary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
                    var({color.token})
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
        <h3 className="mb-[var(--spacing-400)]">Usage Example</h3>
        <pre className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius)] overflow-x-auto">
          <code>{`// In Tailwind classes
<div className="bg-[var(--mds-color-surface-primary_1)] 
              text-[var(--mds-color-content-primary_1)]">
  Content here
</div>

// In CSS
.custom-element {
  background-color: var(--mds-color-surface-action-primary_1);
  color: var(--mds-color-content-primary_1);
}`}</code>
        </pre>
      </div>
    </div>
  );
}
