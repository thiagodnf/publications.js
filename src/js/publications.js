/**
 * Copyright (c) 2016-2016 Thiago do Nascimento Ferreira
 * Licensed under the MIT license
 * http://github.com/thiagodnf/publications.js
 */

  function Publications (bibtexSource, bibtexTable, bibtextChart, options) {

    /** Events from object */
    this.events = {};

    /** */
    this.table = {};

    /** All entries parsed from bibtext file */
    this.entries = [];

    this.bibtexSource = "";

    this.bibtexTable = "";

    this.bibtexChart = "";

    this.warnings = [];

    this.defaultOptions = {
        visualization: true,
        defaultYear: "To Appear",
        chartTitle: "List of Publications",
        enabledLegend: true,
        enabledDataLabels: true,
        yAxisTitle: 'Number of Papers',
        defaultPagination: 10,
        transparentBackground: false,
        backgroundColor: 'white',
        dontShowBibtexEntryTypes: []
    };

    this.options = {};

     /** Contructor */
     this.initialize = function(bibtexSource, bibtexTable, bibtexChart, options){
         this.bibtexSource = bibtexSource;
         this.bibtexTable = bibtexTable;
         this.bibtexChart = bibtexChart;

         // Merge the options
         this.options = $.extend({}, this.defaultOptions, options || {});

         // Hide the bibtex source
         $(bibtexSource).hide();

         // Create the table and put it in the bibtext table
         $(bibtexTable).html(" \
             <table id='p-table' class='display' cellspacing='0' width='100%'> \
                 <thead> \
                     <tr> \
                         <th width='40px'>Year</th> \
                         <th width='80px'>Type</th> \
                         <th>Reference</th> \
                     </tr> \
                 </thead> \
                 <tbody> \
                 </tbody> \
             </table> \
         ");

         // Parse from bibtext file to javascript object
         this.entries = this.parse($(bibtexSource).html());

        $(document).on('click', ".pub-bib-link", function(event){
          event.preventDefault();

          $(".bibtex-entries").hide();

          var key = $(this).attr("data-bibtex-open");

          $("#"+key).toggle()

          return false;
        });

         // Create datatable component
         this.table = $("#p-table").DataTable({
             "order": [[ 0, "desc" ]],   // Sort by year. Newer first.
             "lengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
             "iDisplayLength": this.options.defaultPagination
         });
     };

     /** Convert the entry type to readable text */
     this.getType = function(entryType){
         // types used for the different types of entries
         var types = {
             'article': 'Journal',
             'book': 'Book',
             'booklet': 'Booklet',
             'conference': 'Conference',
             'inbook': 'Book Chapter',
             'incollection': 'In Collection',
             'inproceedings': 'Conference',
             'manual': 'Manual',
             'mastersthesis': "Master's Thesis",
             'misc': 'Misc',
             'phdthesis': 'PhD Thesis',
             'proceedings': 'Conference Proceeding',
             'techreport': 'Technical Report',
             'unpublished': 'Unpublished'
         };

         return types[entryType];
     }

     /** Parse from bibtex file to javascript array */
     this.parse = function(content){
         // Creating the bibtex object for parse the bibtext file
         var bibtex = new BibTex();
         // Getting the div's content for parse it
         bibtex.content = content;
         // Parse the bibtext file
         bibtex.parse();

         this.warnings = bibtex.warnings;

         // Array with all entries
         var entries = [];
         // Save all converted entries
         for (var index = 0; index < bibtex.data.length; index++) {
           if(this.options.dontShowBibtexEntryTypes.indexOf(bibtex.data[index].entryType) == -1){
             entries.push(bibtex.data[index]);
           }
         }

         // Call TRIM function in the all fields
         $.each(entries, function(key, entry){
             for(c in entry){
                 if(!Array.isArray(entry[c])){
                     entry[c] = entry[c].trim();
                 }
             }
         });

         return entries;
     };

     /** Draw all components */
     this.draw = function(){
         this.updateTable();
         this.updateChart();
     };

     /** Update table component */
     this.updateTable = function(){
         var that = this;

         if(trigger = this.events['table.before.addRows']) trigger();

         // Remove all rows before add new rows
         this.table.clear();

         // Add all entries
         $.each(this.entries, function(key, entry){
            // Append new row
            that.table.row.add( [
                that._get("YEAR", entry.year),          // YEAR COLUMN
                that.getType(entry.entryType),          // TYPE COLUMN
                that.convertEntryToReference(entry),    // PUBLICATION COLUMN
            ]);

            if(trigger = that.events['table.process.entry']) trigger(entry);
         });

         if(trigger = this.events['table.after.addRows']) trigger();

         // Repaint the table
         this.table.draw( false );
     }

     this.updateChart = function(){

         if(! this.options.visualization){
             return;
         }

         var years = this.getYears(this.entries);

        var stats = {};

        $.each(this.entries, function(key, entry) {
            if(!stats[entry.entryType]){
                stats[entry.entryType] = {};
            }

            if(!stats[entry.entryType][entry.year]){
                stats[entry.entryType][entry.year] = 1;
            }else{
                stats[entry.entryType][entry.year]++;
            }
        });

         var series = [];

         for (s in stats){
             var data = [];

             $.each(years, function(key, year){
                 data.push(stats[s][year] || 0)
             });

             // Add only the series that have at least a value
             var sum = data.reduce(function(a, b){return a+b;});

             if(sum > 0){
                 series.push({name:this.getType(s), data:data});
             }
         }

         $(this.bibtexChart).highcharts({
             chart: {
                 type: 'column',
                 backgroundColor: this.options.transparentBackground? null : this.options.backgroundColor
             },
             title: {
                 text: this.options.chartTitle
             },
             xAxis: {
                 categories: years
             },
             yAxis: {
                 min: 0,
                 title: {
                     text: this.options.yAxisTitle
                 },
                 stackLabels: {
                     enabled: true,
                     style: {
                         fontWeight: 'bold',
                         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                     }
                 }
             },
             legend: {
                 enabled: this.options.enabledLegend,
                 align: 'right',
                 x: -30,
                 verticalAlign: 'top',
                 y: 25,
                 floating: true,
                 backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                 borderColor: '#CCC',
                 borderWidth: 1,
                 shadow: false
             },
             tooltip: {
                 headerFormat: '<b>{point.x}</b><br/>',
                 pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
             },
             plotOptions: {
                 column: {
                     stacking: 'normal',
                     dataLabels: {
                         enabled: this.options.enabledDataLabels,
                         color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                         style: {
                             textShadow: '0 0 3px black'
                         },
                         formatter: function() {
                             if (this.y !== 0) {
                                 return this.y;
                             } else {
                                 return null;
                             }
                        }
                     }
                 }
             },
             series: series
         });
     }

     /** Return only the years of the entries */
     this.getYears = function(entries){
         var that = this;

        var years = [];

        $.each(entries, function(key, entry){
            if(years.indexOf(entry.year) == -1){
                // Do not add the 'To Appear' from chart
                if(entry.year && entry.year !== ""){
                    years.push(entry.year);
                }
            }
        });

        // Sort the Array
        years.sort(function(a, b){return a-b});

        return years;
     };

     /** Append events to components */
     this.on = function(event, trigger){
         this.events[event] = trigger;
     };

     /** Convert the string to html format */
     this.htmlify = function(str){

         if(!str) return str;

         str = str.replace(/"/g,'&quot;'); // 34 22
         str = str.replace(/&/g,'&amp;'); // 38 26
         str = str.replace(/\'/g,'&#39;'); // 39 27
         str = str.replace(/</g,'&lt;'); // 60 3C
         str = str.replace(/>/g,'&gt;'); // 62 3E
         str = str.replace(/\^/g,'&circ;'); // 94 5E
         str = str.replace(/‘/g,'&lsquo;'); // 145 91
         str = str.replace(/’/g,'&rsquo;'); // 146 92
         str = str.replace(/“/g,'&ldquo;'); // 147 93
         str = str.replace(/”/g,'&rdquo;'); // 148 94
         str = str.replace(/•/g,'&bull;'); // 149 95
         str = str.replace(/–/g,'&ndash;'); // 150 96
         str = str.replace(/—/g,'&mdash;'); // 151 97
         str = str.replace(/˜/g,'&tilde;'); // 152 98
         str = str.replace(/™/g,'&trade;'); // 153 99
         str = str.replace(/š/g,'&scaron;'); // 154 9A
         str = str.replace(/›/g,'&rsaquo;'); // 155 9B
         str = str.replace(/œ/g,'&oelig;'); // 156 9C
         str = str.replace(/ž/g,'&#382;'); // 158 9E
         str = str.replace(/Ÿ/g,'&Yuml;'); // 159 9F
         str = str.replace(/¡/g,'&iexcl;'); // 161 A1
         str = str.replace(/¢/g,'&cent;'); // 162 A2
         str = str.replace(/£/g,'&pound;'); // 163 A3
         str = str.replace(/¤/g,'&curren;'); // 164 A4
         str = str.replace(/¥/g,'&yen;'); // 165 A5
         str = str.replace(/¦/g,'&brvbar;'); // 166 A6
         str = str.replace(/§/g,'&sect;'); // 167 A7
         str = str.replace(/¨/g,'&uml;'); // 168 A8
         str = str.replace(/©/g,'&copy;'); // 169 A9
         str = str.replace(/ª/g,'&ordf;'); // 170 AA
         str = str.replace(/«/g,'&laquo;'); // 171 AB
         str = str.replace(/¬/g,'&not;'); // 172 AC
         str = str.replace(/­/g,'&shy;'); // 173 AD
         str = str.replace(/®/g,'&reg;'); // 174 AE
         str = str.replace(/¯/g,'&macr;'); // 175 AF
         str = str.replace(/°/g,'&deg;'); // 176 B0
         str = str.replace(/±/g,'&plusmn;'); // 177 B1
         str = str.replace(/²/g,'&sup2;'); // 178 B2
         str = str.replace(/³/g,'&sup3;'); // 179 B3
         str = str.replace(/´/g,'&acute;'); // 180 B4
         str = str.replace(/µ/g,'&micro;'); // 181 B5
         str = str.replace(/¶/g,'&para'); // 182 B6
         str = str.replace(/·/g,'&middot;'); // 183 B7
         str = str.replace(/¸/g,'&cedil;'); // 184 B8
         str = str.replace(/¹/g,'&sup1;'); // 185 B9
         str = str.replace(/º/g,'&ordm;'); // 186 BA
         str = str.replace(/»/g,'&raquo;'); // 187 BB
         str = str.replace(/¼/g,'&frac14;'); // 188 BC
         str = str.replace(/½/g,'&frac12;'); // 189 BD
         str = str.replace(/¾/g,'&frac34;'); // 190 BE
         str = str.replace(/¿/g,'&iquest;'); // 191 BF
         str = str.replace(/À/g,'&Agrave;'); // 192 C0
         str = str.replace(/Á/g,'&Aacute;'); // 193 C1
         str = str.replace(/Â/g,'&Acirc;'); // 194 C2
         str = str.replace(/Ã/g,'&Atilde;'); // 195 C3
         str = str.replace(/Ä/g,'&Auml;'); // 196 C4
         str = str.replace(/Å/g,'&Aring;'); // 197 C5
         str = str.replace(/Æ/g,'&AElig;'); // 198 C6
         str = str.replace(/Ç/g,'&Ccedil;'); // 199 C7
         str = str.replace(/È/g,'&Egrave;'); // 200 C8
         str = str.replace(/É/g,'&Eacute;'); // 201 C9
         str = str.replace(/Ê/g,'&Ecirc;'); // 202 CA
         str = str.replace(/Ë/g,'&Euml;'); // 203 CB
         str = str.replace(/Ì/g,'&Igrave;'); // 204 CC
         str = str.replace(/Í/g,'&Iacute;'); // 205 CD
         str = str.replace(/Î/g,'&Icirc;'); // 206 CE
         str = str.replace(/Ï/g,'&Iuml;'); // 207 CF
         str = str.replace(/Ð/g,'&ETH;'); // 208 D0
         str = str.replace(/Ñ/g,'&Ntilde;'); // 209 D1
         str = str.replace(/Ò/g,'&Ograve;'); // 210 D2
         str = str.replace(/Ó/g,'&Oacute;'); // 211 D3
         str = str.replace(/Ô/g,'&Ocirc;'); // 212 D4
         str = str.replace(/Õ/g,'&Otilde;'); // 213 D5
         str = str.replace(/Ö/g,'&Ouml;'); // 214 D6
         str = str.replace(/×/g,'&times;'); // 215 D7
         str = str.replace(/Ø/g,'&Oslash;'); // 216 D8
         str = str.replace(/Ù/g,'&Ugrave;'); // 217 D9
         str = str.replace(/Ú/g,'&Uacute;'); // 218 DA
         str = str.replace(/Û/g,'&Ucirc;'); // 219 DB
         str = str.replace(/Ü/g,'&Uuml;'); // 220 DC
         str = str.replace(/Ý/g,'&Yacute;'); // 221 DD
         str = str.replace(/Þ/g,'&THORN;'); // 222 DE
         str = str.replace(/ß/g,'&szlig;'); // 223 DF
         str = str.replace(/à/g,'&aacute;'); // 224 E0
         str = str.replace(/á/g,'&aacute;'); // 225 E1
         str = str.replace(/â/g,'&acirc;'); // 226 E2
         str = str.replace(/ã/g,'&atilde;'); // 227 E3
         str = str.replace(/ä/g,'&auml;'); // 228 E4
         str = str.replace(/å/g,'&aring;'); // 229 E5
         str = str.replace(/æ/g,'&aelig;'); // 230 E6
         str = str.replace(/ç/g,'&ccedil;'); // 231 E7
         str = str.replace(/è/g,'&egrave;'); // 232 E8
         str = str.replace(/é/g,'&eacute;'); // 233 E9
         str = str.replace(/ê/g,'&ecirc;'); // 234 EA
         str = str.replace(/ë/g,'&euml;'); // 235 EB
         str = str.replace(/ì/g,'&igrave;'); // 236 EC
         str = str.replace(/í/g,'&iacute;'); // 237 ED
         str = str.replace(/î/g,'&icirc;'); // 238 EE
         str = str.replace(/ï/g,'&iuml;'); // 239 EF
         str = str.replace(/ð/g,'&eth;'); // 240 F0
         str = str.replace(/ñ/g,'&ntilde;'); // 241 F1
         str = str.replace(/ò/g,'&ograve;'); // 242 F2
         str = str.replace(/ó/g,'&oacute;'); // 243 F3
         str = str.replace(/ô/g,'&ocirc;'); // 244 F4
         str = str.replace(/õ/g,'&otilde;'); // 245 F5
         str = str.replace(/ö/g,'&ouml;'); // 246 F6
         str = str.replace(/÷/g,'&divide;'); // 247 F7
         str = str.replace(/ø/g,'&oslash;'); // 248 F8
         str = str.replace(/ù/g,'&ugrave;'); // 249 F9
         str = str.replace(/ú/g,'&uacute;'); // 250 FA
         str = str.replace(/û/g,'&ucirc;'); // 251 FB
         str = str.replace(/ü/g,'&uuml;'); // 252 FC
         str = str.replace(/ý/g,'&yacute;'); // 253 FD
         str = str.replace(/þ/g,'&thorn;'); // 254 FE
         str = str.replace(/ÿ/g,'&yuml;'); // 255 FF

         return str;
     }

     /** Generate UUID used to uniquely identify a component*/
     this.generateUUID = function(){
        var d = new Date().getTime();

        if(window.performance && typeof window.performance.now === "function"){
            //use high-precision timer if available
            d += performance.now();
        }

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });

        return uuid;
     }

     /* Converts the given author data into HTML*/
     this.convertAuthorsToHTML = function(authorData) {
        var authorsStr = '';

        for (var index = 0; index < authorData.length; index++) {
            if (index > 0) {
                authorsStr += ", ";
            }
            authorsStr += authorData[index].last;
        }

        return authorsStr;
     }

     /** Convert a entry object to bibtex format */
     this.convertEntryToBibtex = function(entry){

        var str = "@" + entry.entryType + "{" + entry.cite + ", \n";

        $.each(entry, function(key, value) {
            if (key == "author") {
                str += "  author = { ";
                for (var index = 0; index < value.length; index++) {
                    if (index > 0) {
                        str += " and ";
                    }
                    str += value[index].last;
                }
                str += " },\n";
            } else if (key != "entryType" && key != "cite") {
                str += '  ' + key + " = { " + value + " },\n";
            }
        });

        return str + "}";
     }

     /* Helper function for formatting different types of bibtex entries */
     this.convertEntryToReference = function(entry){
        var that = this;

        var reference = "";

        // The formatting is based on APA (American Psychological Association)
        if(entry.entryType == "inproceedings" || entry.entryType == "conference"){
            reference = "AUTHORS (YEAR). TITLE. In <em>BOOKTITLE<\/em>, pp. PAGES, ADDRESS.";
        } else if(entry.entryType == "article"){
            reference = "AUTHORS (YEAR). TITLE. <em> JOURNAL, VOLUME<\/em>(NUMBER), pp. PAGES.";
        } else if(entry.entryType == "book"){
            reference = "AUTHORS (YEAR). <em>TITLE<\/em>. ADDRESS: PUBLISHER.";
        } else if(entry.entryType == "phdthesis" || entry.entryType == "mastersthesis"){
            reference = "AUTHORS (YEAR). <em>TITLE<\/em>. TYPE. ORGANIZATION, SCHOOL.";
        } else if(entry.entryType == "misc"){
            reference = "AUTHORS (YEAR). <em>TITLE<\/em>. HOWPUBLISHED. NOTE.";
        } else if(entry.entryType == "techreport"){
            reference = "AUTHORS (YEAR). TITLE. <em>INSTITUTION. NUMBER. Tech. Rep.<\/em>";
        } else if(entry.entryType == "inbook"){
            reference = "AUTHORS (YEAR). TITLE in <em>BOOKTITLE<\/em>, Edited by EDITOR, PUBLISHER, pp. PAGES, <em> SERIES<\/em>, Vol. VOLUME, ISBN: ISBN'";
        } else {
            reference = "AUTHORS (YEAR). TITLE. In <em>BOOKTITLE<\/em>, pp. PAGES, ADDRESS.";
        }

        // Replace all key in the string;
        reference = this._replaceKey(reference, "AUTHORS", this.convertAuthorsToHTML(entry.author));
        reference = this._replaceKey(reference, "TITLE", entry.title);
        reference = this._replaceKey(reference, "BOOKTITLE", entry.booktitle);
        reference = this._replaceKey(reference, "YEAR", entry.year);
        reference = this._replaceKey(reference, "PAGES", entry.pages);
        reference = this._replaceKey(reference, "ADDRESS", entry.address);
        reference = this._replaceKey(reference, "JOURNAL", entry.journal);
        reference = this._replaceKey(reference, "VOLUME", entry.volume);
        reference = this._replaceKey(reference, "NUMBER", entry.number);
        reference = this._replaceKey(reference, "PUBLISHER", entry.publisher);
        reference = this._replaceKey(reference, "ISSN", entry.issn);
        reference = this._replaceKey(reference, "ISBN'", entry.isbn);
        reference = this._replaceKey(reference, "SCHOOL", entry.school);
        reference = this._replaceKey(reference, "ORGANIZATION", entry.organization);
        reference = this._replaceKey(reference, "TYPE", entry.type);
        reference = this._replaceKey(reference, "HOWPUBLISHED", entry.howpublished);
        reference = this._replaceKey(reference, "NOTE", entry.note);
        reference = this._replaceKey(reference, "INSTITUTION", entry.institution);
        reference = this._replaceKey(reference, "CHAPTER", entry.chapter);
        reference = this._replaceKey(reference, "EDITOR", entry.editor);
        reference = this._replaceKey(reference, "SERIES", entry.series);

        // Add a link to paper's url
        if(entry.url){
            reference += " (<a class='pub-link' href='"+entry.url+"' target='_blank'>url</a>)";
        }

        // Add a link to paper's url
        if(entry.supporting_page){
            reference += " (<a class='pub-link' href='"+entry.supporting_page+"' target='_blank'>supporting page</a>)";
        }

        // UUID used to identify this entry when the user click at (bib) link
        var uuid = this.generateUUID();

        reference += " (<a href='#' class='pub-link pub-bib-link' data-bibtex-open='" + uuid + "'>bib</a>)";


        reference += "<div class='bibtex-entries' style='display:none' id='" + uuid + "'>";
        reference += "<pre>";
        reference += this.convertEntryToBibtex(entry);
        reference += "</pre>";
        reference += "</div>";

        return reference;
     }

     /** Change a key of a string into a value */
     this._replaceKey = function(str, key, value){
         return str.replace(key, this._get(key, value));
     };

     /** Get bibtex object's field */
     this._get = function(key, field){
         if(key == "PAGES" &&  (! field || field === "")){
             return "<span class='pub-missing'>Missing " + key + "</span>";
         }else if(key == "YEAR" &&  (! field || field === "")){
             return this.options.defaultYear;
         }

         return this.htmlify(field || "");
     }

     // Call the constructor
     this.initialize(bibtexSource, bibtexTable, bibtextChart, options)
 }
