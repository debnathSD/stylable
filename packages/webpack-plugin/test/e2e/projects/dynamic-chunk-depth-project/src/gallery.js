import style from "./gallery.st.css";
import {render as Button} from "./button";
const render = () => {
  const gl = document.createElement("div");
  const btn1 = Button('left');
  const btn2 = Button('right');
  gl.appendChild(btn1);
  gl.appendChild(btn2);
  gl.classList.add(style.root);
  btn1.classList.add(style.btn1);
  btn2.classList.add(style.btn2);
  return gl;
};
export { style, render };
