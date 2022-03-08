import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './LitModal-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<lit-modal></lit-modal>
```

##styling-doc

@customElement lit-modal
*/
export class LitModal extends LitElement {
  static get is() {
    return 'lit-modal';
  }

  // Declare properties
  static get properties() {
    return {
      modalBackground:{
        type: String,
        attribute: 'modal-background'
      },
      hideClickOut: {
         type: Boolean,
         attribute: 'hide-click-out' 
      },
      centered:{
        type:Boolean,
        attribute: 'centered' 
      }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.modalBackground = 'green';
    this.hideClickOut = false;
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('lit-modal-shared-styles')
    ];
  }

  openModal() {
    const modal = this.shadowRoot.querySelector('.modal');
    const modalBackgroundContent = this.shadowRoot.querySelector('.modal_background');
    if (!this.hideClickOut) this.modalClickListener(modalBackgroundContent, modal);
    modal.classList.add('open');
  }

  modalClickListener(modalBackgroundContent,modal) {
    modalBackgroundContent.addEventListener('click', function (e) {
      if (e.target === this) {
        modal.className = 'modal closed';
        modal.classList.remove('closed');
      }
    });
  }

  closeModal() {
    const modal = this.shadowRoot.querySelector('.modal');
    modal.classList.remove('open');
  }

  async firstUpdated() {
    const content = this.shadowRoot.querySelector('slot[name="content"]');
    await this.closeModalSlottedButton(content);
  }

  async closeModalSlottedButton(slot) {
    slot.assignedElements()[0];
/*  await slot.assignedElements()[0].updateComplete; */
    slot.assignedElements().forEach((element) => {
      if (element.querySelector('.close')) {
        element.querySelectorAll('.close').forEach((element) => {
          element.addEventListener('click', this.closeModal.bind(this));
        });
      }
    });
  }

  // Define a template
  render() {
    return html`
     <slot name="buttom" @click="${this.openModal}"></slot>
      <div class="modal open" style="align-items: ${this.centered ? 'center' : 'flex-start'}">
        <div class="modal_background" style="background:${this.modalBackground}"></div>
        <div class="modal-container">
          <i class="material-icons" @click="${this.closeModal}">close</i>
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-body">
            <slot name="content"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}
