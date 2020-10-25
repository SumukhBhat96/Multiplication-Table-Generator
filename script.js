var i = 1;

function generate() {
    var x = document.getElementById("num1").value;
    var y = 0;

    if(isNaN(x)){
        document.getElementById('output').innerHTML = "<b><span>Please Enter a Number</span><b>";
    } else{
        var arr = new Array(10);

        for (i = 1; i <= 10; i++) {
            y = x + " * " + i + " = " + x * i + "<br>";
            arr[i] = "<b>" + y + "</b>";
        }
        
        document.getElementById('output').innerHTML = arr.join(" ");
    }
  

}

