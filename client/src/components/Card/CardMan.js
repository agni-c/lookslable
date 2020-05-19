import React from "react";
import "./styles.css";
const CardMan = (props) => {
  return (
    <>
      {/* <div class="cards-list">
        <div class={props.className}>
          <div class="card_image"> </div>
          <div class="card_title title-black">
            <p>{props.name}</p>
          </div>
        </div>
      </div> */}
      <div class="row">
        <div class="column">
          <div class="card">
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>Card 2</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>Card 3</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <h3>Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMan;
