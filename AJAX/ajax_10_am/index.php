<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>

	<div style="margin-left: 20%; margin-right: 20%;">
		<input type="text" name="" style="width:100%;height: 35px;" onkeyup="searchData()" id="sea">
		<div id="result"></div>
	</div>
	<script type="text/javascript">
		function searchData()
		{
			var data=$("#sea").val();
			// document.getElementById("result").innerHTML=data;
			var dataString = 'search='+ data;
	
						 $.ajax({
							type: "POST",
							url: "get_data_by_category.php",
							data: dataString,
							cache: false,
							success: function(html)
					        {
					        	//alert(html);
					            $("#result").html(html).show();
					            // window. scrollTo(50,50)
					        }
				});
		}
	</script>

</body>
</html>