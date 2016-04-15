<script type="text/javascript" src="Js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="Js/jquery.pagination.js"></script>
<div>
    <form method="post">
        <table class="table">
            <tr>
                <td>开始日期</td>
                <td><input type="date" id="date1"></td>
                <td>结束日期</td>
                <td><input type="date" id="date2"></td>
            </tr>
            <tr>
                <td>订单类型</td>
                <td><select id="ordertype">
                        <option value="已确认">已确认</option>
                        <option value="待确认">待确认</option>
                    </select></td>
                <td colspan="2"><input id="search" type="button" value="搜索" width="100px"></td>
            </tr>
        </table>
    </form>
</div>
<div id="tablearea" style="margin-left: 100px"></div>
<div id="Pagination"></div>

<script type="text/javascript">
    var items_per_page = 10;
    var page_index = 0;
    var date1;
    var date2;
    var status;
    function Getdata(index){
        var pageIndex=index;
        $.ajax({
            type: "post",
            url: "model/orderlist.php",
            data: "pageIndex=" + pageIndex + "&items_per_page=" + items_per_page,
            dataType: 'json',
            success: function (msg) {
                var total = msg.total;
                if (total == 0) {
                    var warnhtml = "<p>没有相关记录</p>";
                    $('#tablearea').html(warnhtml);
                        }
                else
                    {
                        var html = '<table class="table " style="width: 500px"> <tr><th>时间</th><th>抢单内容</th><th>订单状态</th></tr>';
                        var list = msg.list;
                        $.each(list, function (i, n) {
                            html += '<tr><td>' + n['time'] + '</td><td>' + n['detail'] + '</td><td>' + n['status'] + '</td><td><button class="detail" oid="'+ n['oid'] +'">详情</button></td></tr>'; //n['id']中的索引名一定要与传来的json一致
                        });
                        html += '</table>';
                        $('#tablearea').html(html);
                        $(".detail").click(function(){
                            var oid = $(this).attr('oid');
                            $("#content").load("DrugstoreOrderDetail.php",{"oid" : oid});
                        });

                        if ($("#Pagination").html().length == '')
                            $("#Pagination").pagination(total, {
                                'items_per_page': items_per_page,
                                'num_display_entries': 5,
                                'num_edge_entries': 2,
                                'prev_text': "上一页",
                                'next_text': "下一页",
                                'callback': pageselectCallback
                            });
                    }
                }
            });

    }
    function pageselectCallback(page_index, jq){
        Getdata(page_index);
    }
    $(function(){
        var status = $("#ordertype").val();
        Getdata(page_index);
        $("#search").click(function() {
            $("#tablearea").empty();
            $("#Pagination").empty();
            checkdate1();
            checkdate2();
            getsearch(page_index);    //查询函数
        });
    });

    function getsearch(index){
        var pageIndex=index;
        $.ajax({
            type: "post",
            url: "model/searchorderlist.php",
            data: "pageIndex=" + pageIndex + "&items_per_page=" + items_per_page + "&date1=" + date1 + "&date2=" + date2 +"&status="+status,
            dataType: 'json',
            success: function (msg) {
                var total = msg.total;
                if (total == 0) {
                    var warnhtml = "<p>没有相关记录</p>";
                    $('#tablearea').html(warnhtml);
                }
                else
                {
                    var html = "<table class='table' style='width: 500px'> <tr><th>时间</th><th>抢单内容</th><th>订单状态</th></tr>";
                    var list = msg.list;
                    $.each(list, function (i, n) {
                        html += '<tr><td>' + n['time'] + '</td><td>' + n['detail'] + '</td><td>' + n['status'] + '</td><td><button class="detail" oid="'+ n['oid'] +'">详情</button></td></tr>'; //n['id']中的索引名一定要与传来的json一致
                    });
                    html += '</table>';
                    $('#tablearea').html(html);
                    $(".detail").click(function(){
                        var oid = $(this).attr('oid');
                        $("#content").load("DrugstoreOrderDetail.php",{"oid" : oid});
                    });

                    if ($("#Pagination").html().length == '')
                        $("#Pagination").pagination(total, {
                            'items_per_page': items_per_page,
                            'num_display_entries': 5,
                            'num_edge_entries': 2,
                            'prev_text': "上一页",
                            'next_text': "下一页",
                            'callback': searchpageselectCallback
                        });
                }
            }
        });
    }

    function searchpageselectCallback(page_index, jq){
        getsearch(page_index);
    }

    function checkdate1(){
        date1 = $("#date1").val();
        if (date1 ==""){
            date1 ="1970-1-1";
        }
        else
        {
            date1 = $("#date1").val();
        }
    }

    function checkdate2(){
        date2 = $("#date2").val();
        if (date2 ==""){
            var t =new Date();
            date2= t.getFullYear()+"-"+ (t.getMonth()+1)+"-"+ t.getDate();
        }
        else{
            date2 = $("#date2").val();
        }
    }
</script>
