# Contributing to the Design System

Thank you for your interest in contributing to our design system! This guide will help you add new components and tokens to the documentation.

## Adding New Components

### 1. Create the Component

Create your component in `/components/ui/`:

```tsx
// /components/ui/input.tsx
import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "error";
  // Add your props
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    // Use design system tokens
    const baseStyles = "px-[var(--spacing-400)] py-[var(--spacing-300)] rounded-[var(--radius)]";
    const variantStyles = {
      default: "border border-[var(--mds-color-border-default_1)]",
      error: "border border-[var(--mds-color-border-negative_1)]"
    };

    return (
      <input
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
export { Input };
```

### 2. Create Documentation

Create a documentation component in `/components/docs/`:

```tsx
// /components/docs/InputDocs.tsx
import { Input } from "../ui/input";

export function InputDocs() {
  return (
    <div className="max-w-4xl space-y-[var(--spacing-700)]">
      <div>
        <h1 className="mb-[var(--spacing-400)]">Input Component</h1>
        <p className="text-[var(--mds-color-content-secondary_1)]">
          Description of your component
        </p>
      </div>

      {/* Add examples, props table, etc. */}
    </div>
  );
}
```

### 3. Add to Navigation

Update `/App.tsx` to include your new component:

```tsx
// Add to the Section type
type Section = "overview" | "colors" | "..." | "input";

// Add to navigation array
const navigation = [
  // ... existing items
  { id: "input" as Section, label: "Input", icon: "📝" },
];

// Add to the main content switch
{activeSection === "input" && <InputDocs />}
```

## Adding New Design Tokens

### 1. Update globals.css

Add your new tokens to `/styles/globals.css`:

```css
:root {
  /* Add primitive tokens */
  --mds-new-token: #value;
  
  /* Add semantic tokens */
  --semantic-token: var(--mds-new-token);
}
```

### 2. Create Documentation

Create a documentation component showing your new tokens:

```tsx
// /components/docs/NewTokenDocs.tsx
export function NewTokenDocs() {
  const tokens = [
    { token: "--mds-new-token", value: "#value", usage: "Description" }
  ];

  return (
    <div className="max-w-4xl space-y-[var(--spacing-700)]">
      <h1>New Token Category</h1>
      {/* Show examples */}
    </div>
  );
}
```

### 3. Add to Navigation

Add the new section to App.tsx navigation.

## Design Token Guidelines

### Always Use Design Tokens

✅ **Do:**
```tsx
className="p-[var(--spacing-400)] bg-[var(--mds-color-surface-primary_1)]"
```

❌ **Don't:**
```tsx
className="p-4 bg-white"
```

### Typography Rules

✅ **Do:**
```tsx
<h1>Use semantic HTML elements</h1>
<p>Let CSS handle the styling</p>
```

❌ **Don't:**
```tsx
<div className="text-2xl font-bold">Title</div>
```

### Color Usage

- Use semantic color tokens (e.g., `--mds-color-surface-primary_1`) instead of primitive colors
- Ensure sufficient contrast for accessibility
- Test in both light and dark modes (when applicable)

### Spacing

- Use the 8px spacing scale (100-800)
- Maintain consistent spacing within component groups
- Use larger spacing values for layout, smaller for component internals

## Code Style

### Component Structure

```tsx
import * as React from "react";

export interface ComponentProps {
  // Props definition
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className = "", ...props }, ref) => {
    // Component logic
    
    return (
      // JSX
    );
  }
);

Component.displayName = "Component";
export { Component };
```

### File Organization

```
/components
  /ui          # Actual components
  /docs        # Documentation components
  /figma       # Figma-specific utilities (don't modify)
/styles
  globals.css  # Design tokens and base styles
```

## Testing Your Changes

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Checklist Before Committing

- [ ] Component uses design system tokens
- [ ] Documentation page created
- [ ] Added to navigation in App.tsx
- [ ] Tested all variants/sizes
- [ ] Checked accessibility (keyboard navigation, focus states)
- [ ] Code follows existing patterns
- [ ] No console errors or warnings

## Accessibility Guidelines

All components must:

- Be keyboard navigable
- Have visible focus states
- Support screen readers
- Meet WCAG 2.1 AA contrast requirements
- Include appropriate ARIA attributes when needed

## Questions?

- Review existing components for patterns
- Check the design token documentation
- Open an issue for questions or suggestions

## Pull Request Process

1. Create a new branch: `git checkout -b feature/new-component`
2. Make your changes
3. Test thoroughly
4. Commit with clear messages: `git commit -m "Add Input component with variants"`
5. Push: `git push origin feature/new-component`
6. Open a Pull Request with:
   - Description of changes
   - Screenshots/examples
   - Any breaking changes noted

Thank you for contributing! 🎉
