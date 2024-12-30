<?php
$way=mysqli_connect("localhost","root","","10_am_ducat_weekday") or die("database connectivity error") ;
	if($_POST)
	{
		$val= $_POST['search'];
		$data=mysqli_query($way,"SELECT * FROM `product_details` WHERE `pro_title` LIKE '%$val%'");
		?>
		<table border="1" width="100%">
			<tr>
				<th>Product Title</th>
				<th>Product Brand</th>
				<th>Product Price</th>
				<th>Product Qty</th>
				<th>Product Desc</th>
			</tr>
			<?php 

					while($row=mysqli_fetch_assoc($data))
					{
						$pro_title=$row['pro_title'];
						$pro_brand=$row['pro_brand'];
						$pro_price=$row['pro_price'];
						$pro_qty=$row['pro_qty'];
						$pro_desc=$row['pro_desc'];
						?>
						<tr>
							<td><?php echo $pro_title; ?></td>
							<td><?php echo $pro_brand; ?></td>
							<td><?php echo $pro_price; ?></td>
							<td><?php echo $pro_qty; ?></td>
							<td><?php echo $pro_desc; ?></td>
						</tr>
						<?php
						
					}
			?>
		</table>

		<?php

	}

?>