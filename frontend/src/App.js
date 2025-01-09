// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

// function App() {
//   return <div></div>;
// }

// export default App;

import React from "react";
import Product from "./components/ecomm/Product";
import Cart from "./components/ecomm/Cart";

/*
const App = () => (
  <div>
    <h1>Form mgnt with Redux Toolkit</h1>
    <Form />
  </div>
);

export default App;
*/

const App = () => {
  return (
    <div className="App">
      <h1>My E-commerce Store</h1>
      <Product id="p1" name="Product 1" price={29.99} />
      <Product id="p2" name="Product 2" price={49.99} />
      <Cart />
    </div>
  );
};

export default App;
