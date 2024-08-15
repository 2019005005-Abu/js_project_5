 let addTask=()=>{
 let taskInput=document.getElementById('task_input');
 let TaskInputValue=taskInput.value.trim();
 if(TaskInputValue !==''){
    let taskList=document.getElementById('ulList')
   let li= document.createElement('li');
   li.innerHTML='<input type="checkbox" name="" id="" onclick="DeleteChecked()">'+' '+TaskInputValue+'  '+
   '<button onclick="DeleteTask(this)">Delete</button>'
   taskList.appendChild(li);
   taskInput.value=" ";

 }else{
    alert('Please Add a Task');
 }
}

const DeleteTask=(btn)=>{
    let li=btn.parentNode
    li.parentNode.removeChild(li);
    console.log(li);
}

const DeleteChecked=()=>{
    let taskList=document.getElementById('ulList')
    let checkBoxes=document.querySelectorAll('input[type="checkbox"]:checked')
    checkBoxes.forEach(checkBox=>{
       let li=checkBox.parentNode;
       li.parentNode.removeChild(li);
    })
}


