import { Button } from "../ui/button";

export function ButtonDocs() {
  return (
    <div className="max-w-4xl space-y-[var(--spacing-700)]">
      <div>
        <h1 className="mb-[var(--spacing-400)]">Button Component</h1>
        <p className="text-[var(--mds-color-content-secondary_1)]">
          A versatile button component with multiple variants and sizes, built using the design system tokens.
          All styles are customizable through CSS custom properties.
        </p>
      </div>

      <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-action-secondary-subtle_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-action_1)]">
        <h3 className="mb-[var(--spacing-300)]">Import</h3>
        <pre className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius)] overflow-x-auto">
          <code>{`import { Button } from "./components/ui/button";`}</code>
        </pre>
      </div>

      {/* Variants */}
      <div>
        <h2 className="mb-[var(--spacing-400)]">Variants</h2>
        <p className="mb-[var(--spacing-500)] text-[var(--mds-color-content-secondary_1)]">
          Three button variants are available: primary (default), secondary, and outline.
        </p>

        <div className="space-y-[var(--spacing-600)]">
          {/* Primary */}
          <div className="border border-[var(--mds-color-border-default_1)] rounded-[var(--radius-card)] overflow-hidden">
            <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)]">
              <h3 className="mb-[var(--spacing-400)]">Primary</h3>
              <div className="flex flex-wrap gap-[var(--spacing-400)] p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius)]">
                <Button variant="primary" size="sm">Primary Small</Button>
                <Button variant="primary" size="md">Primary Medium</Button>
                <Button variant="primary" size="lg">Primary Large</Button>
                <Button variant="primary" size="md" disabled>Disabled</Button>
              </div>
            </div>
            <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)]">
              <pre className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius)] overflow-x-auto">
                <code>{`<Button variant="primary" size="md">
  Click me
</Button>`}</code>
              </pre>
            </div>
          </div>

          {/* Secondary */}
          <div className="border border-[var(--mds-color-border-default_1)] rounded-[var(--radius-card)] overflow-hidden">
            <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)]">
              <h3 className="mb-[var(--spacing-400)]">Secondary</h3>
              <div className="flex flex-wrap gap-[var(--spacing-400)] p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius)]">
                <Button variant="secondary" size="sm">Secondary Small</Button>
                <Button variant="secondary" size="md">Secondary Medium</Button>
                <Button variant="secondary" size="lg">Secondary Large</Button>
                <Button variant="secondary" size="md" disabled>Disabled</Button>
              </div>
            </div>
            <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)]">
              <pre className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius)] overflow-x-auto">
                <code>{`<Button variant="secondary" size="md">
  Click me
</Button>`}</code>
              </pre>
            </div>
          </div>

          {/* Outline */}
          <div className="border border-[var(--mds-color-border-default_1)] rounded-[var(--radius-card)] overflow-hidden">
            <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)]">
              <h3 className="mb-[var(--spacing-400)]">Outline</h3>
              <div className="flex flex-wrap gap-[var(--spacing-400)] p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius)]">
                <Button variant="outline" size="sm">Outline Small</Button>
                <Button variant="outline" size="md">Outline Medium</Button>
                <Button variant="outline" size="lg">Outline Large</Button>
                <Button variant="outline" size="md" disabled>Disabled</Button>
              </div>
            </div>
            <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)]">
              <pre className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius)] overflow-x-auto">
                <code>{`<Button variant="outline" size="md">
  Click me
</Button>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Props API */}
      <div>
        <h2 className="mb-[var(--spacing-400)]">Props</h2>
        <div className="border border-[var(--mds-color-border-default_1)] rounded-[var(--radius-card)] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[var(--mds-color-surface-secondary_1)]">
              <tr>
                <th className="text-left p-[var(--spacing-400)] border-b border-[var(--mds-color-border-default_1)]">Prop</th>
                <th className="text-left p-[var(--spacing-400)] border-b border-[var(--mds-color-border-default_1)]">Type</th>
                <th className="text-left p-[var(--spacing-400)] border-b border-[var(--mds-color-border-default_1)]">Default</th>
                <th className="text-left p-[var(--spacing-400)] border-b border-[var(--mds-color-border-default_1)]">Description</th>
              </tr>
            </thead>
            <tbody className="bg-[var(--mds-color-surface-primary_1)]">
              <tr>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  <code className="bg-[var(--mds-color-surface-secondary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
                    variant
                  </code>
                </td>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  "primary" | "secondary" | "outline"
                </td>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  "primary"
                </td>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  The visual style of the button
                </td>
              </tr>
              <tr>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  <code className="bg-[var(--mds-color-surface-secondary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
                    size
                  </code>
                </td>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  "sm" | "md" | "lg"
                </td>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  "md"
                </td>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  The size of the button
                </td>
              </tr>
              <tr>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  <code className="bg-[var(--mds-color-surface-secondary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
                    disabled
                  </code>
                </td>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  boolean
                </td>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  false
                </td>
                <td className="p-[var(--spacing-400)] border-b border-[var(--mds-color-border-subtle_1)]">
                  Disables the button interaction
                </td>
              </tr>
              <tr>
                <td className="p-[var(--spacing-400)]">
                  <code className="bg-[var(--mds-color-surface-secondary_1)] px-[var(--spacing-200)] py-[var(--spacing-100)] rounded-[var(--radius)]">
                    className
                  </code>
                </td>
                <td className="p-[var(--spacing-400)]">
                  string
                </td>
                <td className="p-[var(--spacing-400)]">
                  -
                </td>
                <td className="p-[var(--spacing-400)]">
                  Additional CSS classes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Design Tokens */}
      <div>
        <h2 className="mb-[var(--spacing-400)]">Design Tokens Used</h2>
        <p className="mb-[var(--spacing-400)] text-[var(--mds-color-content-secondary_1)]">
          The button component uses the following design system tokens:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-400)]">
          <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
            <h4 className="mb-[var(--spacing-300)]">Colors</h4>
            <ul className="space-y-[var(--spacing-200)] text-[var(--mds-color-content-secondary_1)]">
              <li>• --mds-color-surface-action-primary_1</li>
              <li>• --mds-color-surface-action-secondary_1</li>
              <li>• --mds-color-border-default_1</li>
              <li>• --mds-color-border-action_1</li>
            </ul>
          </div>
          <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
            <h4 className="mb-[var(--spacing-300)]">Spacing & Shape</h4>
            <ul className="space-y-[var(--spacing-200)] text-[var(--mds-color-content-secondary_1)]">
              <li>• --spacing-100 to --spacing-500</li>
              <li>• --radius-button (12px)</li>
              <li>• Button height: 32px, 40px, 48px</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div>
        <h2 className="mb-[var(--spacing-400)]">Usage Examples</h2>
        
        <div className="space-y-[var(--spacing-500)]">
          <div className="border border-[var(--mds-color-border-default_1)] rounded-[var(--radius-card)] overflow-hidden">
            <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)]">
              <h3 className="mb-[var(--spacing-300)]">Form Actions</h3>
              <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius)]">
                <div className="flex justify-end gap-[var(--spacing-300)]">
                  <Button variant="outline" size="md">Cancel</Button>
                  <Button variant="primary" size="md">Save Changes</Button>
                </div>
              </div>
            </div>
            <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)]">
              <pre className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius)] overflow-x-auto">
                <code>{`<div className="flex justify-end gap-[var(--spacing-300)]">
  <Button variant="outline" size="md">Cancel</Button>
  <Button variant="primary" size="md">Save Changes</Button>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div className="border border-[var(--mds-color-border-default_1)] rounded-[var(--radius-card)] overflow-hidden">
            <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)]">
              <h3 className="mb-[var(--spacing-300)]">Call to Action</h3>
              <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius)] text-center">
                <h3 className="mb-[var(--spacing-300)]">Ready to get started?</h3>
                <p className="mb-[var(--spacing-500)] text-[var(--mds-color-content-secondary_1)]">
                  Join thousands of users already using our platform
                </p>
                <div className="flex justify-center gap-[var(--spacing-300)]">
                  <Button variant="secondary" size="lg">Learn More</Button>
                  <Button variant="primary" size="lg">Sign Up Free</Button>
                </div>
              </div>
            </div>
            <div className="p-[var(--spacing-500)] bg-[var(--mds-color-surface-primary_1)]">
              <pre className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius)] overflow-x-auto">
                <code>{`<Button variant="secondary" size="lg">Learn More</Button>
<Button variant="primary" size="lg">Sign Up Free</Button>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-action-secondary-subtle_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-action_1)]">
        <h3 className="mb-[var(--spacing-400)]">Accessibility</h3>
        <ul className="space-y-[var(--spacing-200)]">
          <li className="flex items-start gap-[var(--spacing-200)]">
            <span className="text-[var(--mds-color-content-action_1)]">✓</span>
            <span>Keyboard focusable with visible focus ring</span>
          </li>
          <li className="flex items-start gap-[var(--spacing-200)]">
            <span className="text-[var(--mds-color-content-action_1)]">✓</span>
            <span>Disabled state prevents interaction and reduces opacity</span>
          </li>
          <li className="flex items-start gap-[var(--spacing-200)]">
            <span className="text-[var(--mds-color-content-action_1)]">✓</span>
            <span>Clear hover and active states for better feedback</span>
          </li>
          <li className="flex items-start gap-[var(--spacing-200)]">
            <span className="text-[var(--mds-color-content-action_1)]">✓</span>
            <span>Meets WCAG 2.1 AA contrast requirements</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
