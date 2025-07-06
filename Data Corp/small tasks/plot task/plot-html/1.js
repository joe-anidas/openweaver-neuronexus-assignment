$(document).ready(function () {
    const table = $("#dynamicTable tbody");

    const updateAddButtonVisibility = () => {
      table.find("tr .add-row").hide();
      table.find("tr:last-child .add-row").show();
    };

    const addRow = () => {
      const newRow = `
<tr>
<td>
<button class="delete-btn">
<i class="mdi mdi-delete"></i>
</button>
</td>
<td>
<button class="add-row">
 <i class="mdi mdi-plus-circle"></i>
</button>
</td>
<td><input type="text" class="table-input"></td>
<td><input type="text" class="table-input"></td>
<td><input type="text" class="table-input"></td>
<td><input type="text" class="table-input"></td>
<td><input type="text" class="table-input"></td>
<td><input type="text" class="table-input"></td>
<td><input type="text" class="table-input plot-value"></td>
<td><input type="text" class="table-input" placeholder="UnSold"></td>
</tr>`;
      table.append(newRow);
      updateAddButtonVisibility();
    };

    const deleteRow = (button) => {
      $(button).closest("tr").remove();
      updateAddButtonVisibility();
    };

    $(document).on("click", ".add-row", function (e) {
e.preventDefault();
addRow();
});
    $(document).on("click", ".delete-btn", function () {
      deleteRow(this);
    });

    $(document).on("keydown", ".plot-value", function (e) {
      if (e.key === "Tab") {
        e.preventDefault();
        const currentRow = $(this).closest("tr");
        const nextRow = currentRow.next();
        if (nextRow.length === 0) {
          addRow();
        }
        currentRow.next().find("td:nth-child(3) .table-input").focus();
      }
    });

    updateAddButtonVisibility();
  });

  function nextPage1() {
    $("#page1").addClass("hidden");
    $("#page2").removeClass("hidden");
    $("#page3").addClass("hidden");
    $("#page4").addClass("hidden");
  }

  function nextPage2() {
    $("#page1").addClass("hidden");
    $("#page2").addClass("hidden");
    $("#page3").removeClass("hidden");
    $("#page4").addClass("hidden");
  }

  function nextPage3() {
    $("#page1").addClass("hidden");
    $("#page2").addClass("hidden");
    $("#page3").addClass("hidden");
    $("#page4").removeClass("hidden");
  }

  function prevPage1() {
    $("#page1").removeClass("hidden");
    $("#page2").addClass("hidden");
    $("#page3").addClass("hidden");
    $("#page4").addClass("hidden");
  }

  function prevPage2() {
    $("#page1").addClass("hidden");
    $("#page2").removeClass("hidden");
    $("#page3").addClass("hidden");
    $("#page4").addClass("hidden");
  }

  function prevPage3() {
    $("#page1").addClass("hidden");
    $("#page2").addClass("hidden");
    $("#page3").removeClass("hidden");
    $("#page4").addClass("hidden");
  }