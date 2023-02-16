
sno = 1;

document.getElementById('submit').addEventListener('click' , (e)=>{
    e.preventDefault();

    todoTitle = document.getElementById('todoTitle').value;
    todoDesc = document.getElementById('todoDesc').value;
    document.getElementById('table').insertAdjacentHTML( "beforeend",`
    <tr>
    <th scope="row">${sno}</th>
    <td>${todoTitle}</td>
    <td>${todoDesc}</td>
    <td><button class="btn btn-sm btn-success">Update</button></td>
    <td><button class="btn btn-sm btn-danger">Delete</button></td>
  </tr>
    `);

    sno = sno + 1 ;
    
})