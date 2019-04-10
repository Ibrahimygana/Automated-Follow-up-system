// $(".deleting").click(function(){
//     $("table tbody").find('input[name="record"]').each(function(){
//         if($(this).is(":checked")){
//             $(this).parents("tr").remove();
//         }
//     });
// });
  

     var contact = {
         
         table: document.getElementById('myTable'),
         memberList: function() {
            var fullName = document.getElementById("fullName").value;
            var email = document.getElementById("email").value;
            var phonenumber = document.getElementById("phone").value;
            var date = document.getElementById("date").value;
            
            var newRow = this.table.insertRow(1);
            cell1 = newRow.insertCell(0);
            cell2= newRow.insertCell(1);
            cell3 = newRow.insertCell(2);
           cell4 = newRow.insertCell(3);
           cell1.innerHTML= fullName;
           cell2.innerHTML= email;
           cell3.innerHTML= phonenumber;
           cell4.innerHTML= date;
           
           return { fullName, email, phonenumber ,date };
         }
        };



        var message = {
            table: document.getElementById('firstTable'),
            addMessage: function() {
               var newMessage = document.getElementById("newMessage").value;
               var newEmail = document.getElementById("newEmail").value;
               var newDate = document.getElementById("newDate").value;
               var newRow = this.table.insertRow(1);
              cell1 = newRow.insertCell(0);
               cell2= newRow.insertCell(1);
               cell3 = newRow.insertCell(2);
             // cell1.innerHTML='<input type="checkbox" name="record">';
              cell1.innerHTML= newMessage;
              cell2.innerHTML= newEmail;
              cell3.innerHTML= newDate;
              return { newMessage, newEmail, newDate };
            }
           };
        //    var record = {
        //     table: document.getElementById('secondTable'),
        //     addRecord: function() {
        //        var newrecord = document.getElementById("newRecord").value;
        //        var recordate = document.getElementById("recordate").value;
        //        var newRow = this.table.insertRow(1);
        //        cell1 = newRow.insertCell(0);
        //        cell2= newRow.insertCell(1);
        //        cell3 = newRow.insertCell(2);
        //       cell1.innerHTML='<input type="checkbox" name="record">';
        //       cell2.innerHTML= newrecord;
        //       cell3.innerHTML= recordate;
        //       return { newrecord, recordate };
        //     }
        //    };