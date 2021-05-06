function list_return(list_len) {
    x = '';
    for (let i = 0; i < list_len; i++) {
        x += '<li id="f'.concat(i).concat('"class= "f">');
        x += 'fact '.concat(i + 1);
        x += '</li>'
    }
    $("#lftlist").html(x);
}

function mouseOver(id) {
    $(id).on('mouseenter', function() {
        $(id).css('color', '#2a6496');
        $(id).css('text-decoration', 'underline');
        facts = {
            "#f0": "Bananas float in water because they are less dense in comparison.",
            "#f1": "Bananas are one of the most popular fruits in the American diet.",
            "#f2": "Bananas grow on plants that are officially considered an herb.",
            "#f3": "The banana is actually classified as a berry.",
            "#f4": "Bananas may be considered a mood enhancer because it contains the amino acid, tryptophan and Vitamin B6 that helps the body produce serotonin.",
            "#f5": "The bananas we eat today, the Cavendish, are different from pre-1960s\u2019 bananas, the Gros Michael, as those have been wiped out by \u201cthe panama disease.\u201d",
            "#f6": "Bananas can help lower blood pressure and protect heart health due to high potassium and low salt content.",
            "#f7": "The inside of a banana peel can help relieve itching and inflammation, such as from bug bit or poison ivy.",
            "#f8": "Bananas are great pre-workout snacks because they are loaded with potassium that aids in maintaining nerve and muscle function during work outs.",
            "#f9": "Humans share about 50% of our DNA with bananas."
        }

        $('.fact').html(facts[id]);
    })
    $(id).on('mouseout', function() {
        $(id).css('color', '#323a41');
        $(id).css('text-decoration', 'none');
        // $('.fact').hide();
    })
}


$(document).ready(function() {
    list_return(10);
    var i = 0;
    while (i <= 4) {
        reasons = {
            "0": "Bananas Contain Many Important Nutrients like Potassium, Vitamin B6, Vitamin C, Magnesium, Copper",
            "1": "Bananas Contain Nutrients That Moderate Blood Sugar Levels",
            "2": "Bananas May Improve Digestive Health",
            "3": "Bananas May Aid Weight Loss",
            "4": "Bananas May Support Heart Health",
            "5": "Bananas Contain Powerful Antioxidants"
        }
        $('#midtxt').append(
            `<li class= "midli">` +
            reasons[i] +
            `</li>`
        )
        i += 1;
    }
    var i = 0;
    while (i <= $("#lftlist li").length) {
        id = '#f'.concat(i);
        mouseOver(id);
        i += 1;
    }

    var myScreenOrientation = window.screen.orientation;
    myScreenOrientation.lock("landscape");
})