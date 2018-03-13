$(document).ready(function () {





    // show 10 gifs for the topic
    // click the gif to stop the motion?

    //----- global variables-----------------------------------
    // create an array with prefilled topics
    var topics = ["cats", "dogs", "mice", "horse", "elephants"];



    //----- functions------------------------------------------
    function makebuttons(btnnam) {
        var btn = document.createElement("button");
        var txt = document.createTextNode(String(btnnam));

        btn.appendChild(txt);
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "selector");
        btn.setAttribute("id", btnnam);
        return btn;
    }

    function showgifs(gifs) {
        for (var i = 0; i < gifs.length; i++) {

            // // $("#displarea").append("<img src="+gifs[i].url+"&quot />");
            // var imgurl = gifs[i].images.downsized.url;
            // // img = $("img").attr("src", imgurl);
            // $("#displarea").append("src",imgurl);


            var img = $("<img>"); //Equivalent: $(document.createElement('img'))
            img.attr('src', gifs[i].images.downsized.url);
            img.appendTo("#displarea");           
        }
    }


    //----- end of functions-----------------------------------

    //----- start----------------------------------------------
    // $(window).on("load", function () {

    // make buttons using the information in the array
    for (var i = 0; i < topics.length; i++) {
        $("#bttnarea").append(makebuttons(topics[i]));
    }

    // get new topics from input field
    // create a new button for the new topic
    $("#submit").click(function () {
        $("#bttnarea").append(makebuttons($("#newtop").val()));
        $("#newtop").val("");
    });

    $("#bttnarea").click(function () {
        var seltopic = event.target.id;

        // create an ajax call to pull data from glipghy when the button is clicked
        $.ajax({ url: "http://api.giphy.com/v1/gifs/search?q=" + seltopic + "&api_key=p7EZTvRV6Tqdy1gJT54MsoWVyp7sjVNs&limit=10&rating=g", method: "GET" }).then(function (response) {
            console.log(response);
            console.log(response.data);
            // clear the space where the gifs will be shown
            $("#displarea").empty();
            showgifs(response.data);

        });

    });





    // });


});