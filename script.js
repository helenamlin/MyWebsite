console.log('Fetching CSV data...');
        fetch('./Publications.csv')
            .then(response => response.text())
            .then(text => {
                console.log('Rendering table...');
                document.getElementById('root').innerHTML = tbl(text);
                console.log('Table rendered successfully.');
            })
            .catch(error => console.error('Error fetching or parsing CSV file:', error));
            
            function tbl(csv) {
                const rows = csv.split('\n');
                const headerColumns = rows[0].split(',');
            
                const tableRows = rows.slice(1).map(row => {
                    const columns = row.split(',');
                    return '<tr><td>' + columns[0] + '</td><td>' + columns[1] + '</td><td>' + '<a href="' + columns[2] + '">' + 'Link' + '</a>' + '</td></tr>';
                });
            
                return '<table><tr><th>' + headerColumns[0] + '</th><th>' + headerColumns[1] + '</th><th>' + 'Link' + '</th></tr>' + tableRows.join('\n') + '</table>';
            }
            