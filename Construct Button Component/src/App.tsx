import { useState } from "react";
import { Button } from "./components/ui/button";
import { ColorTokens } from "./components/docs/ColorTokens";
import { SpacingTokens } from "./components/docs/SpacingTokens";
import { TypographyTokens } from "./components/docs/TypographyTokens";
import { BorderRadiusTokens } from "./components/docs/BorderRadiusTokens";
import { ElevationTokens } from "./components/docs/ElevationTokens";
import { ButtonDocs } from "./components/docs/ButtonDocs";

type Section = "overview" | "colors" | "spacing" | "typography" | "radius" | "elevation" | "button";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("overview");

  const navigation = [
    { id: "overview" as Section, label: "Overview", icon: "📖" },
    { id: "colors" as Section, label: "Colors", icon: "🎨" },
    { id: "spacing" as Section, label: "Spacing", icon: "📏" },
    { id: "typography" as Section, label: "Typography", icon: "✍️" },
    { id: "radius" as Section, label: "Border Radius", icon: "⬜" },
    { id: "elevation" as Section, label: "Elevation", icon: "💫" },
    { id: "button" as Section, label: "Button", icon: "🔘" },
  ];

  return (
    <div className="min-h-screen bg-[var(--mds-color-surface-page_1)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--mds-color-surface-primary_1)] border-b border-[var(--mds-color-border-default_1)] shadow-[var(--shadow-sm)]">
        <div className="max-w-7xl mx-auto px-[var(--spacing-600)] py-[var(--spacing-400)] flex items-center justify-between">
          <div>
            <h1 className="mb-[var(--spacing-100)]">Design System</h1>
            <p className="text-[var(--mds-color-content-secondary_1)]">
              Component library and design tokens documentation
            </p>
          </div>
          <div className="flex gap-[var(--spacing-300)]">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://github.com/nirajp-rgb/mds", "_blank")}
            >
              GitHub
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setActiveSection("button")}
            >
              View Components
            </Button>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar Navigation */}
        <aside className="w-64 border-r border-[var(--mds-color-border-subtle_1)] bg-[var(--mds-color-surface-primary_1)] sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
          <nav className="p-[var(--spacing-400)]">
            <div className="space-y-[var(--spacing-100)]">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-[var(--spacing-400)] py-[var(--spacing-300)] rounded-[var(--radius)] transition-colors ${
                    activeSection === item.id
                      ? "bg-[var(--mds-color-surface-action-secondary-subtle_1)] text-[var(--mds-color-content-action_1)]"
                      : "text-[var(--mds-color-content-secondary_1)] hover:bg-[var(--mds-color-surface-secondary_1)]"
                  }`}
                >
                  <span className="mr-[var(--spacing-200)]">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-[var(--spacing-600)] pt-[var(--spacing-600)] border-t border-[var(--mds-color-border-subtle_1)]">
              <h4 className="px-[var(--spacing-400)] mb-[var(--spacing-300)] text-[var(--mds-color-content-tertiary_1)]">
                Resources
              </h4>
              <a
                href="#getting-started"
                className="block px-[var(--spacing-400)] py-[var(--spacing-200)] text-[var(--mds-color-content-secondary_1)] hover:text-[var(--mds-color-content-action_1)] transition-colors"
              >
                Getting Started
              </a>
              <a
                href="#guidelines"
                className="block px-[var(--spacing-400)] py-[var(--spacing-200)] text-[var(--mds-color-content-secondary_1)] hover:text-[var(--mds-color-content-action_1)] transition-colors"
              >
                Guidelines
              </a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-[var(--spacing-800)]">
          {activeSection === "overview" && <Overview />}
          {activeSection === "colors" && <ColorTokens />}
          {activeSection === "spacing" && <SpacingTokens />}
          {activeSection === "typography" && <TypographyTokens />}
          {activeSection === "radius" && <BorderRadiusTokens />}
          {activeSection === "elevation" && <ElevationTokens />}
          {activeSection === "button" && <ButtonDocs />}
        </main>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div className="max-w-4xl space-y-[var(--spacing-700)]">
      <div>
        <h1 className="mb-[var(--spacing-400)]">Welcome to the Design System</h1>
        <p className="mb-[var(--spacing-400)] text-[var(--mds-color-content-secondary_1)]">
          A comprehensive design system built with React, Tailwind CSS, and custom design tokens.
          This system provides a consistent foundation for building beautiful, accessible interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-500)]">
        <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
          <h3 className="mb-[var(--spacing-300)]">🎨 Design Tokens</h3>
          <p className="mb-[var(--spacing-400)] text-[var(--mds-color-content-secondary_1)]">
            Explore our comprehensive token system including colors, spacing, typography, and more.
          </p>
          <ul className="space-y-[var(--spacing-200)] text-[var(--mds-color-content-secondary_1)]">
            <li>• 50+ color tokens</li>
            <li>• 8 spacing scales</li>
            <li>• 6 typography scales</li>
            <li>• 7 border radius options</li>
            <li>• 3 elevation levels</li>
          </ul>
        </div>

        <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
          <h3 className="mb-[var(--spacing-300)]">🔘 Components</h3>
          <p className="mb-[var(--spacing-400)] text-[var(--mds-color-content-secondary_1)]">
            Production-ready React components built with accessibility and customization in mind.
          </p>
          <ul className="space-y-[var(--spacing-200)] text-[var(--mds-color-content-secondary_1)]">
            <li>• Multiple variants</li>
            <li>• Responsive sizes</li>
            <li>• Accessible by default</li>
            <li>• Fully customizable</li>
            <li>• TypeScript support</li>
          </ul>
        </div>
      </div>

      <div id="getting-started" className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-primary_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-default_1)]">
        <h2 className="mb-[var(--spacing-400)]">Getting Started</h2>
        
        <h3 className="mb-[var(--spacing-300)]">Installation</h3>
        <pre className="mb-[var(--spacing-500)] p-[var(--spacing-400)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius)] overflow-x-auto">
          <code>npm install</code>
        </pre>

        <h3 className="mb-[var(--spacing-300)]">Using Design Tokens</h3>
        <p className="mb-[var(--spacing-300)] text-[var(--mds-color-content-secondary_1)]">
          All design tokens are available as CSS custom properties:
        </p>
        <pre className="mb-[var(--spacing-500)] p-[var(--spacing-400)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius)] overflow-x-auto">
          <code>{`// In your CSS or Tailwind classes
