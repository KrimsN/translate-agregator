document.getElementById("sub").addEventListener("click", function(){
    text_to_translate = document.getElementById('input_box').value;
    ch_yandex = document.getElementById('ch_yandex');
    ch_google = document.getElementById('ch_google');
    text = document.getElementById("input_box").value;
    from = document.getElementById('from').value;
    to = document.getElementById('to').value;
    if (ch_yandex.checked) yandex_t(text, from+'-'+to);
    if (ch_google.checked) google_t(text, from+'-'+to);

});

function yandex_t(text, lang) {
    
    $.ajax({
        method: "POST",
        url: "https://translate.yandex.net/api/v1.5/tr.json/translate",
        data: { key: "trnsl.1.1.20170416T154027Z.9a862c8ad1ddfa27.6c29920c728276f5d52c2f38b11354fc2de91839", text: text, lang: lang }
        })
        .done(function( msg ) {
            document.getElementById('yandex-out').innerHTML = msg.text;
        });
}

function google_t()
{

}