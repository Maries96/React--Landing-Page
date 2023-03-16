import { Navbar } from "./components/Navbar";
import { Jumbotron } from "./components/Jumbotron";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

export  default function Home () {
return<div className="container">
    <Navbar />
      <div className="row">
        <Jumbotron />
        <div className="col-3">
          <Card />
        </div>
        <div className="col-3">
          <Card />
        </div>
        <div className="col-3">
          <Card />
        </div>
        <div className="col-3">
          <Card />
        </div>
      </div>
      <Footer />
  </div>
};