background-color: var(--mds-color-surface-primary_1);
padding: var(--spacing-400);
border-radius: var(--radius-card);`}</code>
        </pre>

        <h3 className="mb-[var(--spacing-300)]">Using Components</h3>
        <pre className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-secondary_1)] rounded-[var(--radius)] overflow-x-auto">
          <code>{`import { Button } from "./components/ui/button";

<Button variant="primary" size="md">
  Click me
</Button>`}</code>
        </pre>
      </div>

      <div className="p-[var(--spacing-600)] bg-[var(--mds-color-surface-action-secondary-subtle_1)] rounded-[var(--radius-card)] border border-[var(--mds-color-border-action_1)]">
        <h3 className="mb-[var(--spacing-300)]">Design Principles</h3>
        <div className="space-y-[var(--spacing-400)]">
          <div>
            <h4 className="mb-[var(--spacing-200)]">Consistency</h4>
            <p className="text-[var(--mds-color-content-secondary_1)]">
              Use design tokens to maintain visual consistency across all components and applications.
            </p>
          </div>
          <div>
            <h4 className="mb-[var(--spacing-200)]">Accessibility</h4>
            <p className="text-[var(--mds-color-content-secondary_1)]">
              All components are built with WCAG 2.1 AA standards in mind, ensuring usability for everyone.
            </p>
          </div>
          <div>
            <h4 className="mb-[var(--spacing-200)]">Flexibility</h4>
            <p className="text-[var(--mds-color-content-secondary_1)]">
              Customize the design system by updating CSS custom properties to match your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
