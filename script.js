// LocalStorage сактагычтын ачкычы.
const STORAGE_KEY = "kyrgyz-todo-list-v1";
const PRIORITY_LABELS = {
  high: "🔴 Жогорку",
  medium: "🟡 Орто",
  low: "🟢 Төмөнкү",
};

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const taskList = document.getElementById("taskList");
const greeting = document.getElementById("greeting");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const taskCount = document.getElementById("taskCount");

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let editingTaskId = null;

// Убакытка жараша саламды өзгөртүү.
function updateGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "Кутмандуу таңыңыз менен!";
  } else if (hour < 18) {
    greeting.textContent = "Кутмандуу күнүңүз менен!";
  } else {
    greeting.textContent = "Кутмандуу кечиңиз менен!";
  }
}

// Иш тапшырмаларын LocalStorageге сактоо.
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// HTML-ге жазылган текстти қауіпсіз formata келтирүү.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getPriorityMeta(priority) {
  return {
    label: PRIORITY_LABELS[priority] || PRIORITY_LABELS.medium,
    className: `priority-${priority}`,
  };
}

// Прогресс-барды жана санды жаңыртуу.
function updateProgress() {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `${percentage}%`;
  taskCount.textContent = `${totalTasks} ${totalTasks === 1 ? "тапшырма" : "тапшырма"}`;
}

// Тапшырмаларды экранга чыгаруу.
function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const emptyState = document.createElement("li");
    emptyState.className = "empty-state";
    emptyState.innerHTML = "Азыр эч кандай план жок. Жаңы тапшырма кошуңуз!";
    taskList.appendChild(emptyState);
    updateProgress();
    return;
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");
    const isEditing = editingTaskId === task.id;
    const priorityMeta = getPriorityMeta(task.priority);

    li.className = `task-item ${task.completed ? "completed" : ""} ${isEditing ? "is-editing" : ""}`;
    li.dataset.id = task.id;

    if (isEditing) {
      li.innerHTML = `
        <div class="task-main task-edit-main">
          <input class="task-edit-input" type="text" maxlength="80" value="${escapeHtml(task.text)}" />
        </div>
        <div class="task-meta task-edit-meta">
          <select class="task-edit-select" aria-label="Маанилүүлүгү">
            <option value="high" ${task.priority === "high" ? "selected" : ""}>🔴 Жогорку</option>
            <option value="medium" ${task.priority === "medium" ? "selected" : ""}>🟡 Орто</option>
            <option value="low" ${task.priority === "low" ? "selected" : ""}>🟢 Төмөнкү</option>
          </select>
          <button class="save-btn" type="button" aria-label="Сактоо">💾 Сактоо</button>
          <button class="delete-btn" type="button" aria-label="Өчүрүү">✕</button>
        </div>
      `;
    } else {
      li.innerHTML = `
        <label class="task-main">
          <input class="task-checkbox" type="checkbox" ${task.completed ? "checked" : ""} />
          <span class="task-text">${escapeHtml(task.text)}</span>
        </label>
        <div class="task-meta">
          <span class="priority-badge ${priorityMeta.className}">${priorityMeta.label}</span>
          <button class="edit-btn" type="button" aria-label="Оңдоо">✏️ Оңдоо</button>
          <button class="delete-btn" type="button" aria-label="Өчүрүү">✕</button>
        </div>
      `;
    }

    li.classList.add("is-adding");
    setTimeout(() => li.classList.remove("is-adding"), 250);
    taskList.appendChild(li);

    if (isEditing) {
      const input = li.querySelector(".task-edit-input");
      input?.focus();
      input?.setSelectionRange(input.value.length, input.value.length);
    }
  });

  updateProgress();
}

// Жаңы тапшырма кошуу.
function addTask(text, priority) {
  const newTask = {
    id: Date.now().toString(),
    text,
    completed: false,
    priority,
    priorityLabel: PRIORITY_LABELS[priority] || PRIORITY_LABELS.medium,
  };

  tasks.unshift(newTask);
  saveTasks();
  renderTasks();
}

// Тапшырманы бүтүрүү/ачуу.
function toggleTask(id, completed) {
  tasks = tasks.map((task) => (task.id === id ? { ...task, completed } : task));
  saveTasks();
  renderTasks();
}

// Тапшырманы өчүрүү менен сүрөттөмө анимация.
function deleteTask(id) {
  const item = taskList.querySelector(`[data-id="${id}"]`);

  if (item) {
    item.classList.add("is-removing");
    setTimeout(() => {
      tasks = tasks.filter((task) => task.id !== id);
      saveTasks();
      renderTasks();
    }, 220);
    return;
  }

  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

// Тапшырманы оңдоо режимине өткөрүү.
function startEditing(id) {
  editingTaskId = id;
  renderTasks();
}

// Өңдөлгөн тапшырманы сактоо.
function saveEditedTask(id) {
  const item = taskList.querySelector(`[data-id="${id}"]`);
  const input = item?.querySelector(".task-edit-input");
  const select = item?.querySelector(".task-edit-select");
  const updatedText = input?.value.trim();
  const updatedPriority = select?.value || "medium";

  if (!updatedText) {
    return;
  }

  tasks = tasks.map((task) =>
    task.id === id
      ? {
          ...task,
          text: updatedText,
          priority: updatedPriority,
          priorityLabel: PRIORITY_LABELS[updatedPriority] || PRIORITY_LABELS.medium,
        }
      : task
  );

  editingTaskId = null;
  saveTasks();
  renderTasks();
}

// Форма submit өңдөө.
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (!text) {
    return;
  }

  addTask(text, priority);
  taskForm.reset();
  prioritySelect.value = "medium";
  taskInput.focus();
});

// Списоктеги басылган элементтерді өңдөө.
taskList.addEventListener("click", (event) => {
  const editButton = event.target.closest(".edit-btn");
  if (editButton) {
    const item = editButton.closest(".task-item");
    if (item) {
      startEditing(item.dataset.id);
    }
    return;
  }

  const saveButton = event.target.closest(".save-btn");
  if (saveButton) {
    const item = saveButton.closest(".task-item");
    if (item) {
      saveEditedTask(item.dataset.id);
    }
    return;
  }

  const deleteButton = event.target.closest(".delete-btn");
  if (deleteButton) {
    const item = deleteButton.closest(".task-item");
    if (item) {
      deleteTask(item.dataset.id);
    }
  }
});

taskList.addEventListener("keydown", (event) => {
  if (event.target.matches(".task-edit-input") && event.key === "Enter") {
    event.preventDefault();
    const item = event.target.closest(".task-item");
    if (item) {
      saveEditedTask(item.dataset.id);
    }
  }

  if (event.target.matches(".task-edit-input") && event.key === "Escape") {
    editingTaskId = null;
    renderTasks();
  }
});

taskList.addEventListener("change", (event) => {
  const checkbox = event.target.closest(".task-checkbox");
  if (checkbox) {
    const item = checkbox.closest(".task-item");
    if (item) {
      toggleTask(item.dataset.id, checkbox.checked);
    }
  }
});

// Бастапкы инициализация.
updateGreeting();
renderTasks();
