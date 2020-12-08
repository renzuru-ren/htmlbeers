
 var url = "https://api.punkapi.com/v2/beers"
loadData();

  function loadData() {
    $.ajax({
      type: 'GET',
      url: url,
      contentType: "text/plain",
      dataType: 'json',
      success: function (data) {
        myJsonData = data;
        populateDataTable(myJsonData);
      },
      error: function (e) {
        console.log("There was an error with your request...");
        console.log("error: " + JSON.stringify(e));
      }
    });
  }

  // populate the data table with JSON data
  function populateDataTable(data) {
    console.log("populating data table...");
    // clear the table before populating it with more data
    $("#coderbyte").DataTable()

    console.log(data)
    var length = Object.keys(data).length;
    for(var i = 1; i < length+1; i++) {
      var beer = data[i];

      // You could also use an ajax property on the data table initialization
      $('#coderbyte').dataTable().fnAddData( [
        beer.id,
        beer.name,
        beer.tagline,
        beer.description


        
      ]);
    }
  }

   
    // Handle click on "Expand All" button
    $('#btn-show-all-children').on('click', function(){
        // Expand row details
        table.rows(':not(.parent)').nodes().to$().find('td:first-child').trigger('click');
    });

    // Handle click on "Collapse All" button
    $('#btn-hide-all-children').on('click', function(){
        // Collapse row details
        table.rows('.parent').nodes().to$().find('td:first-child').trigger('click');
    });