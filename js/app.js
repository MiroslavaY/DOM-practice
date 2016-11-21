/**
 * 3.Дан двумерный массив значений. Заменить все теги с установленным значением атрибута

 data-table=”true” на таблицу, собранную из заданного двумерного массива
 */
(function () {

    var tableMatrix = [
        ["cellHead1", "cellHead2", "cellHead3", "cellHead4"],
        ["rowData1", "rowData1", "rowData1", "rowData1"],
        ["rowData2", "rowData2", "rowData2", "rowData2"],
        ["rowData3", "rowData3", "rowData3", "rowData4"]
    ];
    var tableTags = document.querySelectorAll('[data-table="true"]');

    tableTags.forEach(
        function (el) {

            var table = document.createElement('table');

            for (var i = 0, len = tableMatrix.length; i < len; i++) {

                var tr = document.createElement('tr');

                for (var j = 0, lenJ = tableMatrix[i].length; j < lenJ; j++) {

                    var th = document.createElement('th'),
                        td = document.createElement('td');

                    if (i === 0) {
                        th.innerHTML = tableMatrix[i][j];
                        tr.appendChild(th);
                    }
                    else {
                        td.innerHTML = tableMatrix[i][j];
                        tr.appendChild(td);
                    }
                }
                table.appendChild(tr);

            }
            el.appendChild(table);

        }
    );
})();
