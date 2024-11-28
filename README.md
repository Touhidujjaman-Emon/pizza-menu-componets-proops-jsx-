# Components , Props and JSX

## Components

![Components](<about components.png>)

### _2 important components as function rules in react_

- The first letter of a component name should be capitalized
- Function needs to retirn some markup(JSX) or null.

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

![components tree](<components tree.png>)

## JSX (JavaScript XML)

![JavaScript XML](JSX.png)

### JSX vs HTML

![jsx-vs-html](jsx-vs-html.png)

### JSX is declarative

- "declarative" refers to a programming paradigm where you describe what you want to see in your UI, rather than how to achieve it.

![declarative](JSX-declarative.png)

### Basic styling in React

- If we want to write inline css we have to use **{{}}** double curly brackets , 1st brackets for javaScript writing second for object. Becasue class is reserved word in js , So we use **className** to add classe's in react.

```js
function Header() {
  return (
    <h1 style={{ color: "red", fontSize: "48px", fontStyle: "uppercase" }}>
      Fast React Pizza CO.
    </h1>
  );

  // Adding classes
  // This type of styling is global scoped so it is not recomended for big apps

  function App() {
    return (
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
}
```

## Props in React

- Short for "properties"
- Way to pass data from parent to child component
- Immutable (can't be changed by child component)
- Passed like function arguments
- Can be any data type (strings, numbers, booleans, arrays, objects, functions eveb other components)

```js
// Parent component
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={18}
      />

      <Pizza
        name="Pizza Funghi "
        ingredients="tomato, mozarella"
        photoName="pizzas/funghi.jpg"
        price={18 + 3}
      />
    </main>
  );
}

// Child component
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt="pizza spinaci" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}
```

### props are immutable but why ?

![read-only-props](immutable-props.png)

### Rendering a list

```js
<ul className="pizzas">
  {pizzaData.map((pizza) => (
    <Pizza pizzaObj={pizza} key={pizza.name} />
  ))}
</ul>
```
