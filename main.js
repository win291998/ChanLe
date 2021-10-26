let data = ["box-1","box-2","box-3","box-4","box-5","box-6","box-7","box-8","box-9","box-10"];
let size = data.length;
console.log(size);
for(let i = 0; i < size; i++){
    if (i%2==0){
      document.getElementById(data[i]).style.backgroundColor = "red";

    }
    else
    {
      document.getElementById(data[i]).style.backgroundColor = "blue";

    }
}

    
