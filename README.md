# Components , Props and JSX

## Components

![Components](<about components.png>)

### Components tree

- A hierarchical structure of React components
- Each node represents a component, edges represent parent-child relationships
- Used by React to manage rendering and updating of components
- Example:

```jsx
<AppComponent>
  <Header />
  <MainContent>
    <Sidebar />
    <Article />
  </MainContent>
  <Footer />
</AppComponent>
```

Becomes:

```
AppComponent
  ├── Header
  ├── MainContent
  │   ├── Sidebar
  │   └── Article
  └── Footer
```

![Components tree](components.png)
