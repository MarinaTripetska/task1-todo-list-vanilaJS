export const refs = {
  mainTable: document.getElementById('mainTable'),
  tasksListActive: document.querySelector('.table-body'),

  summaryTable: document.getElementById('summaryTable'),

  taskActive: summaryTable.querySelector('.task__active'),
  taskArchived: summaryTable.querySelector('.task__archived'),

  thoughtActive: summaryTable.querySelector('.thought__active'),
  thoughtArchived: summaryTable.querySelector('.thought__archived'),

  quotesActive: summaryTable.querySelector('.quotes__active'),
  quotesArchived: summaryTable.querySelector('.quotes__archived'),

  ideaActive: summaryTable.querySelector('.idea__active'),
  ideaArchived: summaryTable.querySelector('.idea__archived'),

  createNoteBtn: document.querySelector('.btn__create-note'),
  closeModalBtn: document.querySelector('.window__close-btn'),

  modalOverlay: document.querySelector('.overlay'),
  modalForm: document.querySelector('.window__form'),
  btnSubmit: document.querySelector('.window__submit-btn'),
};
