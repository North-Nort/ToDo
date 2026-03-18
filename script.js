const container = document.getElementById("tasks-container");

fetch('db.json')
.then(function(response) {
      return response.json(); // Распаковываем JSON
  })

  
.then(function(data) {
      let htmlString = "";
       data.todos.forEach(function(task) {
          
          // Вставляем твой ШАБЛОН вЕРСТКИ в косые кавычки ` `
          // Подставляем переменные через ${ }
          // Знак += приклеивает каждую новую задачу к предыдущим
          
          htmlString += `
            <div class="task-row">
              <h3>${task.TaskName}</h3>
              <p>Проект: ${task.Project} | Тема: ${task.TaskTopic}</p>
              <p>Дедлайн: ${task.Timer}</p>
              <hr>
            </div>
          `;
      });
         container.innerHTML = htmlString;

  })

   .catch(function(error) {
      console.error("Произошла ошибка при загрузке базы данных:", error);
      container.innerHTML = "<p>Не удалось загрузить задачи. Проверь консоль.</p>";
  });