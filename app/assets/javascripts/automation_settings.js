const confirmDelete = (id) => {
  Swal.fire({
    text: "削除してよろしいですか？",
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    cancelButtonText: 'キャンセル'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteAutomationSetting(id);
    }
  })
}

const deleteAutomationSetting = (id) => {
  $.ajax({
    type: 'DELETE',
    url: `/automation_settings/${id}`,
    headers: {
      'X-CSRF-Token': getCsrfToken()
    },
  }).done(function() {
    const row = $("#automation_setting_row_"+id);
    row.remove();
    insertNoDataRow(row);
    Swal.fire({ icon: 'success', text: "削除しました。" })
  });
}

const insertNoDataRow = (row) => {
  const tbody = row.closest('tbody[id="automation_settings_tbody"]');
  if (tbody.children().length > 0) { return; }

  tbody.append($('#no-data-row'));
  // ページネーションの値を削除
  //document.querySelector("li[class='paginate_button page-item active']").remove();
}
