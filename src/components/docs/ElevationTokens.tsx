export function ElevationTokens() {
  const elevationLevels = [
    {
      token: "--elevation-sm",
      name: "Small",
      value: "0px 2px 16px 0px rgba(11, 22, 25, 0.1)",
      usage: "Subtle depth for cards and inputs",
    },
    {
      token: "--elevation-md",
      name: "Medium",
      value: "0px 4px 20px 0px rgba(11, 22, 25, 0.15)",
      usage: "Dropdown menus and popovers",
    },
    {
      token: "--elevation-lg",
      name: "Large",
      value: "0px 8px 30px 0px rgba(11, 22, 25, 0.2)",
      usage: "Modals and important overlays",
    },
  ];

  return (
    <div className="max-w-4xl space-y-[var(--spacing-700)]">
      <div>
        <h1 className="mb-[var(--spacing-400)]">Elevation Tokens</h1>
        <p className="text-[var(--mds-color-content-secondary_1)]">
          Elevation creates depth and hierarchy through carefully crafted shadows.
          Use these tokens to establish visual hierarchy and bring focus to important elements.
        </p>
      </div>

      <div className="space-y-[var(--spacing-600)]">
        {elevationLevels.map((elevation) => (
          <div key={elevation.token}>
            <div className="mb-[var(--spacing-400)]">
              <h2 className="mb-[var(--spacing-200)]">{elevation.name} Elevation</h2>
              <p className="text-[var(--mds-color-content-secondary_1)]">{elevation.usage}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-600)]">
              <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)]">
                <div
                  className="bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius-card)] p-[var(--spacing-600)] min-h-[200px] flex flex-col items-center justify-center"
                  style={{ boxShadow: `var(${elevation.token})` }}
                >
                  <h3 className="mb-[var(--spacing-300)]">Example Card</h3>
                  <p className="text-center text-[var(--mds-color-content-secondary_1)]">
                    This card demonstrates the {elevation.name.toLowerCase()} elevation effect
                  </p>
                </div>
              </div>

              <div className="space-y-[var(--spacing-400)]">
                <div>
                  <label className="block mb-[var(--spacing-200)] text-[var(--mds-color-content-tertiary_1)]">
                    CSS Token
                  </label>
                  <code className="block bg-[var(--mds-color-surface-secondary_1)] px-[var(--spacing-300)] py-[var(--spacing-200)] rounded-[var(--radius)]">
                    var({elevation.token})
                  </code>
                </div>
                
                <div>
                  <label className="block mb-[var(--spacing-200)] text-[var(--mds-color-content-tertiary_1)]">
                    Value
                  </label>
                  <code className="block bg-[var(--mds-color-surface-secondary_1)] px-[var(--spacing-300)] py-[var(--spacing-200)] rounded-[var(--radius)] text-[var(--text-xs)] break-all">
                    {elevation.value}
                  </code>
                </div>

                <div>
                  <label className="block mb-[var(--spacing-200)] text-[var(--mds-color-content-tertiary_1)]">
                    Usage Example
                  </label>
                  <pre className="bg-[var(--mds-color-surface-secondary_1)] p-[var(--spacing-300)] rounded-[var(--radius)] overflow-x-auto text-[var(--text-xs)]">
                    <code>{`box-shadow: var(${elevation.token});`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
        <h3 className="mb-[var(--spacing-400)]">Tailwind Usage</h3>
        <p className="mb-[var(--spacing-400)] text-[var(--mds-color-content-secondary_1)]">
          Elevation tokens are also mapped to Tailwind shadow utilities for convenience:
        </p>
        <pre className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius)] overflow-x-auto">
          <code>{`// Semantic shadow classes
className="shadow-sm"  // Small elevation
className="shadow-md"  // Medium elevation  
className="shadow-lg"  // Large elevation

// Or use CSS variables directly
className="shadow-[var(--elevation-sm)]"`}</code>
        </pre>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-500)]">
        <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
          <h4 className="mb-[var(--spacing-300)]">Small</h4>
          <p className="text-[var(--mds-color-content-secondary_1)]">
            Use for subtle depth on cards, inputs, and minor interactive elements.
          </p>
        </div>

        <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
          <h4 className="mb-[var(--spacing-300)]">Medium</h4>
          <p className="text-[var(--mds-color-content-secondary_1)]">
            Use for dropdown menus, popovers, and floating elements that need clear separation.
          </p>
        </div>

        <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
          <h4 className="mb-[var(--spacing-300)]">Large</h4>
          <p className="text-[var(--mds-color-content-secondary_1)]">
            Use for modals, dialogs, and critical overlays that demand attention.
          </p>
        </div>
      </div>

      <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-action-secondary-subtle_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-action_1)]">
        <h3 className="mb-[var(--spacing-300)]">Best Practices</h3>
        <ul className="space-y-[var(--spacing-200)]">
          <li className="flex items-start gap-[var(--spacing-200)]">
            <span className="text-[var(--mds-color-content-action_1)]">✓</span>
            <span>Use elevation sparingly to maintain hierarchy</span>
          </li>
          <li className="flex items-start gap-[var(--spacing-200)]">
            <span className="text-[var(--mds-color-content-action_1)]">✓</span>
            <span>Higher elevation should indicate higher importance or focus</span>
          </li>
          <li className="flex items-start gap-[var(--spacing-200)]">
            <span className="text-[var(--mds-color-content-action_1)]">✓</span>
            <span>Don't stack multiple high-elevation elements</span>
          </li>
          <li className="flex items-start gap-[var(--spacing-200)]">
            <span className="text-[var(--mds-color-content-action_1)]">✓</span>
            <span>Consider the background color when choosing elevation level</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
