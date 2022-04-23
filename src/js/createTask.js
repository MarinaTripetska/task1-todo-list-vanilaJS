//create one node el:
export function addTask({ id, name, created, category, content, dates }) {
  const newTaskItem = document.createElement('tr');
  newTaskItem.setAttribute('class', 'task_item');
  newTaskItem.setAttribute('id', id);

  const newTaskName = document.createElement('td');
  newTaskName.setAttribute('class', 'task_name');
  newTaskName.innerText = name;

  const newTaskCreated = document.createElement('td');
  newTaskCreated.setAttribute('class', 'task_created');
  newTaskCreated.innerText = created;

  const newTaskCategory = document.createElement('td');
  newTaskCategory.setAttribute('class', 'task_category');
  newTaskCategory.innerText = category;

  const newTaskContent = document.createElement('td');
  newTaskContent.setAttribute('class', 'task_content');
  newTaskContent.innerText = content;

  const newTaskDates = document.createElement('td');
  newTaskDates.setAttribute('class', 'task_dates');
  newTaskDates.innerText = dates;

  //create and addbuttons
  const btnsArea = document.createElement('td');

  const btnEdit = document.createElement('button');
  //    btnRemovve.setAttribute('class', '');
  btnEdit.innerText = 'Edit';

  const btnArchive = document.createElement('button');
  // newTaskDates.setAttribute('class', '');
  btnArchive.innerText = 'Archive';

  const btnRemove = document.createElement('button');
  //    btnRemovve.setAttribute('class', '');
  btnRemove.innerText = 'Delete';

  btnsArea.append(btnEdit, btnArchive, btnRemove);

  newTaskItem.append(
    newTaskName,
    newTaskCreated,
    newTaskCategory,
    newTaskContent,
    newTaskDates,
    btnsArea,
  );
  return newTaskItem;
}
