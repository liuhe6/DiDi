<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="CSS/pagination.css"/>
    <link rel="stylesheet" href="CSS/bootstrap.min.css"/>
    <script type="text/javascript" src="Js/jquery-1.11.3.min.js" ></script>
    <script type="text/javascript" src="Js/jquery.pagination.js"></script>
</head>
<body>
 <div id="tablearea"></div>
 <div id="Pagination"></div>
 <script type="text/javascript">
     var items_per_page = 10;
     var page_index = 0;
     function Getdata(index){
         var pageIndex=index;
         $.ajax({
             type:"post",
             url:"disease.php",
             data:"pageIndex="+pageIndex+"&items_per_page="+items_per_page,
             dataType:'json',
             success:function(msg){
                 var total =msg.total;
                 var html ="<table class='table' style='width: 500px'> <tr><th>序号</th><th>名称</th></tr>";
                 var list =msg.list;
                 $.each(list,function(i,n){
                     html+='<tr><td>'+n['id']+'</td><td>'+n['name']+'</td></tr>'; //n['id']中的索引名一定要与传来的json一致
                 });
                 html+='</table>';
                 $('#tablearea').html(html);

                 if($("#Pagination").html().length == '')
                     $("#Pagination").pagination(total, {
                         'items_per_page'      : items_per_page,
                         'num_display_entries' : 5,
                         'num_edge_entries'    : 2,
                         'prev_text'           : "上一页",
                         'next_text'           : "下一页",
                         'callback'            : pageselectCallback
                     });

             }
         });
     }
     function pageselectCallback(page_index, jq){
         Getdata(page_index);
     }
     $(function(){
         Getdata(page_index);
     });
 </script>
</body>
</html>