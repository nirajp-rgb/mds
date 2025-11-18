export function SpacingTokens() {
  const spacingTokens = [
    { token: "--spacing-100", value: "4px", name: "100" },
    { token: "--spacing-200", value: "8px", name: "200" },
    { token: "--spacing-300", value: "12px", name: "300" },
    { token: "--spacing-400", value: "16px", name: "400" },
    { token: "--spacing-500", value: "20px", name: "500" },
    { token: "--spacing-600", value: "24px", name: "600" },
    { token: "--spacing-700", value: "32px", name: "700" },
    { token: "--spacing-800", value: "48px", name: "800" },
  ];

  return (
    <div className="max-w-4xl space-y-[var(--spacing-700)]">
      <div>
        <h1 className="mb-[var(--spacing-400)]">Spacing Tokens</h1>
        <p className="text-[var(--mds-color-content-secondary_1)]">
          Our spacing system provides 8 consistent spacing values to maintain rhythm and hierarchy
          in your layouts. Use these tokens for padding, margins, and gaps.
        </p>
      </div>

      <div className="space-y-[var(--spacing-500)]">
        {spacingTokens.map((spacing) => (
          <div
            key={spacing.token}
            className="border border-[var(--mds-color-border-default_1)] rounded-[var(--radius-card)] p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)]"
          >
            <div className="flex items-center justify-between mb-[var(--spacing-400)]">
              <div>
                <h3 className="mb-[var(--spacing-100)]">Spacing {spacing.name}</h3>
                <p className="text-[var(--mds-color-content-tertiary_1)]">{spacing.value}</p>
              </div>
              <code className="bg-[var(--mds-color-surface-secondary_1)] px-[var(--spacing-300)] py-[var(--spacing-200)] rounded-[var(--radius)]">
                var({spacing.token})
              </code>
            </div>
            <div className="flex items-center gap-[var(--spacing-300)]">
              <div className="bg-[var(--mds-color-surface-secondary_1)] p-[var(--spacing-200)] rounded-[var(--radius)]">
                <div
                  className="bg-[var(--mds-color-surface-action-secondary_1)] rounded-[var(--radius-100)]"
                  style={{ width: `var(${spacing.token})`, height: "32px" }}
                />
              </div>
              <span className="text-[var(--mds-color-content-tertiary_1)]">
                Visual representation
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-500)]">
        <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
          <h3 className="mb-[var(--spacing-400)]">Common Use Cases</h3>
          <ul className="space-y-[var(--spacing-300)]">
            <li className="flex items-start gap-[var(--spacing-200)]">
              <span className="text-[var(--mds-color-content-action_1)]">•</span>
              <div>
                <span className="block">100-200: Tight spacing within components</span>
              </div>
            </li>
            <li className="flex items-start gap-[var(--spacing-200)]">
              <span className="text-[var(--mds-color-content-action_1)]">•</span>
              <div>
                <span className="block">300-400: Standard component padding</span>
              </div>
            </li>
            <li className="flex items-start gap-[var(--spacing-200)]">
              <span className="text-[var(--mds-color-content-action_1)]">•</span>
              <div>
                <span className="block">500-600: Section spacing</span>
              </div>
            </li>
            <li className="flex items-start gap-[var(--spacing-200)]">
              <span className="text-[var(--mds-color-content-action_1)]">•</span>
              <div>
                <span className="block">700-800: Layout and page spacing</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
          <h3 className="mb-[var(--spacing-400)]">Usage Example</h3>
          <pre className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius)] overflow-x-auto text-[var(--text-xs)]">
            <code>{`// Padding
padding: var(--spacing-400);

// Margin
margin-bottom: var(--spacing-600);

// Gap in flex/grid
gap: var(--spacing-300);

// Tailwind
className="p-[var(--spacing-400)]
          mb-[var(--spacing-600)]
          gap-[var(--spacing-300)]"`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
