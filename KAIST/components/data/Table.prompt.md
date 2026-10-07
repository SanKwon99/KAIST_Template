Table: tabular data with themed header and row rules; status cells reuse Tag.

```jsx
<Table
  columns={[{ key: 'page', label: 'Page' }, { key: 'status', label: 'Status' }, { key: 'updated', label: 'Updated', muted: true }]}
  rows={[{ page: 'Overview', status: <Tag variant="accent">Live</Tag>, updated: 'Today' }]}
/>
```

- `align: 'right'` on numeric columns.
