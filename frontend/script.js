const container = document.getElementById("tasks-container");



document.addEventListener("DOMContentLoaded", function() {
fetch('db.json')
  .then(function(response) {
      return response.json(); // Распаковываем JSON
  })
  .then(function(data) {
      
      let htmlString = ""; // Создаем пустую строку

      data.todos.forEach(function(task) {
          
          // ВОТ ЗДЕСЬ ИСПРАВЛЕНИЕ!
          // Пишем htmlString += и открываем косую кавычку `
          htmlString += `
            <div class="taskblock"  data-id="${task.id}">
              <label>
                <input type="checkbox">
                <span class="sspan"> </span>
              </label>

              <div>
                <button class="taskname">${task.TaskTopic}</button>    
                <span class="taskProjectTag">${task.Project}</span>
                <span class="taskProjectTag">${task.Timer}</span>
              </div>  

              <button class="deleteTaskFromList"> 
                <svg fill="#000000" viewBox="-2.64 -2.64 29.28 29.28" xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" stroke="#000000" stroke-width="0.00024000000000000003">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.43200000000000005"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path>
                  </g>
                </svg>
              </button>
            </div>
          `; // Закрываем косую кавычку ` и ставим точку с запятой ;
          
      }); // Конец цикла forEach

      // Вставляем всё, что склеилось, на страницу
      container.innerHTML = htmlString;
  })
  .catch(function(error) {
      console.error("Произошла ошибка при загрузке базы данных:", error);
      container.innerHTML = "<p>Не удалось загрузить задачи. Проверь консоль.</p>";
  })

})


document.querySelector('#tasks-container').addEventListener('click', function(event) {
    let deleteBtn = event.target.closest('.deleteTaskFromList');

    if (deleteBtn) {
       event.preventDefault();  
    let taskElement = deleteBtn.closest('.taskblock');  // от кнопки поднялись до taskblock
    let taskId = taskElement.dataset.id;  // взяли data-id с taskblock
     
    //  fetch(`http://localhost:3000/todos/${taskId}`, {
     //         method: 'DELETE'
      //    })
       //   .then(response => {
       //       if (response.ok) {
                // Если сервер ответил "Всё ок, удалил" -> убираем блок с экрана
                taskElement.remove(); 
                console.log(`Задача ${taskId} успешно удалена`);
            } else {
                alert("Ошибка при удалении на сервере!");
            }
        });
;

