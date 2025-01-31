document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.querySelector("#remove");
    const addButton = document.querySelector("#add");
    const topicInput = document.querySelector("#textbox");
    const checkbuttons = document.querySelector(".checkbuttons ol");
    const reviewPanel = document.getElementById("review-panel");

    resetButton.addEventListener("click", function () {
        document.querySelectorAll(".checkbuttons input[type='checkbox']").forEach(checkbox => {
            if (checkbox.checked) {
                checkbox.parentNode.parentNode.remove();
            }
        });
        if (reviewPanel) {
            reviewPanel.innerHTML = ""; 
        }
    });

    addButton.addEventListener("click", function () {
        const topic = topicInput.value.trim();
        if (topic !== "") {
            const li = document.createElement("li");
            const label = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("topic-checkbox");
            checkbox.dataset.topic = topic;
            
            label.appendChild(checkbox);
            label.append(" " + topic);
            li.appendChild(label);
            checkbuttons.appendChild(li);
            topicInput.value = "";
        }
    });

    document.addEventListener("change", function (event) {
        if (event.target.matches(".topic-checkbox")) {
            updateReviewPanel();
        }
    });

});