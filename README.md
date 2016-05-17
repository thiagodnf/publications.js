# publications.js

An interactive publications list developed with Bibtex, JavaScript and HTML. You can use the following bibtex entries: article, book, booklet, conference, inbook, incollection, inproceedings, manual, mastersthesis, misc, phdthesis, proceedings, techreport, unpublished.

## Screenshot

The following image shows the publications.js in action.

![alt tag](https://raw.githubusercontent.com/thiagodnf/publications.js/master/screenshot.png)

## Example

An example can be found in [this page](http://thiagodnf.github.io/publications.js/).

## Usage

First, load the required javascript file:

```html
<script type="text/javascript" charset="utf8" src="dist/publications.min.js"></script>
```

Include the CSS file in the <head> section of your web page as shown below.:

```html
<link type="text/css" rel="stylesheet" href="dist/publications.css"/>
```

Add three divs in your webpage and give them an id. For example:

```html
<div id="source"></div>
<div id="chart"></div>
<div id="table"></div>
```

Include the bibtex entries into an div. In this case, we added the entry in the 'source' id. For example:

```html
<div id="source">
    @inproceedings{Souza2011Ant,
        pages = {142-157},
        volume = {9656},
        address = {Szeged, Csongrád, Hungary},
        booktitle = {Proceedings of the 3rd International Symposium on Search Based Software Engineering (SSBSE'11)},
        year = {2011},
        title = {An Ant Colony Optimization Approach to the Software Release Planning with Dependent Requirements},
        author = {Jerffeson Teixeira De Souza and Camila Loiola Brito Maia and Thiago do Nascimento Ferreira and Rafael Augusto Ferreira do Carmo and Márcia Maria Albuquerque Brasil},
    }
</div>
```

Finally, the publications.js needs to know the input data, chart, and table elements. So, one line of JavaScript:

```html
<script type="text/javascript" charset="utf8">
    // Create the object
    var publications = new Publications("#source", "#table", "#chart");
    // Display the results on the screen
    publications.draw();
</script>
```

## Configuration Options

The publications.js accepts an optional fourth parameter for configuration options. These options include:

|Name             |Type    |Default Value         | Description                                       |
|-----------------|--------|----------------------|---------------------------------------------------|
|visualization    |boolean |true                  |A boolean to control addition of the visualization |
|defaultYear      |string  |"To Appear"           |Entries without a year will use this as year       |
|chartTitle       |string  |"List of Publications"|Change the chart title                             |
|enabledLegend    |boolean |true                  |Enable or not the chart's legend                   |
|enabledDataLabels|boolean |true                  |Enable or not the chart's datalabels               |
|yAxisTitle       |string  |"Number of Papers"    |Change the y-axis title                            |

The following is an example of the use of the configuration options:

```html
<script type="text/javascript" charset="utf8">
    // The custom configuration options
    var options = {
        visualization: false,
        enabledLegend: false,
        yAxisTitle: "Papers"
    }

    // Create the object with the custom options
    var publications = new Publications("#source", "#table", "#chart", options);
    // Display the results on the screen
    publications.draw();
</script>
```

## Events

The publications.js library contains some events. The events are: 

|Event                   |Description                                          |
|------------------------|-----------------------------------------------------|
|"table.before.addRows"  |This event fires before add the entries in the table |
|"table.process.entry"   |This event fires when an entry is processed          |
|"table.after.addRows"   |This event fires after add the entries in the table  |

For example:

``` Javascript
 // Create the object with the custom options
 var publications = new Publications("#source", "#table", "#chart", options);
 
 publications.on("table.process.entry", function(entry){
    //Print the entry in the console.    
    console.log(entry);
 });
 
 // Display the results on the screen
 publications.draw();
```

## Building and Running Locally

You can download the source code through git:

```
git clone git@github.com:thiagodnf/publications.js.git
```

Install the dependencies:

```
npm install
```

Running the server:

```
npm start
```

Open the browser at:

    http://localhost:8080/

## Credits

This project is based on the project developed by [Ville Karavirta](https://github.com/vkaravir/bib-publication-list) and some improvements were performed. Moreover, this project uses some great libraries:

* [jQuery](https://jquery.com/)
* [DataTables](https://datatables.net/)  
* [JavaScript BibTeX Parser](https://osdn.jp/projects/sfnet_jsbibtex/)  
* [Remodal](http://vodkabears.github.io/remodal/)  
* [Highcharts](http://www.highcharts.com/)  

## License

Released under the terms of MIT License.

## Contact

If you encounter any problems, please use the [GitHub Issue Tracker](https://github.com/thiagodnf/publications.js/issues) .

If you like publications.js, let me know.
