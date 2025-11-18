export function TypographyTokens() {
  const typographyScale = [
    { element: "h1", name: "Title Screen", size: "24px", lineHeight: "30px", weight: "600", token: "--text-2xl" },
    { element: "h2", name: "Title Section", size: "22px", lineHeight: "28px", weight: "600", token: "--text-xl" },
    { element: "h3", name: "Title Subsection", size: "18px", lineHeight: "20px", weight: "600", token: "--text-lg" },
    { element: "h4", name: "Body Large Bold", size: "16px", lineHeight: "20px", weight: "600", token: "--text-base" },
    { element: "p", name: "Body Default", size: "14px", lineHeight: "20px", weight: "400", token: "--text-sm" },
    { element: "label", name: "Body Small", size: "12px", lineHeight: "16px", weight: "500", token: "--text-xs" },
  ];

  return (
    <div className="max-w-4xl space-y-[var(--spacing-700)]">
      <div>
        <h1 className="mb-[var(--spacing-400)]">Typography Tokens</h1>
        <p className="text-[var(--mds-color-content-secondary_1)]">
          Our typography system uses the Archivo font family with carefully crafted scales for headings,
          body text, and labels. All text elements have predefined sizes, line heights, and weights.
        </p>
      </div>

      <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-action-secondary-subtle_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-action_1)]">
        <h3 className="mb-[var(--spacing-300)]">Font Family</h3>
        <p className="mb-[var(--spacing-300)] text-[var(--mds-color-content-secondary_1)]">
          All typography uses the <strong>Archivo</strong> font family, imported from Google Fonts.
        </p>
        <code className="block bg-[var(--mds-color-surface-primary_1)] px-[var(--spacing-300)] py-[var(--spacing-200)] rounded-[var(--radius)]">
          font-family: 'Archivo', sans-serif;
        </code>
      </div>

      <div className="space-y-[var(--spacing-600)]">
        <h2>Typography Scale</h2>
        {typographyScale.map((typo) => (
          <div
            key={typo.element}
            className="border border-[var(--mds-color-border-default_1)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--mds-color-surface-primary_1)]"
          >
            <div className="p-[var(--spacing-600)] border-b border-[var(--mds-color-border-subtle_1)]">
              {typo.element === "h1" && <h1>The quick brown fox jumps</h1>}
              {typo.element === "h2" && <h2>The quick brown fox jumps</h2>}
              {typo.element === "h3" && <h3>The quick brown fox jumps</h3>}
              {typo.element === "h4" && <h4>The quick brown fox jumps</h4>}
              {typo.element === "p" && <p>The quick brown fox jumps over the lazy dog</p>}
              {typo.element === "label" && <label>The quick brown fox jumps over the lazy dog</label>}
            </div>
            <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-secondary_1)]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-400)]">
                <div>
                  <span className="block text-[var(--mds-color-content-tertiary_1)] mb-[var(--spacing-100)]">
                    Element
                  </span>
                  <code className="bg-[var(--mds-color-surface-primary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
                    {typo.element}
                  </code>
                </div>
                <div>
                  <span className="block text-[var(--mds-color-content-tertiary_1)] mb-[var(--spacing-100)]">
                    Size
                  </span>
                  <code className="bg-[var(--mds-color-surface-primary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
                    {typo.size}
                  </code>
                </div>
                <div>
                  <span className="block text-[var(--mds-color-content-tertiary_1)] mb-[var(--spacing-100)]">
                    Line Height
                  </span>
                  <code className="bg-[var(--mds-color-surface-primary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
                    {typo.lineHeight}
                  </code>
                </div>
                <div>
                  <span className="block text-[var(--mds-color-content-tertiary_1)] mb-[var(--spacing-100)]">
                    Weight
                  </span>
                  <code className="bg-[var(--mds-color-surface-primary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
                    {typo.weight}
                  </code>
                </div>
              </div>
              <div className="mt-[var(--spacing-300)]">
                <span className="block text-[var(--mds-color-content-tertiary_1)] mb-[var(--spacing-100)]">
                  CSS Token
                </span>
                <code className="bg-[var(--mds-color-surface-primary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
                  var({typo.token})
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
        <h3 className="mb-[var(--spacing-400)]">Font Weights</h3>
        <div className="grid grid-cols-3 gap-[var(--spacing-400)]">
          <div>
            <p style={{ fontWeight: "400" }} className="mb-[var(--spacing-200)]">Regular 400</p>
            <code className="text-[var(--text-xs)] bg-[var(--mds-color-surface-primary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
              var(--font-weight-regular)
            </code>
          </div>
          <div>
            <p style={{ fontWeight: "500" }} className="mb-[var(--spacing-200)]">Medium 500</p>
            <code className="text-[var(--text-xs)] bg-[var(--mds-color-surface-primary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
              var(--font-weight-medium)
            </code>
          </div>
          <div>
            <p style={{ fontWeight: "600" }} className="mb-[var(--spacing-200)]">Semibold 600</p>
            <code className="text-[var(--text-xs)] bg-[var(--mds-color-surface-primary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
              var(--font-weight-semibold)
            </code>
          </div>
        </div>
      </div>

      <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
        <h3 className="mb-[var(--spacing-400)]">Important Note</h3>
        <p className="text-[var(--mds-color-content-secondary_1)]">
          Typography is automatically applied to HTML elements. <strong>Do not use Tailwind font size, 
          weight, or line-height classes</strong> unless you need to override the defaults. The design 
          system handles all typography through CSS custom properties.
        </p>
      </div>
    </div>
  );
}
