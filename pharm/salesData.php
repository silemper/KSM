
<?php
    //open connection to mysql db
    $connection = mysqli_connect("localhost","root","","pharm") or die("Error " . mysqli_error($connection));

    //fetch table rows from mysql db
    $sql = "select * from products";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    //create an array
    $salesData = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $salesData[] = $row;
    }
    echo json_encode($salesData);

    //close the db connection
    mysqli_close($connection);

     //write to json file
    // $fp = fopen('products.json', 'w');
    // fwrite($fp, json_encode($salesData));
    // fclose($fp);
?>