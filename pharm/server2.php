							<?php

                            require 'config.php';
                            
                            // $sql = "SELECT SUM(total) as totAL FROM sales ";
                            $sql = "SELECT SUM(amount) as totAL FROM debt where date > now() - interval 7 day";
                            // where order_date > now() - interval 1 day;
                            if ($result = $conn->query($sql)) {
                              while ($row = $result->fetch_assoc()) {
                                  $row_total = $row['totAL']; 
                                  
                                 echo'
                                     <h1>'.$row_total.'</h1>
                                 ';
                              }
                              $result->free();
                            }
                            $conn->close();
                            ?> 
							