import { initialData } from './initialData';
import { refs } from './refsDOM';
import { addTask } from './createTask';

//EVENTS:
window.addEventListener('load', () => createMainTable(initialData));
window.addEventListener('load', createSummaryTable);
refs.tasksListActive.addEventListener('click', e => {
  const evTarget = e.target;
  onActionInTable(evTarget, initialData, createSummaryTable);
});

//create main table
function createMainTable(data) {
  refs.tasksListActive.insertAdjacentHTML = '';
  const elemsColectionActive = data.filter(el => !el.archivated).map(el => addTask(el));
  refs.tasksListActive.append(...elemsColectionActive);
}

//create summary table
function createTableRow(data, categry) {
  const active = data.filter(el => !el.archivated).filter(el => el.category === categry);
  const archived = data.filter(el => el.archivated).filter(el => el.category === categry);

  return [active, archived];
}
function createSummaryTable() {
  const [activeTask, archivedTask] = createTableRow(initialData, 'task');
  refs.taskActive.innerText = activeTask.length;
  refs.taskArchived.innerText = archivedTask.length;

  const [thoughtActive, thoughtArchived] = createTableRow(initialData, 'random thought');
  refs.thoughtActive.innerText = thoughtActive.length;
  refs.thoughtArchived.innerText = thoughtArchived.length;

  const [quotesActive, quotesArchived] = createTableRow(initialData, 'quote');
  refs.quotesActive.innerText = quotesActive.length;
  refs.quotesArchived.innerText = quotesArchived.length;

  const [ideaActive, ideaArchived] = createTableRow(initialData, 'idea');
  refs.ideaActive.innerText = ideaActive.length;
  refs.ideaArchived.innerText = ideaArchived.length;
}

//add task to Archive, Delete or Edit
function onActionInTable(evTarget, dataList, clb) {
  const taskDOMEl = evTarget.closest('tr');
  const dataEl = dataList.find(el => el.id.toString() === taskDOMEl.id);

  if (evTarget.innerText === 'Archive') {
    dataEl.archivated = true;
    taskDOMEl.remove();
    clb();
  }
  if (evTarget.innerText === 'Delete') {
    taskDOMEl.remove();
    dataList.splice(dataList.indexOf(dataEl), dataList.indexOf(dataEl) + 1);
    clb();
  }
}
