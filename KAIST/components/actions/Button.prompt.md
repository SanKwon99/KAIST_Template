Button: every action; one primary per view, secondary for alternatives, ghost for tertiary links.

```jsx
<Button>Continue <ArrowIcon /></Button>
<Button variant="secondary">Preview</Button>
<Button variant="ghost">Learn more</Button>
<Button variant="secondary" iconOnly aria-label="Stack"><LayersIcon /></Button>
```

- Barlow Condensed 600, 14px; square corners; "+" corner marks.
- `disabled` drops to 45% opacity. `block` for full-width.
- Icons: inline Lucide SVG, 14–16px, stroke-width 1.5.
