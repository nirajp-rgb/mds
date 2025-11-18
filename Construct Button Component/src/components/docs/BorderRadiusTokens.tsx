export function BorderRadiusTokens() {
  const radiusTokens = [
    { token: "--border-radius-100", value: "4px", name: "100", usage: "Small elements, tags" },
    { token: "--border-radius-200", value: "8px", name: "200", usage: "Inputs, small cards" },
    { token: "--border-radius-300", value: "12px", name: "300", usage: "Buttons, chips" },
    { token: "--border-radius-400", value: "16px", name: "400", usage: "Cards, modals" },
    { token: "--border-radius-500", value: "20px", name: "500", usage: "Large cards" },
    { token: "--border-radius-600", value: "24px", name: "600", usage: "Hero sections" },
    { token: "--border-radius-full", value: "1000px", name: "Full", usage: "Pills, avatars" },
  ];

  const semanticTokens = [
    { token: "--radius", value: "8px", name: "Default", usage: "General purpose" },
    { token: "--radius-button", value: "12px", name: "Button", usage: "Button components" },
    { token: "--radius-card", value: "16px", name: "Card", usage: "Card components" },
  ];

  return (
    <div className="max-w-4xl space-y-[var(--spacing-700)]">
      <div>
        <h1 className="mb-[var(--spacing-400)]">Border Radius Tokens</h1>
        <p className="text-[var(--mds-color-content-secondary_1)]">
          Our border radius system provides consistent rounded corners across all components,
          from small elements to large containers.
        </p>
      </div>

      <div>
        <h2 className="mb-[var(--spacing-400)]">Primitive Tokens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-500)]">
          {radiusTokens.map((radius) => (
            <div
              key={radius.token}
              className="border border-[var(--mds-color-border-default_1)] rounded-[var(--radius-card)] p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)]"
            >
              <div className="flex items-start justify-between mb-[var(--spacing-400)]">
                <div>
                  <h3 className="mb-[var(--spacing-100)]">Radius {radius.name}</h3>
                  <p className="text-[var(--mds-color-content-tertiary_1)]">{radius.value}</p>
                </div>
                <code className="bg-[var(--mds-color-surface-secondary_1)] px-[var(--spacing-300)] py-[var(--spacing-200)] rounded-[var(--radius)]">
                  var({radius.token})
                </code>
              </div>
              
              <div className="mb-[var(--spacing-300)]">
                <div
                  className="w-full h-24 bg-gradient-to-br from-[var(--mds-color-surface-action-secondary_1)] to-[var(--mds-color-surface-action-primary_1)]"
                  style={{ borderRadius: `var(${radius.token})` }}
                />
              </div>
              
              <p className="text-[var(--mds-color-content-tertiary_1)]">
                {radius.usage}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-[var(--spacing-400)]">Semantic Tokens</h2>
        <p className="mb-[var(--spacing-400)] text-[var(--mds-color-content-secondary_1)]">
          Semantic tokens provide context-specific border radius values for common use cases.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-400)]">
          {semanticTokens.map((radius) => (
            <div
              key={radius.token}
              className="border border-[var(--mds-color-border-default_1)] rounded-[var(--radius-card)] p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)]"
            >
              <h4 className="mb-[var(--spacing-200)]">{radius.name}</h4>
              <p className="mb-[var(--spacing-300)] text-[var(--mds-color-content-tertiary_1)]">
                {radius.usage}
              </p>
              <div
                className="w-full h-20 mb-[var(--spacing-300)] bg-[var(--mds-color-surface-action-secondary_1)]"
                style={{ borderRadius: `var(${radius.token})` }}
              />
              <code className="text-[var(--text-xs)] bg-[var(--mds-color-surface-secondary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
                var({radius.token})
              </code>
            </div>
          ))}
        </div>
      </div>

      <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
        <h3 className="mb-[var(--spacing-400)]">Usage Example</h3>
        <pre className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius)] overflow-x-auto">
          <code>{`// In CSS
.card {
  border-radius: var(--radius-card);
}

.button {
  border-radius: var(--radius-button);
}

// In Tailwind
className="rounded-[var(--radius-card)]"
className="rounded-[var(--border-radius-300)]"`}</code>
        </pre>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-500)]">
        <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-action-secondary-subtle_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-action_1)]">
          <h3 className="mb-[var(--spacing-300)]">Best Practices</h3>
          <ul className="space-y-[var(--spacing-200)]">
            <li className="flex items-start gap-[var(--spacing-200)]">
              <span className="text-[var(--mds-color-content-action_1)]">✓</span>
              Use semantic tokens when available
            </li>
            <li className="flex items-start gap-[var(--spacing-200)]">
              <span className="text-[var(--mds-color-content-action_1)]">✓</span>
              Maintain consistency within component groups
            </li>
            <li className="flex items-start gap-[var(--spacing-200)]">
              <span className="text-[var(--mds-color-content-action_1)]">✓</span>
              Use larger radii for larger elements
            </li>
          </ul>
        </div>

        <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
          <h3 className="mb-[var(--spacing-300)]">Things to Avoid</h3>
          <ul className="space-y-[var(--spacing-200)]">
            <li className="flex items-start gap-[var(--spacing-200)]">
              <span className="text-[var(--mds-color-content-negative_1)]">✗</span>
              Mixing too many different radii
            </li>
            <li className="flex items-start gap-[var(--spacing-200)]">
              <span className="text-[var(--mds-color-content-negative_1)]">✗</span>
              Using custom radius values
            </li>
            <li className="flex items-start gap-[var(--spacing-200)]">
              <span className="text-[var(--mds-color-content-negative_1)]">✗</span>
              Applying large radii to small elements
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
