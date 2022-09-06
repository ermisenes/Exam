$('#SendBtn').click(function (e) {
    var articleId = $('#articleId').val();
   
    var data = { "id": articleId};
    $.ajax({
        url: '/Exam/Check/',
        type: 'post',
        data: data,
       dataType: 'JSON',
      success: function (dataList) {
          console.log(dataList.result.length);
          console.log(dataList.result);

            for (let i = 0; i < dataList.result.length; ++i) {
                console.log(dataList.result[i]["key"]);
                var el="#"+dataList.result[i]["key"];
              $(el).parent().css("background-color", "red");
            }
          return;
        },

    });



});