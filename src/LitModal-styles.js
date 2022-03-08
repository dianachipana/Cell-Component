/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  --modal-container-background: white;
}

.modal {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}
.modal .modal-container {
  background-color: var(--modal-container-background);
  width: 50%;
  position: relative;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  overflow: hidden;
  transition: margin-top 0.5s;
}
.modal .modal_background {
  opacity: 0.6;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.open {
  visibility: visible;
  opacity: 1;
}

.closed {
  display: none;
  background-color: transparent;
}

.open > .modal-container {
  margin: 0px;
}

.modal-header {
  justify-content: center;
  display: flex;
}

.modal-container i {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}

.modal-body {
  padding: 20px;
}

@media (min-width: 800px) {
  .modal-container {
    width: 50%;
  }
}
`;