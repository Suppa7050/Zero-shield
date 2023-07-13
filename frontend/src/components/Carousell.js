import React from 'react';
import "./Front.css"

function Carousell() {
  return (
    <div class="parent">


      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://i.ibb.co/kxDxw4Q/1000-F-168769418-GHALsql-Ir8jl-G6i-Ih-Ifu-SPOr2hn-Wk53r.jpg" alt="First slide" height={400} width={50} />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://i.ibb.co/kxDxw4Q/1000-F-168769418-GHALsql-Ir8jl-G6i-Ih-Ifu-SPOr2hn-Wk53r.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://i.ibb.co/kxDxw4Q/1000-F-168769418-GHALsql-Ir8jl-G6i-Ih-Ifu-SPOr2hn-Wk53r.jpg" alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
};
export default Carousell;  
