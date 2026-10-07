Dialog: confirm a consequential action or collect a short input without leaving the page.

```jsx
<Dialog title="Publish this page?" onClose={close}
  actions={<><Button variant="secondary" onClick={close}>Cancel</Button><Button>Publish</Button></>}>
  It goes live at its current URL.
</Dialog>
```
