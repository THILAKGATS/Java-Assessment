// Transaction datas in array of objects
const transactions = [
    {
      transactionId: 1074,
      to: "Thilak",
      date: "17-04-2022",
      type: "debit",
      mode: "NEFT",
      amount: 500,
    },
    {
      transactionId: 1075,
      to: "Karthik",
      date: "19-12-2022",
      type: "credit",
      mode: "UPI",
      amount: 2000,
    }
    
    
  ];
  
  // Getting table's body
  let table = document.getElementsByTagName("tbody");
  
  // Printing datas in html table using innerHTML
  transactions.forEach((transaction) => {
    table[0].innerHTML += `<tr>
              <th scope="row">${transaction.transactionId}</th>
              <td>${transaction.to}</td>
              <td>${transaction.date}</td>
              <td>${transaction.type}</td>
              <td>${transaction.mode}</td>
              <td>${transaction.amount}</td>
            </tr>`;
  });