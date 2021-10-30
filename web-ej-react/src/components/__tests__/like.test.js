import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";
import ReactTestUtils from 'react-dom/test-utils';

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like />,
      container
    );
  });
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("Testing Like component", () => {
    it("Cantidad Default de Likes igual a 0", () => {
      const likes = document.getElementsByTagName("p");
      expect(likes[0].textContent).toBe("Likes: 0");
    });
    it("Incrementa la cantidad de Likes a 1", () => {
        const likes = document.getElementsByTagName("p");
        const botonLike = document.getElementById("increment");
        ReactTestUtils.Simulate.click(botonLike);        
        expect(likes[0].textContent).toBe("Likes: 1");
      });
      it("Decrementa la cantidad de Likes a 1", () => {
        const likes = document.getElementsByTagName("p");
        const botonDislike = document.getElementById("decrement");
        ReactTestUtils.Simulate.click(botonDislike);       
        expect(likes[0].textContent).toBe("Likes: -1");
      });
});

