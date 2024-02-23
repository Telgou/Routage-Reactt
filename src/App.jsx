import React, { Suspense, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
import MyNavbar from "./components/NavigationBar";
const Header = React.lazy(() => import('./components/Header'))
const Products = React.lazy(() => import('./components/Products'))
const Events = React.lazy(() => import('./components/Events'))
const EventDetails = React.lazy(() => import('./components/Eventdetails'))

function App() {

  return (
    <>

      {/* <Events /> */}
      <Suspense fallback={<h1>Loading</h1>}>
        <MyNavbar />

        <Routes>

          <Route path="/events" >
            <Route index element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
          </Route>


          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
